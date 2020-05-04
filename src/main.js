import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CoreuiVue, { CEmitRootEvent, CTooltip } from '@coreui/vue'

Vue.directive('c-emit-root-event', CEmitRootEvent, CTooltip)

Vue.config.productionTip = false
Vue.use(CoreuiVue)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
