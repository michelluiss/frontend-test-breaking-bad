import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
// import VueRouter from 'vue-router';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
// Vue.http.options.root = "https://www.breakingbadapi.com/api/";


// Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
