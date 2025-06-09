import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/asset/scss/global.scss", "~/asset/tailwind.css"],
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

  modules: ["@nuxt/image", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./component/ui"
     */
    componentDir: "./component/ui",
  },
});
