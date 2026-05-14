<div align="center">

<br>

# 🌱 Centro Educativo Jardín de Príncipes

**Sitio web oficial** · Santo Domingo, República Dominicana
<br>
<sub><em>Creciendo conforme al ideal de Dios</em></sub>

<br>

### 🌐 [jdp-website-2-0.pages.dev](https://jdp-website-2-0.pages.dev)

<br>

[![Live](https://img.shields.io/badge/Sitio_en_vivo-00255b?style=for-the-badge&logo=cloudflare&logoColor=fdc800)](https://jdp-website-2-0.pages.dev)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Flowbite 3](https://img.shields.io/badge/Flowbite-3.1-1C64F2?style=for-the-badge&logo=flowbite&logoColor=white)](https://flowbite.com)
[![Dark mode](https://img.shields.io/badge/Modo_oscuro-0A1228?style=for-the-badge&logoColor=fdc800)](#-sistema-de-dise%C3%B1o)
[![Made in DR](https://img.shields.io/badge/Hecho_en-DO-e67e22?style=for-the-badge&labelColor=00255b)](#)

</div>

<br>

> *"Fomentar un legado espiritual en cada alumno formando **mano, mente y corazón**, preparando así a cada niño de tal manera que pueda crecer conforme al ideal de Dios."*

<br>

## ✨ Sobre la institución

El **Centro Educativo Jardín de Príncipes** es una institución cristiana en Santo Domingo, R.D., dedicada a la formación integral de niños y niñas desde el **nivel inicial** —Párvulos, Pre-Kinder, Kinder y Pre-Primario— hasta el **quinto grado de primaria**.

El nombre nace de una verdad espiritual:

> *Dios es nuestro Padre Celestial, un Rey; y nosotros, como sus hijos, somos príncipes y princesas.*

La institución es administrada por un grupo familiar cristiano cuya vocación docente ha sido heredada y refinada generación tras generación.

<br>

## 👥 Equipo directivo

| Persona | Rol |
| :--- | :--- |
| **Sra. Ana A. De La Cruz Jiménez** | Directora General |
| **Yocasta L Paix** | Directora Administrativa |
| **Elizabeth Rivero** | Secretaria Docente |

> La **Sra. Ana A. De La Cruz Jiménez** acumula **42 años de vocación docente**. Inició a los 14 años como asistente en el Colegio Carrusel Infantil y se desempeñó por 26 años en el Instituto CI Bilingual School como maestra de nivel inicial y asistente de dirección. Dirige académicamente el Centro Educativo Jardín de Príncipes desde **2011**.

<br>

## 🧭 Misión, visión y compromiso

| | |
| :--- | :--- |
| **Misión** | Fomentar un legado espiritual en cada alumno formando *mano, mente y corazón*, preparándolos para crecer conforme al ideal de Dios. |
| **Visión** | La verdadera educación es el *desarrollo armonioso* de las facultades físicas, mentales y espirituales, preparando al ser humano para el servicio en este mundo y para la vida eterna. |
| **Compromiso** | Moldear ciudadanos enfocados a la *excelencia académica* y comprometidos con la moral, la verdad, la justicia y los valores cristianos. |

<br>

## 🎨 Sistema de diseño

### Paleta

| Color | Token | Hex | Uso |
| :---: | :--- | :--- | :--- |
| ![#00255b](https://readme-swatches.vercel.app/00255b) | `jdpblue` | `#00255b` | Identidad · texto principal |
| ![#e67e22](https://readme-swatches.vercel.app/e67e22) | `jdporange` | `#e67e22` | Acento · CTAs |
| ![#fdc800](https://readme-swatches.vercel.app/fdc800) | `yellowish` | `#fdc800` | Highlight |
| ![#fff8ee](https://readme-swatches.vercel.app/fff8ee?style=square) | `jdpcream` | `#fff8ee` | Fondo (claro) |
| ![#f5ecdc](https://readme-swatches.vercel.app/f5ecdc?style=square) | `jdpsand` | `#f5ecdc` | Fondo cálido |
| ![#fde8d2](https://readme-swatches.vercel.app/fde8d2?style=square) | `jdpink` | `#fde8d2` | Fondo más cálido |
| ![#0a1228](https://readme-swatches.vercel.app/0a1228) | `jdpnight` | `#0a1228` | Fondo (oscuro) |
| ![#131d40](https://readme-swatches.vercel.app/131d40) | `jdpcard` | `#131d40` | Tarjetas (oscuro) |

### Tipografía

| Familia | Uso | Notas |
| :--- | :--- | :--- |
| **Fraunces** | Display | Serif variable con itálica editorial |
| **DM Sans** | Cuerpo | Geométrica con calidez |
| **Freshman** | Logotipo | TTF auto-hospedado en `fonts/` |

### Características

- ✦ **Modo claro/oscuro** persistente con `localStorage`, sincronizado con `prefers-color-scheme` y aplicado antes del primer paint (sin flash).
- ✦ **Animaciones de scroll** con `IntersectionObserver` y delays escalonados.
- ✦ **Contadores animados** con easing cúbico.
- ✦ **Marquees** lentas para valores y testimonios, con pausa al hacer hover.
- ✦ **Bordes orgánicos** (blobs) en imágenes del hero.
- ✦ **Navegación con backdrop-blur** al hacer scroll.
- ✦ **Tipografía fluida** con `clamp()` para escalado responsive.
- ✦ Respeta `prefers-reduced-motion` desactivando animaciones.

<br>

## 🏗️ Estructura del proyecto

```text
jdp-website-2.0/
├── assets/                    Imágenes del campus y portadas
├── fonts/                     Freshman.ttf (logotipo)
├── scripts/
│   └── apply-dark-variants.mjs Codemod que añadió las variantes dark:
├── src/
│   ├── index.html             Landing principal
│   ├── about_us.html          Historia y liderazgo
│   ├── contact.html           Formulario, mapa y FAQ
│   ├── input.css              @theme · variantes · animaciones
│   └── output.css             Compilado por Tailwind (ignorado en git)
├── index.js                   Reveals · counters · theme · menú · back-to-top
├── package.json
└── README.md
```

<br>

## 🚀 Empezar

```bash
npm install
npm run dev
```

### Scripts

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Compila CSS con `--watch` durante desarrollo |
| `npm run build` | Compila CSS minificado para producción |
| `npm run format` | Aplica Prettier con plugin de Tailwind |

> ℹ️ El CSS compilado (`src/output.css`) está ignorado por git — se genera durante el build. Para desplegar, ejecuta `npm run build` antes de subir.

<br>

## 📄 Páginas

| Archivo | Contenido |
| :--- | :--- |
| [`src/index.html`](src/index.html) | Hero, programas, valores, misión, galería, carta de la directora, admisiones, FAQ |
| [`src/about_us.html`](src/about_us.html) | Historia, línea del tiempo, misión/visión, liderazgo |
| [`src/contact.html`](src/contact.html) | Información, formulario, mapa, FAQ de admisiones |

<br>

## ☁️ Despliegue

El sitio está en producción en [**jdp-website-2-0.pages.dev**](https://jdp-website-2-0.pages.dev) y se despliega automáticamente en **Cloudflare** (gratis, ancho de banda ilimitado, HTTPS automático, vistas previas en cada PR).

`npm run build` compila Tailwind **y** ejecuta `scripts/build-site.mjs`, que genera un directorio `dist/` plano y listo para producción — los HTML viven en `src/` durante el desarrollo, pero el script reescribe las rutas `../assets/` y `../index.js` a `./` al copiarlos a `dist/`.

### Configuración en Cloudflare Pages (una sola vez)

| Campo | Valor |
| :--- | :--- |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | _(vacío)_ |
| `NODE_VERSION` | `20` |

Cada `push` a `main` dispara un despliegue de producción. Cada PR recibe una URL de vista previa.

<br>

## 📞 Contacto

<table>
<tr>
<td>📍</td>
<td>Jardines del Norte, C. Luxemburgo #5A · Santo Domingo, D.N.</td>
</tr>
<tr>
<td>☎</td>
<td><a href="tel:+18096361065">+1 (809) 636-1065</a></td>
</tr>
<tr>
<td>✉</td>
<td><a href="mailto:jardindeprincipes7@gmail.com">jardindeprincipes7@gmail.com</a></td>
</tr>
<tr>
<td>🕒</td>
<td>Lun–Vie · 7:30–14:30</td>
</tr>
</table>

<br>

---

<div align="center">

Diseño y desarrollo por <strong><a href="https://github.com/NappyNexus">Gabriel Soriano</a></strong>

<sub>Hecho con cariño en Santo Domingo · R.D.</sub>

</div>
