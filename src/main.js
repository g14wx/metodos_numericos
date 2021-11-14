import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
