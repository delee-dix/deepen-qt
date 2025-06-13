import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  css: ["~/asset/scss/global.scss", "~/asset/css/tailwind.css"],
  components: [{ path: "~/component" }],
  dir: {
    pages: "page",
  },
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
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image", "shadcn-nuxt", "@pinia/nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "~/lib/ui",
  },
});
