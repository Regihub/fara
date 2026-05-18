import { n as createComponent, q as maybeRenderHead, l as addAttribute, v as renderTemplate, m as createAstro, s as renderHead, u as renderSlot, r as renderComponent } from './astro/server_D280s9H5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BottomNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BottomNav;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed bottom-0 left-0 right-0 flex justify-center"> <div class="w-full max-w-md bg-green-50 border-t-2 border-green-700 shadow-lg flex justify-around py-2 text-sm rounded-t-2xl"> <a href="/"${addAttribute(`flex flex-col items-center py-2 px-3 rounded-xl transition ${path === "/" ? "text-green-700 font-bold bg-green-100" : "text-gray-700 hover:text-green-700 hover:bg-green-100"}`, "class")}>
Domov
</a> <a href="/omse"${addAttribute(`flex flex-col items-center py-2 px-3 rounded-xl transition ${path === "/omse" ? "text-green-700 font-bold bg-green-100" : "text-gray-700 hover:text-green-700 hover:bg-green-100"}`, "class")}>
Omše
</a> <a href="/oznamy"${addAttribute(`flex flex-col items-center py-2 px-3 rounded-xl transition ${path === "/oznamy" ? "text-green-700 font-bold bg-green-100" : "text-gray-700 hover:text-green-700 hover:bg-green-100"}`, "class")}>
Oznamy
</a> <a href="/kontakt"${addAttribute(`flex flex-col items-center py-2 px-3 rounded-xl transition ${path === "/kontakt" ? "text-green-700 font-bold bg-green-100" : "text-gray-700 hover:text-green-700 hover:bg-green-100"}`, "class")}>
Kontakt
</a> </div> </nav>`;
}, "/workspaces/fara/src/components/BottomNav.astro", void 0);

const $$Base = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="sk"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Farnosť Stará Sásová</title>${renderHead()}</head> <body class="bg-gray-100 text-gray-900 m-0"> <div class="flex justify-center min-h-screen"> <div class="w-full max-w-md bg-white"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${renderComponent($$result, "BottomNav", $$BottomNav, {})} </body></html>`;
}, "/workspaces/fara/src/layouts/Base.astro", void 0);

export { $$Base as $ };
