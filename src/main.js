import Vue from 'vue'
import App from '@/App.vue'
import evenBus from '@/plugins/event-bus'

Vue.use(evenBus);

new Vue({
  el: '#app',
  render: h => h(App)
})
