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

__$styleInject("body {\n  min-height: 100vh;\n}\n\n.v-movable-drag {\n  cursor: move;\n  z-index: 1000;\n}\n\n", undefined);

var getTransform = function (translate3dChar) {
  var results = translate3dChar.match(/translate3d\((.+)px,(.+)px,(.+)px\)/);
  if (!results) return [0, 0, 0];
  return [parseInt(results[1]), parseInt(results[2]), parseInt(results[3])];
};

var x = void 0;
var y = void 0;
var translate3dXYZ = void 0;
var targetElement = void 0;

var Movable$1 = {
  bind: function bind(el, binding, vnode) {
    el.addEventListener('mousedown', mouseDown, false);
    el.addEventListener('touchstart', mouseDown, false);
  }
};

var mouseDown = function mouseDown(e) {
  if (!e.target) return;

  var event = e;
  if (e.type === 'mousedown') {
    event = e;
  } else {
    event = e.changedTouches[0];
  }

  targetElement = event.target;

  event.target.classList.add('v-movable-drag');

  x = event.pageX;
  y = event.pageY;

  translate3dXYZ = getTransform(e.target.style.transform);

  document.addEventListener('mouseleave', mouseUp, false);
  document.body.addEventListener('mousemove', mouseMove, false);
  document.body.addEventListener('touchmove', mouseMove, false);
  document.body.addEventListener('mouseup', mouseUp, false);
  document.body.addEventListener('touchend', mouseUp, false);
};

var mouseMove = function mouseMove(e) {
  var mx = e.pageX - x + translate3dXYZ[0];
  var my = e.pageY - y + translate3dXYZ[1];
  targetElement.style.transform = 'translate3d(' + mx + 'px, ' + my + 'px, 0)';
};

var mouseUp = function mouseUp(e) {
  document.removeEventListener('mouseleave', mouseUp, false);
  document.body.removeEventListener('mousemove', mouseMove, false);
  document.body.removeEventListener('touchmove', mouseMove, false);
  document.body.removeEventListener('mouseup', mouseUp, false);
  document.body.removeEventListener('touchend', mouseUp, false);
  if (e.target && e.target.classList) e.target.classList.remove('v-movable-drag');
};

var install = function install(Vue) {
  Vue.directive('Movable', Movable$1);
};

if (window.Vue) {
  window.Movable = Movable$1;
  Vue.use(install);
}

Movable$1.install = install;

return Movable$1;

})));
