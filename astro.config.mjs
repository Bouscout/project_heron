import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://digitalpoetry.space',
  
  integrations: [mdx(), sitemap(), react()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: { prefixDefaultLocale: false},
  },
});