import Movable from './directive'

const install = function (Vue) {
  Vue.directive('Movable', Movable)
}

if (window.Vue) {
  window.Movable = Movable
  Vue.use(install)
}

Movable.install = install
export default Movable
