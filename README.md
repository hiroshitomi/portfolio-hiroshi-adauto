# Portfolio — Tomás Hiroshi Adauto

Landing page personal de una sola página (HTML + CSS + JS, sin frameworks ni build step).
Bilingüe ES/EN con toggle, tema claro minimalista y navegación por scroll.

## Estructura

```
index.html    Estructura y contenido
styles.css    Estilos (tema claro, responsive)
script.js     i18n ES/EN + menú móvil
```

## Desarrollo local

Al ser estático, basta con abrir `index.html` en el navegador. Para servirlo con un
servidor local (recomendado):

```bash
npx serve .
```

## Deploy

### Vercel
1. Subir el repositorio a GitHub.
2. En Vercel: **New Project** → importar el repo.
3. Framework Preset: **Other** (no necesita build). Output: raíz del proyecto.
4. Deploy.

### GitHub Pages
1. Subir a GitHub.
2. **Settings → Pages** → Source: rama `main`, carpeta `/root`.

## Editar contenido

- Los textos en ambos idiomas viven en el objeto `translations` de [`script.js`](script.js).
- Cada texto traducible en el HTML usa el atributo `data-i18n="clave"`.
- Para agregar un texto: añadí la `clave` en el HTML y la traducción ES/EN en `script.js`.
