import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaNavigation from './components/Header/Navigation'
import MetaFooter from './components/Footer/Footer'
import MetaArrow from './components/ArrowBack.vue'

Vue.config.productionTip = false

Vue.component('meta-navigation', MetaNavigation);
Vue.component('meta-footer', MetaFooter);
Vue.component('meta-arrow', MetaArrow);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
