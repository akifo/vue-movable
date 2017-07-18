import './style.sss'
import MovableController from './directive'
import MovableBox from './MovableBox.vue'

const install = function (Vue) {
  Vue.directive('Movable', MovableController)
  Vue.directive('MovableController', MovableController)
  Vue.component('MovableBox', MovableBox)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Movable = MovableController
  window.MovableController = MovableController
  window.MovableBox = MovableBox
  Vue.use(install)
}

export default{
  install,
  MovableBox,
  MovableController
}
