import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaNavigation from './components/Header/Navigation'
import MetaFooter from './components/Footer/Footer'

Vue.config.productionTip = false

Vue.component('meta-navigation', MetaNavigation);
Vue.component('meta-footer', MetaFooter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
