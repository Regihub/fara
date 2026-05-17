import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import decapCmsOauth from 'astro-decap-cms-oauth';

export default defineConfig({
  integrations: [
    tailwind(),
    decapCmsOauth()
  ]
});