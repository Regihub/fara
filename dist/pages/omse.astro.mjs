/* empty css                                 */
import { n as createComponent, r as renderComponent, v as renderTemplate, q as maybeRenderHead } from '../chunks/astro/server_D280s9H5.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_BW90xymb.mjs';
import { g as getLatestWeek } from '../chunks/getLatestWeek_Bnb1Xg4Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Omse = createComponent(async ($$result, $$props, $$slots) => {
  const week = await getLatestWeek();
  const masses = week.masses || [];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Sv\xE4t\xE9 om\u0161e" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-8"> <h1 class="mb-6 text-3xl font-bold">Sväté omše</h1> <div class="space-y-4"> ${masses.map((mass) => renderTemplate`<div class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"> <div class="flex items-start justify-between gap-4"> <div> <h2 class="text-lg font-semibold">${mass.day}</h2> <p class="text-sm text-slate-500">${mass.date}</p> </div> <div class="text-xl font-bold text-blue-600">${mass.time}</div> </div> ${mass.intention && renderTemplate`<p class="mt-3 text-slate-700">${mass.intention}</p>`} </div>`)} </div> </section> ` })}`;
}, "/workspaces/fara/src/pages/omse.astro", void 0);

const $$file = "/workspaces/fara/src/pages/omse.astro";
const $$url = "/omse";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Omse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
