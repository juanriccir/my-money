# My Money

App personal para controlar gastos e ingresos. Escribes como en un chat
(`almuerzo 25k nequi`, `+sueldo 3.8M transferencia`) y ves dashboards, diario y presupuestos.

- Funciona en Android y iPhone, y se instala con su propio ícono.
- Funciona sin conexión después de la primera vez.
- Tus datos se guardan solo en tu celular. No hay servidor ni cuenta. Nada de tus movimientos se sube a GitHub.

## Subirla a GitHub Pages (gratis, unos 10 minutos)

1. Entra a https://github.com y crea una cuenta si no tienes.
2. Toca **New repository**. Nombre: `my-money`. Déjalo **Public** (en el plan gratis, Pages necesita repositorio público). Toca **Create repository**.
3. En el repositorio nuevo toca **uploading an existing file**.
4. Descomprime el .zip y arrastra TODO su contenido: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` y la carpeta `icons` (con sus 4 imágenes). Toca **Commit changes**.
5. Ve a **Settings → Pages**. En *Branch* elige `main` y la carpeta `/ (root)`. Toca **Save**.
6. Espera 1 o 2 minutos y recarga. Arriba aparece tu dirección: `https://TU-USUARIO.github.io/my-money/`.

## Instalarla en el celular

- **Android (Chrome):** abre la dirección, menú ⋮ y luego **Instalar app**.
- **iPhone (Safari):** abre la dirección, botón **Compartir** y luego **Añadir a pantalla de inicio**.

Ábrela siempre desde el ícono instalado, para que use el mismo almacenamiento.

## Respaldo

Los datos viven en el navegador del celular. Si lo borras o cambias de teléfono se pierden.
En la pestaña **Datos** usa **Descargar respaldo** de vez en cuando, y **Restaurar respaldo** en el celular nuevo.
Para Excel usa **Descargar para Excel** (CSV con punto y coma, se abre bien en Excel en español).

## Actualizar la app

Reemplaza `index.html` en GitHub (Add file → Upload files). Para que los celulares reciban el cambio,
en `sw.js` sube el número de `VERSION` (por ejemplo `my-money-v2`).
