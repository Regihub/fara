/* empty css                                 */
import { n as createComponent, q as maybeRenderHead, x as spreadAttributes, l as addAttribute, u as renderSlot, v as renderTemplate, m as createAstro, r as renderComponent } from '../chunks/astro/server_D280s9H5.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_BW90xymb.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const postalCode = "974 11";
const city = "Banská Bystrica";
const address = "Na Tále 3089/10";
const email = "bb.starasasova@gmail.com";
const phone = "0905 100 267";
const church = {
  postalCode,
  city,
  address,
  email,
  phone,
};

const $$Astro$2 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/workspaces/fara/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "/workspaces/fara/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro = createAstro();
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path> ` })}`;
}, "/workspaces/fara/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  const locations = {
    fara: {
      name: "Farsk\xFD \xFArad Star\xE1 S\xE1sov\xE1",
      address: `${church.address}, ${church["postalCode"]} ${church.city}`,
      google: "https://www.google.sk/maps?f=q&source=s_q&hl=sk&geocode&q=Na+T%C3%A1le+3089/10,+97411+Bansk%C3%A1+Bystrica-S%C3%A1sov%C3%A1&sll=48.669026,19.699024&sspn=3.119948,10.733643&ie=UTF8&hq&hnear=Na+T%C3%A1le+3089/10,+97411+Bansk%C3%A1+Bystrica-S%C3%A1sov%C3%A1&z=15",
      mapycz: "https://mapy.com/sk/zakladni?planovani-trasy&rc=9s-FZxRTZo&rs=&rs=osm&ri=&ri=1004937800&mrp=%7B%22c%22%3A112%2C%22dt%22%3A%22%22%2C%22d%22%3Atrue%7D&xc=%5B%5D&rut=1&x=19.1552756&y=48.7558878&z=19"
    },
    kostol: {
      name: "Kostol sv. Antona a Pavla pustovn\xEDkov",
      address: "S\xE1sovsk\xE1 cesta 60, Bansk\xE1 Bystrica",
      google: "https://www.google.sk/maps/place/Kostol+sv.+Antona+a+Pavla,+pustovn%C3%ADkov/@48.7576848,19.1570198,115m/data=!3m1!1e3!4m15!1m8!3m7!1s0x4715166d4d0fe7d7:0x760b9e14b57de288!2sS%C3%A1sovsk%C3%A1+cesta+2964%2F60,+974+11+Bansk%C3%A1+Bystrica!3b1!8m2!3d48.7576933!4d19.1575304!16s%2Fg%2F11c1bpj81b!3m5!1s0x4715176cce572ba3:0x54deead0842083cf!8m2!3d48.757711!4d19.1573711!16s%2Fg%2F11fm79p24d?hl=sk&entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D",
      mapycz: "https://mapy.com/sk/zakladni?planovani-trasy&rc=9s-aHxR8GQ&rs=&rs=osm&ri=&ri=1067211612&mrp=%7B%22c%22%3A112%2C%22dt%22%3A%22%22%2C%22d%22%3Atrue%7D&xc=%5B%5D&rut=1&x=19.1570673&y=48.7574669&z=19"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-5"> <h1 class="text-xl font-bold mb-5">Kontakt</h1> <div class="space-y-5"> <!-- FARA --> <div class="p-4 rounded-2xl border bg-white shadow-sm"> <h2 class="font-bold text-green-700"> ${locations.fara.name} </h2> <p class="text-sm text-gray-600 mt-1"> ${locations.fara.address} </p> <div class="text-sm text-gray-700 mt-3 space-y-2"> <!-- TELEFÓN --> <a${addAttribute(`tel:${church.phone}`, "href")} class="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"> ${renderComponent($$result2, "Phone", $$Phone, { "class": "w-5 h-5" })} <span>${church.phone}</span> </a> <!-- EMAIL --> <a${addAttribute(`mailto:${church.email}`, "href")} class="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition break-all"> ${renderComponent($$result2, "Mail", $$Mail, { "class": "w-5 h-5" })} <span>${church.email}</span> </a> </div> <div class="grid grid-cols-2 gap-2 mt-4"> <a${addAttribute(locations.fara.google, "href")} target="_blank" class="bg-green-700 text-white text-center py-2 rounded-xl text-sm font-medium hover:bg-green-800 transition">
Google Maps
</a> <a${addAttribute(locations.fara.mapycz, "href")} target="_blank" class="bg-orange-500 text-white text-center py-2 rounded-xl text-sm font-medium hover:bg-orange-600 transition">
Mapy.cz
</a> </div> </div> <!-- KOSTOL --> <div class="p-4 rounded-2xl border bg-white shadow-sm"> <h2 class="font-bold text-green-700"> ${locations.kostol.name} </h2> <p class="text-sm text-gray-600 mt-1"> ${locations.kostol.address} </p> <div class="grid grid-cols-2 gap-2 mt-4"> <a${addAttribute(locations.kostol.google, "href")} target="_blank" class="bg-green-700 text-white text-center py-2 rounded-xl text-sm font-medium hover:bg-green-800 transition">
Google Maps
</a> <a${addAttribute(locations.kostol.mapycz, "href")} target="_blank" class="bg-orange-500 text-white text-center py-2 rounded-xl text-sm font-medium hover:bg-orange-600 transition">
Mapy.cz
</a> </div> </div> </div> </section> ` })}`;
}, "/workspaces/fara/src/pages/kontakt.astro", void 0);

const $$file = "/workspaces/fara/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
