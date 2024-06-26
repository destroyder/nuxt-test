// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/nuxt-test/",
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/storybook"],
  storybook: {
    url: "http://localhost:6006",
    storybookRoute: "/__storybook__",
    port: 6006,
  },
  vite: {
    server: {
      hmr: {
        host: "localhost",
      },
    },
  },
});
