import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import Vmovable from 'vue-movable'

Vue.config.debug = true

Vue.use(Vmovable)

const ddd = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.ddd = ddd
