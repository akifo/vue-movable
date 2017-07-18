(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueMobable = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}

__$styleInject("body{min-height:100vh}.v-movable{cursor:move}.v-movable-box{z-index:1;display:inline-block}.v-movable-box.simple{width:100px;background-color:red}.v-movable-box .v-movable-controller{cursor:move}.v-movable-dragging{z-index:2}.v-movable-simple{border-radius:2px;background-color:#fff;overflow:hidden;-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.3);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.3)}.v-movable-simple .v-movable-controller{width:100%;height:20px;border-bottom:1px solid #f1f1f1;background-color:#f9f9f9}.v-movable-simple .v-movable-content{padding:22.4px 44.8px;padding:1.4rem 2.8rem}",undefined);

var getTransform = function (translate3dChar) {
  const results = translate3dChar.match(/translate3d\((.+)px,(.+)px,(.+)px\)/);
  if (!results) return [0, 0, 0]
  return [parseInt(results[1]), parseInt(results[2]), parseInt(results[3])]
};

var closest = function (el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el
    } else {
      el = el.parentElement;
    }
  }
  return null
};

const V_MOVABLE_CLASS = 'v-movable';
const V_MOVABLE_BOX_CLASS = 'v-movable-box';
const V_MOVABLE_CONTROLLER_CLASS = 'v-movable-controller';
const V_MOVABLE_DRAGGING_CLASS = 'v-movable-dragging';

let x;
let y;
let translate3dXYZ;
let targetElement;

var MovableController = {
  bind (el, binding, vnode) {
    el.addEventListener('mousedown', mouseDown, false);
    el.addEventListener('touchstart', mouseDown, false);
    if (binding.name === 'movable') el.classList.add(V_MOVABLE_CLASS);
    else if (binding.name === 'movable-controller') el.classList.add(V_MOVABLE_CONTROLLER_CLASS);
  }
};

const mouseDown = (e, name) => {
  if (!e.target) return

  let event = e;
  if (e.type === 'mousedown') {
    event = e;
  } else {
    event = e.changedTouches[0];
  }

  if (event.target.classList.contains(V_MOVABLE_CLASS)) {
    targetElement = event.target;
  } else {
    targetElement = closest(event.target, `.${V_MOVABLE_BOX_CLASS}`);
  }

  targetElement.classList.add(V_MOVABLE_DRAGGING_CLASS);

  x = event.pageX;
  y = event.pageY;

  translate3dXYZ = getTransform(targetElement.style.transform);

  document.addEventListener('mouseleave', mouseUp, false);
  document.body.addEventListener('mousemove', mouseMove, false);
  document.body.addEventListener('touchmove', mouseMove, false);
  document.body.addEventListener('mouseup', mouseUp, false);
  document.body.addEventListener('touchend', mouseUp, false);
};

const mouseMove = (e) => {
  const mx = e.pageX - x + translate3dXYZ[0];
  const my = e.pageY - y + translate3dXYZ[1];
  targetElement.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
};

const mouseUp = (e) => {
  document.removeEventListener('mouseleave', mouseUp, false);
  document.body.removeEventListener('mousemove', mouseMove, false);
  document.body.removeEventListener('touchmove', mouseMove, false);
  document.body.removeEventListener('mouseup', mouseUp, false);
  document.body.removeEventListener('touchend', mouseUp, false);
  if (targetElement && targetElement.classList) targetElement.classList.remove(V_MOVABLE_DRAGGING_CLASS);
};

var MovableBox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-movable-box"},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'MovableBox'
};

const install = function (Vue) {
  Vue.directive('Movable', MovableController);
  Vue.directive('MovableController', MovableController);
  Vue.component('MovableBox', MovableBox);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Movable = MovableController;
  window.MovableController = MovableController;
  window.MovableBox = MovableBox;
  Vue.use(install);
}

var index = {
  install,
  MovableBox,
  MovableController
};

return index;

})));
