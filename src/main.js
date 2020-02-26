import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import NavBar from '@/components/nav_bar.vue'

Vue.config.productionTip = false

Vue.component('app-nav',NavBar);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
