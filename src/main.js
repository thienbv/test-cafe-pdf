import Vue from 'vue'
import App from './App.vue'

import cafePdf from 'cafe-pdf'
Vue.use(cafePdf)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
