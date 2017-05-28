(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueMobable = factory());
}(this, (function () { 'use strict';

var Movable$1 = {
  bind: function bind(el, binding, vnode) {
    el.addEventListener('mousedown', mdown, false);
    el.addEventListener('touchstart', mdown, false);
  },
  inserted: function inserted(el) {}
};

var x = void 0;
var y = void 0;

var mdown = function mdown(e) {
  this.classList.add('drag');

  var event = void 0;
  if (e.type === 'mousedown') {
    event = e;
  } else {
    event = e.changedTouches[0];
  }

  x = event.pageX - this.offsetLeft;
  y = event.pageY - this.offsetTop;

  document.body.addEventListener('mousemove', mmove, false);
  document.body.addEventListener('touchmove', mmove, false);
};

function mmove(e) {
  var drag = document.getElementsByClassName('drag')[0];

  var event = void 0;
  if (e.type === 'mousemove') {
    event = e;
  } else {
    event = e.changedTouches[0];
  }

  e.preventDefault();

  drag.style.top = event.pageY - y + 'px';
  drag.style.left = event.pageX - x + 'px';

  drag.addEventListener('mouseup', mup, false);
  document.body.addEventListener('mouseleave', mup, false);
  drag.addEventListener('touchend', mup, false);
  document.body.addEventListener('touchleave', mup, false);
}

function mup(e) {
  var drag = document.getElementsByClassName('drag')[0];

  document.body.removeEventListener('mousemove', mmove, false);
  drag.removeEventListener('mouseup', mup, false);
  document.body.removeEventListener('touchmove', mmove, false);
  drag.removeEventListener('touchend', mup, false);

  drag.classList.remove('drag');
}

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
