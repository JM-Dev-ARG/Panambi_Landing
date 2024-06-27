import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as addAttribute, b as createAstro, d as renderComponent, f as renderHead } from './astro/server_6rCQxYeE.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-2xl mx-auto px-6 md:px-14 xl:px-14"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/webs/Panambi_Landing/src/components/shared/Container.astro", void 0);

const $$Astro$6 = createAstro();
const $$Nombre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Nombre;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`${className}`, "class")} data-astro-cid-fyadqjo5> <svg class="scale-up-center" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.37 205.25" data-astro-cid-fyadqjo5><defs data-astro-cid-fyadqjo5><style>
        .cls-1 {
          fill: #254441;
        }
        .cls-1,
        .cls-2,
        .cls-3 {
          stroke-width: 0px;
        }
        .cls-2 {
          fill: #aa8abf;
        }
        .cls-3 {
          fill: #d2df8a;
        }
      </style></defs><g id="Capa_1-2" data-astro-cid-fyadqjo5><rect class="cls-1" width="212.37" height="205.25" rx="31.74" ry="31.74" data-astro-cid-fyadqjo5></rect><path class="cls-3" d="m151.41,137.46v10.25c0,1.85-.68,3.53-1.73,4.3l-18.44,13.42c-3.86,2.81-9.1,2.81-12.96,0l-18.44-13.42c-1.06-.77-1.73-2.45-1.73-4.3v-10.25c0-3.54,2.35-5.83,4.33-4.2l20.96,17.29c.79.65,1.93.65,2.73,0l20.96-17.29c1.97-1.63,4.33.66,4.33,4.2Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m94.65,41.7c4.97-2.67,10.65-4,17.04-4,7.43,0,14.16,1.83,20.18,5.49,6.02,3.67,10.78,8.87,14.29,15.62,3.51,6.75,5.26,14.58,5.26,23.47s-1.75,16.78-5.26,23.63c-3.51,6.86-8.27,12.17-14.29,15.94-6.02,3.77-12.74,5.65-20.18,5.65-6.39,0-12.01-1.31-16.88-3.93-4.87-2.62-8.82-5.91-11.85-9.89v53.86h-21.98V39.11h21.98v12.56c2.83-3.98,6.72-7.3,11.7-9.97Zm31.09,27.01c-2.15-3.82-4.97-6.72-8.48-8.71-3.51-1.99-7.3-2.98-11.38-2.98s-7.72,1.02-11.23,3.06c-3.51,2.04-6.33,5-8.48,8.87-2.15,3.87-3.22,8.43-3.22,13.66s1.07,9.79,3.22,13.66c2.14,3.87,4.97,6.83,8.48,8.87,3.51,2.04,7.25,3.06,11.23,3.06s7.88-1.05,11.38-3.14c3.51-2.09,6.33-5.08,8.48-8.95,2.14-3.87,3.22-8.48,3.22-13.82s-1.07-9.76-3.22-13.58Z" data-astro-cid-fyadqjo5></path></g></svg> <svg class="slide-right" id="nombre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.98 130.51" data-astro-cid-fyadqjo5><defs data-astro-cid-fyadqjo5><style>
        .cls-1 {
          fill: #254441;
        }
        .cls-1,
        .cls-2 {
          stroke-width: 0px;
        }
        .cls-2 {
          fill: #aa8abf;
        }
      </style></defs><g id="Capa_1-2" data-astro-cid-fyadqjo5><path class="cls-2" d="m26.01,33.3c3.84-2.06,8.23-3.09,13.16-3.09,5.74,0,10.93,1.42,15.58,4.24,4.65,2.83,8.33,6.85,11.04,12.07,2.71,5.22,4.06,11.26,4.06,18.13s-1.36,12.96-4.06,18.25c-2.71,5.3-6.39,9.4-11.04,12.31-4.65,2.91-9.84,4.37-15.58,4.37-4.93,0-9.28-1.01-13.04-3.03-3.76-2.02-6.81-4.57-9.16-7.64v41.6H0V31.3h16.98v9.7c2.18-3.07,5.19-5.64,9.03-7.7Zm24.01,20.86c-1.66-2.95-3.84-5.19-6.55-6.73-2.71-1.54-5.64-2.3-8.79-2.3s-5.96.79-8.67,2.36c-2.71,1.58-4.89,3.86-6.55,6.85-1.66,2.99-2.49,6.51-2.49,10.55s.83,7.56,2.49,10.55c1.66,2.99,3.84,5.28,6.55,6.85,2.71,1.58,5.6,2.36,8.67,2.36s6.08-.81,8.79-2.43c2.71-1.62,4.89-3.92,6.55-6.91,1.66-2.99,2.49-6.55,2.49-10.67s-.83-7.54-2.49-10.49Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m81.92,46.58c2.71-5.25,6.39-9.3,11.04-12.13,4.65-2.83,9.84-4.24,15.58-4.24,5.01,0,9.4,1.01,13.16,3.03,3.76,2.02,6.77,4.57,9.04,7.64v-9.58h17.1v67.19h-17.1v-9.82c-2.18,3.15-5.2,5.76-9.04,7.82-3.84,2.06-8.27,3.09-13.28,3.09-5.66,0-10.82-1.46-15.46-4.37-4.65-2.91-8.33-7.01-11.04-12.31-2.71-5.3-4.06-11.38-4.06-18.25s1.35-12.81,4.06-18.07Zm46.39,7.7c-1.62-2.95-3.8-5.22-6.55-6.79-2.75-1.58-5.7-2.36-8.85-2.36s-6.06.77-8.73,2.3c-2.67,1.54-4.83,3.78-6.49,6.73-1.66,2.95-2.49,6.45-2.49,10.49s.83,7.58,2.49,10.61c1.66,3.03,3.84,5.36,6.55,6.97,2.71,1.62,5.6,2.43,8.67,2.43s6.1-.79,8.85-2.36c2.75-1.58,4.93-3.84,6.55-6.79,1.62-2.95,2.43-6.49,2.43-10.61s-.81-7.66-2.43-10.61Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m221.09,37.91c4.93,5.05,7.4,12.11,7.4,21.16v39.42h-16.98v-37.11c0-5.34-1.33-9.44-4-12.31-2.67-2.87-6.31-4.31-10.92-4.31s-8.39,1.44-11.1,4.31c-2.71,2.87-4.06,6.97-4.06,12.31v37.11h-16.98V31.3h16.98v8.37c2.26-2.91,5.15-5.19,8.67-6.85,3.52-1.66,7.38-2.49,11.58-2.49,8,0,14.47,2.53,19.41,7.58Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m244.32,46.58c2.71-5.25,6.39-9.3,11.04-12.13,4.65-2.83,9.84-4.24,15.58-4.24,5.01,0,9.4,1.01,13.16,3.03,3.76,2.02,6.77,4.57,9.04,7.64v-9.58h17.1v67.19h-17.1v-9.82c-2.18,3.15-5.2,5.76-9.04,7.82-3.84,2.06-8.27,3.09-13.28,3.09-5.66,0-10.82-1.46-15.46-4.37-4.65-2.91-8.33-7.01-11.04-12.31-2.71-5.3-4.06-11.38-4.06-18.25s1.35-12.81,4.06-18.07Zm46.39,7.7c-1.62-2.95-3.8-5.22-6.55-6.79-2.75-1.58-5.7-2.36-8.85-2.36s-6.06.77-8.73,2.3c-2.67,1.54-4.83,3.78-6.49,6.73-1.66,2.95-2.49,6.45-2.49,10.49s.83,7.58,2.49,10.61c1.66,3.03,3.84,5.36,6.55,6.97,2.71,1.62,5.6,2.43,8.67,2.43s6.1-.79,8.85-2.36c2.75-1.58,4.93-3.84,6.55-6.79,1.62-2.95,2.43-6.49,2.43-10.61s-.81-7.66-2.43-10.61Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m430.24,37.91c5.05,5.05,7.58,12.11,7.58,21.16v39.42h-16.98v-37.11c0-5.25-1.33-9.28-4-12.07-2.67-2.79-6.31-4.18-10.92-4.18s-8.27,1.39-10.98,4.18c-2.71,2.79-4.06,6.81-4.06,12.07v37.11h-16.98v-37.11c0-5.25-1.33-9.28-4-12.07s-6.31-4.18-10.92-4.18-8.39,1.39-11.1,4.18c-2.71,2.79-4.06,6.81-4.06,12.07v37.11h-16.98V31.3h16.98v8.13c2.18-2.83,4.99-5.05,8.43-6.67,3.44-1.62,7.22-2.43,11.34-2.43,5.26,0,9.95,1.11,14.07,3.34,4.12,2.22,7.32,5.4,9.58,9.52,2.18-3.88,5.36-6.99,9.52-9.34,4.16-2.34,8.67-3.52,13.52-3.52,8.25,0,14.9,2.53,19.95,7.58Z" data-astro-cid-fyadqjo5></path><path class="cls-2" d="m479.96,33.24c3.84-2.02,8.23-3.03,13.16-3.03,5.74,0,10.93,1.42,15.58,4.24,4.65,2.83,8.33,6.85,11.04,12.07,2.71,5.22,4.06,11.26,4.06,18.13s-1.36,12.96-4.06,18.25c-2.71,5.3-6.39,9.4-11.04,12.31-4.65,2.91-9.84,4.37-15.58,4.37-5.01,0-9.4-.99-13.16-2.97-3.76-1.98-6.77-4.55-9.03-7.7v9.58h-16.98V8.74h16.98v32.38c2.18-3.23,5.19-5.86,9.03-7.88Zm24.01,20.92c-1.66-2.95-3.84-5.19-6.55-6.73-2.71-1.54-5.64-2.3-8.79-2.3s-5.96.79-8.67,2.36c-2.71,1.58-4.89,3.86-6.55,6.85-1.66,2.99-2.49,6.51-2.49,10.55s.83,7.56,2.49,10.55c1.66,2.99,3.84,5.28,6.55,6.85,2.71,1.58,5.6,2.36,8.67,2.36s6.08-.81,8.79-2.43c2.71-1.62,4.89-3.92,6.55-6.91,1.66-2.99,2.49-6.55,2.49-10.67s-.83-7.54-2.49-10.49Z" data-astro-cid-fyadqjo5></path><rect class="cls-2" x="536.9" y="31.3" width="16.98" height="67.19" data-astro-cid-fyadqjo5></rect><path class="cls-1" d="m565.98,3.66v7.92c0,1.43-.52,2.73-1.34,3.32l-14.24,10.37c-2.98,2.17-7.03,2.17-10.01,0l-14.24-10.37c-.82-.59-1.34-1.89-1.34-3.32V3.66c0-2.74,1.82-4.5,3.34-3.24l16.19,13.36c.61.5,1.49.5,2.11,0l16.19-13.36c1.52-1.26,3.34.51,3.34,3.24Z" data-astro-cid-fyadqjo5></path></g></svg> </span> `;
}, "D:/webs/Panambi_Landing/src/components/Icons/Nombre.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#equipo", label: "Team" },
    { href: "/#clientes", label: "Clientes" },
    { href: "/#contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="mt-20"> <nav class="w-full top-0 left-0 z-50 fixed bg-white"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between mx-auto py-3"> <a href="/#inicio" class="relative flex items-center gap-3"> <div class="inline-flex gap-2 justify-center items-center text-4xl font-bold text-red-700 font-Poppins"> ${renderComponent($$result2, "Nombre", $$Nombre, { "className": "h-9 lg:h-10 w-auto flex gap-2" })} </div> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full lg:block lg:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white"> ${navLinks.map((link) => renderTemplate`<li class="group"> <a${addAttribute(link.href, "href")} class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"> ${link.label} </a> <div class="hidden md:block md:opacity-0 md:w-0 md:border-t-[3px] md:border-violeta-200 md:group-hover:w-full md:group-hover:opacity-100 md:duration-200 md:ease-linear"> ${" "} </div> </li>`)} <li> <div class="lg:hidden w-[200px] block lg:w-auto rounded-r-2xl rounded-tl-2xl border border-[#b6bbbcff] bg-white overflow-hidden" id="navbar-default"> <div class="m-[3px] rounded-r-xl rounded-tl-xl bg-[#79ba80ff] hover:bg-[#598d5e] transition-all duration-300"> <a class="px-4 py-2 text-white inline-flex" aria-label="Link para mensaje directo al Wathsapp Agencia Panambi" href="https://wa.me/5491131664971?text=Hola, quiero hacerles una consulta" target="_blank"><h2 class="text-center text-base font-normal leading-7">
Hablemos
</h2> </a> </div> </div> </li> </ul> </div> <div class="hidden w-full lg:block lg:w-auto rounded-r-2xl rounded-tl-2xl border border-[#b6bbbcff] bg-white overflow-hidden" id="navbar-default"> <div class="m-[3px] rounded-r-xl rounded-tl-xl bg-[#79ba80ff] hover:bg-[#598d5e] transition-all duration-300"> <a class="px-4 py-2 text-white inline-flex" aria-label="Link para mensaje directo al Wathsapp Agencia Panambi" href="https://wa.me/5491131664971?text=Hola, quiero hacerles una consulta" target="_blank"><h2 class="text-center text-base font-normal leading-7">
Hablemos
</h2> </a> </div> </div> </div> ` })} </nav> </header> `;
}, "D:/webs/Panambi_Landing/src/components/Navbar.astro", void 0);

