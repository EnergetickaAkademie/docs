import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'
import './style.css'
import './styles/print.css'
import Inline from './components/Inline.vue'
import ImageGallery from './components/ImageGallery.vue'
import Clickable from './components/Clickable.vue'
import ClickableBlank from './components/ClickableBlank.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Inline', Inline)
    app.component('ImageGallery', ImageGallery)
    app.component('Clickable', Clickable)
    app.component('ClickableBlank', ClickableBlank)
  }
}