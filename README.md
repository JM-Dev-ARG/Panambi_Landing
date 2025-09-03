# 🌐 Sitio Web de Panambi Landing

Este es el repositorio oficial del sitio web de **Panambi Landing**, una aplicación web construida con Astro. Panambi Landing es un landing page personal.

## ![Captura del sitio](https://panambilanding.netlify.app/img/panambi_web.png)

## 🚀 Estructura del Proyecto

El proyecto sigue la estructura estándar de una aplicación Astro.

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

- `public/`: Contiene todos los activos estáticos como imágenes y logos.
- `src/`: Contiene el código fuente de la aplicación.
- `src/components/`: Contiene componentes reutilizables de Astro y Preact, organizados en `Data`, `Icons`, `preact`, `sections`, `shared` y `svgIcons`.
- `src/layouts/`: Contiene el `Layout.astro` principal que define la estructura de todas las páginas.
- `src/pages/`: Contiene las páginas del sitio. `index.astro` es la página principal, y `api/sendMail.ts` es un endpoint para manejar los envíos de correo electrónico.
- `astro.config.mjs`: Archivo de configuración principal de Astro.
- `tailwind.config.mjs`: Archivo de configuración para Tailwind CSS.
- `package.json`: Lista las dependencias y scripts del proyecto.

---

## ✨ Características

- **Vitrina de Servicios**: Presentación detallada de los servicios ofrecidos.
- **Formulario de Contacto**: Un formulario de contacto (`FormContacto.tsx`) que utiliza una ruta de API para enviar correos a través de Mailgun.
- **Diseño Responsivo**: El sitio web es completamente responsivo.
- **Notificaciones**: Alertas personalizadas con SweetAlert2.

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando           | Acción                                                     |
| :---------------- | :--------------------------------------------------------- |
| `npm install`     | Instala las dependencias                                   |
| `npm run dev`     | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`   | Compila el sitio de producción en la carpeta `./dist/`     |
| `npm run preview` | Previsualiza la compilación localmente, antes de desplegar |

---

## 👀 Stack Tecnológico & Dependencias

- **Framework**: [Astro](https://astro.build/)
- **UI Framework**: [Preact](https://preactjs.com/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Despliegue**: [Netlify](https://www.netlify.com/)
- **Email**: [Mailgun](https://www.mailgun.com/)
- **Alertas**: [SweetAlert2](https://sweetalert2.github.io/)
- **Typescript**

---

## 📸 Demo

🔗 [Ver sitio en producción](https://panambi.net/)

---

## 📄 Licencia

Este proyecto es privado y fue desarrollado para **Panambi Landing**.

---

## 🙌 Agradecimientos

- A [Astro](https://astro.build) por hacer el desarrollo web más simple y rápido.
- A la comunidad de [Tailwind CSS](https://tailwindcss.com) por su enfoque moderno de estilos.
