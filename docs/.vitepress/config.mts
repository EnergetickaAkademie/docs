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
      { text: 'Energetická akademie', link: 'https://enak.cz' }
    ],

    sidebar: [
      {
        text: 'Workshop 6./7. třída',
        link: '/enak/'
      },
      {
        text: '3D modely',
        items:
        [
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
      }
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
