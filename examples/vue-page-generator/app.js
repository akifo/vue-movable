import 'babel-polyfill'
import Vue from 'vue'
import Vmovable from 'vue-movable'
import App from './components/App.vue'
import store from './store'
import designList from './assets/design-list'

Vue.config.debug = true

Vue.use(Vmovable)

designList.forEach(item => {
  Vue.component(item, () => import(`./async-components/${item}/template.vue`).then(m => m.default))
})

const ddd = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.ddd = ddd
