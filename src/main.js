import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VAnimateCss from 'v-animate-css';
import router from './router'
import Notifications from 'vue-notification'
Vue.use(Notifications);
Vue.use(VAnimateCss);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
