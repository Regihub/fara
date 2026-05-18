/* empty css                                 */
import { n as createComponent, r as renderComponent, v as renderTemplate, q as maybeRenderHead, z as unescapeHTML } from '../chunks/astro/server_D280s9H5.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_BW90xymb.mjs';
import { g as getLatestWeek } from '../chunks/getLatestWeek_Bnb1Xg4Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Oznamy = createComponent(async ($$result, $$props, $$slots) => {
  const week = await getLatestWeek();
  const {
    title,
    weekStart,
    weekEnd,
    general,
    masses = []
  } = week;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-5xl px-4 py-8"> <h1 class="mb-2 text-3xl font-bold text-slate-900">${title}</h1> <p class="mb-6 text-sm text-slate-600"> <strong>Platnosť:</strong> ${weekStart} – ${weekEnd} </p> <section class="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"> <h2 class="mb-4 text-2xl font-semibold text-slate-900">Všeobecné oznamy</h2> <div class="prose prose-slate max-w-none">${unescapeHTML(general.replace(/\n/g, "<br>"))}</div> </section> <section class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"> <div class="border-b border-slate-200 px-6 py-4"> <h2 class="text-2xl font-semibold text-slate-900">Sväté omše</h2> </div> <div class="overflow-x-auto"> <table class="min-w-full text-sm"> <thead class="bg-slate-50 text-left text-slate-600"> <tr> <th class="px-4 py-3">Deň</th> <th class="px-4 py-3">Dátum</th> <th class="px-4 py-3">Čas</th> <th class="px-4 py-3">Úmysel</th> <th class="px-4 py-3">Miesto</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> ${masses.map((mass) => renderTemplate`<tr class="hover:bg-slate-50"> <td class="px-4 py-3 font-medium">${mass.day}</td> <td class="px-4 py-3">${mass.date}</td> <td class="px-4 py-3">${mass.time}</td> <td class="px-4 py-3">${mass.intention || "\u2014"}</td> <td class="px-4 py-3">${mass.place || "Farsk\xFD kostol"}</td> </tr>`)} </tbody> </table> </div> </section> </section> ` })}`;
}, "/workspaces/fara/src/pages/oznamy.astro", void 0);

const $$file = "/workspaces/fara/src/pages/oznamy.astro";
const $$url = "/oznamy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Oznamy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
