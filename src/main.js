import Vue from 'vue'

import App from './App.vue'
import router from './router'
import globalMixin from './mixins/globalMixin'

import './styles.scss'

Vue.config.productionTip = false

Vue.mixin(globalMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')