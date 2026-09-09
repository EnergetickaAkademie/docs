import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import markdownItFootnote from 'markdown-it-footnote'
import UnoCSS from 'unocss/vite'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      UnoCSS()
    ],
  },
  title: "Energetická akademie",
  description: "projektová dokumentace pro enak.cz",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Domů', link: '/' },
      { text: 'ENAK v2', link: 'https://v2.enak.cz' },
      { text: 'ENAK v1', link: 'https://enak.cz' },
      { text: 'Energetická gramotnost', link: 'https://egram.cz' },
      { text: 'Tech Republic', link: 'https://www.techrepublic.cz' },
    ],

    sidebar: [
      {
        text: 'Workshop 6./7. třída',
        items:
        [
          { text: 'Nová v2', link: '/enak/' },
          { text: 'Stará v1', link: '/enak/v1/' },
        ]
      },
      {
        text: '3D modely',
        items:
        [
          { text: 'Jak vytisknout workshop', link: '/3d/tisk' },
          { text: 'Modely budov', link: '/3d/budovy' },
          { text: 'Modely elektráren', link: '/3d/elektrarny' },
          { text: 'Modely krajiny', link: '/3d/krajina' },
        ]
      },
      {
        text: 'Scénáře',
        link: '/scenarios/'
      },
      {
        text: 'Softwarová implementace',
        link: '/github/'
      },
      /*{
        text: 'List součástek',
        link: '/parts/'
      },
      {
        text: 'Schémata',
        link: '/schematics/'
      },*/
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EnergetickaAkademie' }
    ],

    editLink: {
        pattern: 'https://github.com/EnergetickaAkademie/docs/edit/main/docs/:path'
    },

    search: {
        provider: 'local'
    },
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    config: (md) => {
      md.use(markdownItMathjax3)
      md.use(markdownItFootnote)
    }
  },
})
