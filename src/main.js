import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = "https://www.breakingbadapi.com/api/";

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
