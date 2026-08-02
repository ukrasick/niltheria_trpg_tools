// Types
import type { App } from 'vue'

import { createPinia } from 'pinia'
import router from '../router'
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
// Plugins
import vuetify from './vuetify'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(createPinia())
  app.use(router)
}
