import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

//导入样式
import './assets/css/base.css'
import './assets/css/index.css'


Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
