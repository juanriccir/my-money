/* My Money · service worker. Subir VERSION en cada actualización. */
const VERSION = 'my-money-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.all(SHELL.map(u => fetch(new Request(u, { cache: 'reload' })).then(r => { if (r.ok) return c.put(u, r); }).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Páginas: siempre intenta la red saltándose la caché HTTP de GitHub Pages; sin internet usa la copia guardada.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req.url, { cache: 'no-cache' })
        .then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); } return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  if (url.origin === location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(hit => {
        const net = fetch(req, url.origin === location.origin ? { cache: 'no-cache' } : undefined)
          .then(r => { if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return r; })
          .catch(() => hit);
        return hit || net;
      })
    );
  }
});
