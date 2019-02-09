import Vue from 'vue'
import VueSocketIO from 'vue-socket.io';
import VueRouter from 'vue-router';
import router from './router'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  connection: 'http://192.168.1.69:3000',
}));
Vue.use(VueRouter);

new Vue({
  router
}).$mount('#app')