const $$Astro$5 = createAstro();
const $$InstagramSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$InstagramSVG;
  const { width, height, currentColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg id="instagram-icon" class="icon icon-tabler icon-tabler-brand-instagram instaHover"${addAttribute(width ? width : "24", "width")}${addAttribute(height ? height : "24", "height")} viewBox="0 0 24 24" stroke-width="1.8"${addAttribute(currentColor ? currentColor : "currentColor", "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mp2j4lgl><defs data-astro-cid-mp2j4lgl> <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="0%" data-astro-cid-mp2j4lgl> <stop offset="0%" stop-color="#E1306C" data-astro-cid-mp2j4lgl></stop> <stop offset="50%" stop-color="#FF9800" data-astro-cid-mp2j4lgl></stop> <stop offset="100%" stop-color="#FFD600" data-astro-cid-mp2j4lgl></stop> </linearGradient> </defs> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-mp2j4lgl></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" data-astro-cid-mp2j4lgl></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" data-astro-cid-mp2j4lgl></path> <path d="M16.5 7.5l0 .01" data-astro-cid-mp2j4lgl></path> </svg> `;
}, "D:/webs/Panambi_Landing/src/components/svgIcons/InstagramSVG.astro", void 0);

const $$Astro$4 = createAstro();
const $$LinkedinSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkedinSVG;
  const { width, height, currenteColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-linkedin"${addAttribute(width ? width : "24", "width")}${addAttribute(height ? height : "24", "height")} viewBox="0 0 24 24" stroke-width="1.8"${addAttribute(currenteColor ? currenteColor : "currentColor", "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "D:/webs/Panambi_Landing/src/components/svgIcons/LinkedinSVG.astro", void 0);

const $$Astro$3 = createAstro();
const $$MailSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MailSVG;
  const { width, height, currenteColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-mail"${addAttribute(width ? width : "24", "width")}${addAttribute(height ? height : "24", "height")} viewBox="0 0 24 24" stroke-width="1.8"${addAttribute(currenteColor ? currenteColor : "currentColor", "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "D:/webs/Panambi_Landing/src/components/svgIcons/MailSVG.astro", void 0);

const $$Astro$2 = createAstro();
const $$WhatsappSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhatsappSVG;
  const { width, height, currenteColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-whatsapp"${addAttribute(width ? width : "24", "width")}${addAttribute(height ? height : "24", "height")} viewBox="0 0 24 24" stroke-width="1.8"${addAttribute(currenteColor ? currenteColor : "currentColor", "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>`;
}, "D:/webs/Panambi_Landing/src/components/svgIcons/WhatsappSVG.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-violeta-100 bg-bottom"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6"> <div class="flex flex-col items-center justify-between md:flex-row"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="w-auto h-28" src="/svg/favicon.svg" alt="Logo Agencia Panambi"> </div> <div class="flex flex-row gap-4"> <a aria-label="Link al Instagram de Agencia Panambi" href="https://www.instagram.com/panambi.ag/?igsh=MWNtb3o3NXRyc2p6aw%3D%3D" target="_blank" class="transition hover:scale-150"> ${renderComponent($$result2, "InstagramSVG", $$InstagramSVG, { "width": "30", "height": "30" })} </a> <a aria-label="Link al Linkedin de Agencia Panambi" href="https://www.linkedin.com/company/panambi-ag/" target="_blank" class="transition hover:scale-150 hover:text-[#0a66c2]"> ${renderComponent($$result2, "LinkedinSVG", $$LinkedinSVG, { "width": "30", "height": "30" })} </a> <button aria-label="Link para copiar el mail de Agencia Panambi" id="mail" class="transition hover:scale-150 hover:text-red-400"> ${renderComponent($$result2, "MailSVG", $$MailSVG, { "width": "30", "height": "30" })} </button> <a aria-label="Link para mensaje directo al Wathsapp Agencia Panambi" href="https://wa.me/5491131664971?text=Hola, quiero hacerles una consulta" target="_blank" class="transition hover:scale-150 hover:text-[#2bd46a]"> ${renderComponent($$result2, "WhatsappSVG", $$WhatsappSVG, { "width": "30", "height": "30" })} </a> </div> </div> </div> <p class="text-center text-xs font-semibold text-gray-500">
Desarrollado por <a aria-label="Link al Github de JM-Dev" href="https://github.com/JM-Dev-ARG" target="_blank">JM-DEV</a> / Agencia Panambi
</p> ` })} </footer> `;
}, "D:/webs/Panambi_Landing/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/webs/Panambi_Landing/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" id="inicio"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="./svg/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Panambi - Mkt Digital y Desarrollo Web</title><meta name="description" content="A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss"><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white font-Poppins"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "D:/webs/Panambi_Landing/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
