/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent, a as addAttribute } from './astro/server_6rCQxYeE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from './Layout_DRuBCfiH.mjs';
import 'clsx';
import { a as $$Topic, $ as $$Team } from './Team_D6Yc1SCZ.mjs';

const $$Astro$1 = createAstro();
const $$BtnContacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BtnContacto;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="px-9 py-5 bg-violeta-100 hover:bg-violeta-200 text-white hover:text-black rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex transition-all duration-300" rel="noopener noreferrer" href="#contacto"> <h2 class="text-center text-xl font-normal leading-7">${texto}</h2> </a>`;
}, "D:/webs/Panambi_Landing/src/components/shared/BtnContacto.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl">
Navegando la <br> escalada digital <br> hacia el exito
<!-- Navigating the <br /> digital landscape <br /> for success --> </h1> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
Nuestra agencia de marketing digital ayuda a las empresas a crecer y
          alcanzar el éxito ONLINE a través de una gama de servicios <!-- Our digital
          marketing agency helps businesses grow and succeed online through a
          range of services including SEO, PPC, social media marketing, and
          content creation. --> </p> ${renderComponent($$result2, "BtnContacto", $$BtnContacto, { "texto": "Agenda una reuni\xF3n" })} </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Hero"> </div> </div> ` })}`;
}, "D:/webs/Panambi_Landing/src/components/Hero.astro", void 0);

const servicesData = [
	{
		id: 1,
		name1: "Social Media",
		name2: "Marketing",
		textColor: "text-black",
		background: "#F3F3F3",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/03.svg"
	},
	{
		id: 2,
		name1: "Desarrollo",
		name2: "Web",
		textColor: "text-black",
		background: "#d2df8a",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/01.svg"
	},
	{
		id: 3,
		name1: "Email",
		name2: "Marketing",
		textColor: "text-white",
		background: "black ",
		arrow: "./services/aw.svg",
		link: "./",
		image: "./services/04.svg"
	},
	{
		id: 4,
		name1: "Content",
		name2: "Creation",
		textColor: "text-black",
		background: "#aa8abf",
		arrow: "./services/ag.svg",
		link: "./",
		image: "./services/05.svg"
	}
];

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    background,
    name1,
    name2,
    /*  arrow, link, */
    image,
    textColor
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`background-color: ${background};`, "style")}${addAttribute(`h-[310px] p-6 md:p-12 rounded-[45px] shadow-card border border-black justify-between items-center flex ${textColor}`, "class")}> <div class="flex-col justify-center items-start gap-[93px] inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name1}</div> </div> <div class="px-[7px] rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-3xl font-medium">${name2}</div> </div> </div>  </div> <div class="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex"> <img${addAttribute(image, "src")}> </div> </div>`;
}, "D:/webs/Panambi_Landing/src/components/shared/ServiceCard.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span id="servicios"></span> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative flex flex-col items-center"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Servicios", "description": " Nuestras soluciones de marketing digital a la medida, ayudan a tus negocios a crecer y a superar todos los objetivos" })} <div class="flex-row items-center py-5 lg:mb-14"> <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"> <!-- card start--> ${servicesData.map(
    ({
      background,
      name1,
      name2,
      /*  arrow, link, */
      image,
      textColor
    }) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "textColor": textColor, "background": background, "name1": name1, "name2": name2, "image": image })}`
  )} <!-- card end--> </div> </div> <div class="flex-row items-center my-6 p-14 bg-zinc-200 rounded-[45px]"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="justify-start items-center gap-[275px] flex"> <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black"> <div class="text-3xl font-medium">
Hagamos que las cosas ocurran
</div> <div class="text-lg font-normal">
Contactanos hoy para conocer mas sobre como nuestros servicios de
              marketing digital puede ayudar a tu negocio a crecer y tener
              extito en linea.
</div> ${renderComponent($$result2, "BtnContacto", $$BtnContacto, { "texto": "Obtene tu cotizaci\xF3n gratis" })} </div> </div> <div class="hidden md:grid justify-items-center -m-20"> <img src="/services/Illustration.svg" width="50%" alt="cat"> </div> </div> </div> </div>` })}`;
}, "D:/webs/Panambi_Landing/src/components/Services.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span id="contacto"></span> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Contacto", "description": "Contactate con Nosotros: Hablemos de Tus Necesidades Digitales" })} </div> ${renderComponent($$result2, "FormContacto", null, { "client:only": "preact", "client:component-hydration": "only", "client:component-path": "D:/webs/Panambi_Landing/src/components/preact/FormContacto", "client:component-export": "default" })} ` })}`;
}, "D:/webs/Panambi_Landing/src/components/Contact.astro", void 0);

const dataClientes = [
	{
		id: 1,
		name: "cliente 01 logo",
		image: "./clients/01.svg"
	},
	{
		id: 2,
		name: "cliente 02 logo",
		image: "./clients/02.svg"
	},
	{
		id: 3,
		name: "cliente 03 logo",
		image: "./clients/03.svg"
	},
	{
		id: 4,
		name: "cliente 04 logo",
		image: "./clients/04.svg"
	},
	{
		id: 5,
		name: "cliente 05 logo",
		image: "./clients/05.svg"
	},
	{
		id: 6,
		name: "cliente 06 logo",
		image: "./clients/06.svg"
	},
	{
		id: 7,
		name: "cliente 07 logo",
		image: "./clients/01.svg"
	},
	{
		id: 8,
		name: "cliente 08 logo",
		image: "./clients/02.svg"
	}
];

const $$Clientes = createComponent(($$result, $$props, $$slots) => {
  console.log(dataClientes.length);
  return renderTemplate`${maybeRenderHead()}<span id="clientes"></span> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex-row items-center"> <div${addAttribute(`grid grid-cols-2 lg:grid-cols-${dataClientes.length / 2} lg:grid-cols-${dataClientes.length} place-items-center`, "class")}> ${dataClientes.map((client) => renderTemplate`<div class="p-2 grayscale transition duration-200 hover:grayscale-0"> <img${addAttribute(client.image, "src")} class="h-12 w-auto  " loading="lazy"${addAttribute(client.name, "alt")} width="" height=""> </div>`)} </div> </div> ` })}`;
}, "D:/webs/Panambi_Landing/src/components/Clientes.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Clientes", $$Clientes, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "D:/webs/Panambi_Landing/src/pages/index.astro", void 0);

const $$file = "D:/webs/Panambi_Landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
