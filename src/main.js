// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  '@/assets/css/reset.css'
import 'vant/lib/button/style';
import Button from 'vant/lib/button';
import { Divider, Switch, Dialog, Popup } from 'vant';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Divider)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Popup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
