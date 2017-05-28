export default {
  bind (el, binding, vnode) {
    el.addEventListener('mousedown', mdown, false)
    el.addEventListener('touchstart', mdown, false)
  },
  inserted (el) {
  }
}

let x
let y

const mdown = function (e) {
  this.classList.add('drag')

  let event
  if (e.type === 'mousedown') {
    event = e
  } else {
    event = e.changedTouches[0]
  }

  x = event.pageX - this.offsetLeft
  y = event.pageY - this.offsetTop

  document.body.addEventListener('mousemove', mmove, false)
  document.body.addEventListener('touchmove', mmove, false)
}

function mmove (e) {
  var drag = document.getElementsByClassName('drag')[0]

  let event
  if (e.type === 'mousemove') {
    event = e
  } else {
    event = e.changedTouches[0]
  }

  e.preventDefault()

  drag.style.top = event.pageY - y + 'px'
  drag.style.left = event.pageX - x + 'px'

  drag.addEventListener('mouseup', mup, false)
  document.body.addEventListener('mouseleave', mup, false)
  drag.addEventListener('touchend', mup, false)
  document.body.addEventListener('touchleave', mup, false)
}

function mup (e) {
  var drag = document.getElementsByClassName('drag')[0]

  document.body.removeEventListener('mousemove', mmove, false)
  drag.removeEventListener('mouseup', mup, false)
  document.body.removeEventListener('touchmove', mmove, false)
  drag.removeEventListener('touchend', mup, false)

  drag.classList.remove('drag')
}
