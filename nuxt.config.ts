export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/asset/scss/global.scss"],
  vite: {
    server: {
      allowedHosts: ["c1b9-175-193-34-14.ngrok-free.app"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/asset/scss/foundation" as *;',
        },
      },
    },
  },

  modules: ["@nuxt/image"],
});
