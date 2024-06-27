import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({
    compat: true
  })],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});