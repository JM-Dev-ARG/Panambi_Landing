import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, d as renderComponent } from './astro/server_6rCQxYeE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container } from './Layout_DRuBCfiH.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 xl:flex xl:justify-center xl:items-center mx-auto"> <span class="text-4xl sm:text-6xl p-4 font-medium bg-verde-200 rounded-md text-white text-nowrap"> ${title} </span> <p class="text-xl font-normal text-center xl:text-start"> ${description} </p> </div>`;
}, "D:/webs/Panambi_Landing/src/components/Topic.astro", void 0);

const team = [
	{
		title: "CEO and Founder",
		name: "John Smith",
		description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		profile: "/team/c1.png",
		link: "/"
	},
	{
		title: "Director of Operations",
		name: "Jane Doe",
		description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		profile: "/team/c2.png",
		link: "/"
	},
	{
		title: "Senior SEO Specialist",
		name: "Michael Brown",
		description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		profile: "/team/c3.png",
		link: "/"
	},
	{
		title: "Senior SEO Specialist",
		name: "Michael Brown",
		description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		profile: "/team/c3.png",
		link: "/"
	}
];
const process = [
	{
		label: "Consultation",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		label: "Research",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		label: "Implementation",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		label: "Optimization",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		label: "Reporting",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	},
	{
		label: "Improvement",
		content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
	}
];
const teamData = {
	team: team,
	process: process
};

const $$Astro = createAstro();
const $$CardTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTeam;
  const {
    title,
    description,
    name,
    /* link, */
    profile
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-[360px] max-w-[320px] p-6 bg-white rounded-[45px] shadow-card border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"> <div class="flex-col justify-start items-start gap-7 flex"> <div class="justify-start items-start"> <div class="justify-between items-center flex w-full gap-4"> <div class="w-1/2 left-0 top-0 relative"> <img${addAttribute(profile, "src")}${addAttribute(name, "alt")}> </div> <div class="flex-col justify-end items-start inline-flex"> <div class="text-lg font-normal">${title}</div> <div class="text-xl font-medium">${name}</div> </div> </div> <!-- <a
        class="top-0 right-0"
        href={link}
      >
        <img
          src="/team/lng.svg"
          alt="vector"
        />
      </a> --> </div> <hr class="w-full border border-black"> <p class="text-sm md:text-lg">${description}</p> </div> </div>`;
}, "D:/webs/Panambi_Landing/src/components/shared/CardTeam.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span id="equipo"></span> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative flex flex-col items-center md:flex-row pt-6"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "El Team", "description": "Conoce al talentoso y experimentado equipo detras de nuestras exitosas estrategias de marketing digital " })} </div> <div class="flex-row items-center py-5" id="team"> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4"> ${teamData.team.map(
    ({
      title,
      description,
      name,
      /* link,  */
      profile
    }) => renderTemplate`${renderComponent($$result2, "CardTeam", $$CardTeam, { "title": title, "description": description, "name": name, "profile": profile })}`
  )} </div> </div>  ` })}`;
}, "D:/webs/Panambi_Landing/src/components/Team.astro", void 0);

export { $$Team as $, $$Topic as a };
