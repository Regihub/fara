/* empty css                                 */
import { n as createComponent, r as renderComponent, v as renderTemplate, q as maybeRenderHead } from '../chunks/astro/server_D280s9H5.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_BW90xymb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Farnos\u0165" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-12"> <h1 class="mb-4 text-4xl font-bold text-slate-900">
Rímskokatolícka farnosť
</h1> <p class="mb-8 text-lg text-slate-600">
Vitajte na oficiálnej stránke našej farnosti.
</p> <div class="flex flex-wrap gap-4"> <a href="/oznamy" class="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
Farské oznamy
</a> <a href="/omse" class="rounded-xl bg-slate-100 px-6 py-3 font-medium text-slate-900 hover:bg-slate-200">
Sväté omše
</a> </div> </section> ` })}`;
}, "/workspaces/fara/src/pages/index.astro", void 0);

const $$file = "/workspaces/fara/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
