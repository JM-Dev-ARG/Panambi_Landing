/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from './astro/server_6rCQxYeE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from './Layout_DRuBCfiH.mjs';
import { a as articlesData } from './articles_BUtDX-tO.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return articlesData.map(
    ({ id, title, publish_date, description, author, authorImage }) => {
      return {
        params: { id },
        props: { id, title, publish_date, description, author, authorImage }
      };
    }
  );
}
const prerender = true;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { title, publish_date, description, author, authorImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-24"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <section class="bg-white"> <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> <div class="font-light text-gray-500 sm:text-lg"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"> ${title} </h2> <p class="mb-4">${description}</p> <div class="flex justify-between items-center mt-6"> <div class="flex items-center space-x-4"> <img class="w-7 h-7 rounded-full"${addAttribute(authorImage, "src")}${addAttribute(author + " cover", "alt")}> <span class="font-medium"> ${author} </span> </div> <span class="text-sm">${publish_date}</span> </div> </div> <div class="grid grid-cols-2 gap-4 mt-8"> <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"> <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"> </div> </div> </section> ` })} </main> ` })}`;
}, "D:/webs/Panambi_Landing/src/pages/blogs/[id].astro", void 0);

const $$file = "D:/webs/Panambi_Landing/src/pages/blogs/[id].astro";
const $$url = "/blogs/[id]";

export { $$id as default, $$file as file, getStaticPaths, prerender, $$url as url };
