import DefaultTheme from 'vitepress/theme'
import './style.css'
import VPApp from './VPApp.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(VPApp, null, DefaultTheme.Layout.slots)
  },
  enhanceApp({ app }) {
    app.component('VPApp', VPApp)
  }
}