import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App.vue';
import evenBus from '@/plugins/event-bus';
import routes from '@/routes.js';
import msToMm from '@/filters/ms-to-mm.js';
import blur from '@/directives/blur.js';

Vue.use(VueRouter);
Vue.use(evenBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
