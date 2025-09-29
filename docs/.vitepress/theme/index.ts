import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'
import './style.css'
import Inline from './components/Inline.vue'
import ImageGallery from './components/ImageGallery.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Inline', Inline)
    app.component('ImageGallery', ImageGallery)
  }
}