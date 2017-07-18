import getTransform from './util/get-transform'
import closest from './util/closest'

const V_MOVABLE_CLASS = 'v-movable'
const V_MOVABLE_BOX_CLASS = 'v-movable-box'
const V_MOVABLE_CONTROLLER_CLASS = 'v-movable-controller'
const V_MOVABLE_DRAGGING_CLASS = 'v-movable-dragging'

let x
let y
let translate3dXYZ
let targetElement

export default {
  bind (el, binding, vnode) {
    el.addEventListener('mousedown', mouseDown, false)
    el.addEventListener('touchstart', mouseDown, false)
    if (binding.name === 'movable') el.classList.add(V_MOVABLE_CLASS)
    else if (binding.name === 'movable-controller') el.classList.add(V_MOVABLE_CONTROLLER_CLASS)
  }
}

const mouseDown = (e, name) => {
  if (!e.target) return

  let event = e
  if (e.type === 'mousedown') {
    event = e
  } else {
    event = e.changedTouches[0]
  }

  if (event.target.classList.contains(V_MOVABLE_CLASS)) {
    targetElement = event.target
  } else {
    targetElement = closest(event.target, `.${V_MOVABLE_BOX_CLASS}`)
  }

  targetElement.classList.add(V_MOVABLE_DRAGGING_CLASS)

  x = event.pageX
  y = event.pageY

  translate3dXYZ = getTransform(targetElement.style.transform)

  document.addEventListener('mouseleave', mouseUp, false)
  document.body.addEventListener('mousemove', mouseMove, false)
  document.body.addEventListener('touchmove', mouseMove, false)
  document.body.addEventListener('mouseup', mouseUp, false)
  document.body.addEventListener('touchend', mouseUp, false)
}

const mouseMove = (e) => {
  const mx = e.pageX - x + translate3dXYZ[0]
  const my = e.pageY - y + translate3dXYZ[1]
  targetElement.style.transform = `translate3d(${mx}px, ${my}px, 0)`
}

const mouseUp = (e) => {
  document.removeEventListener('mouseleave', mouseUp, false)
  document.body.removeEventListener('mousemove', mouseMove, false)
  document.body.removeEventListener('touchmove', mouseMove, false)
  document.body.removeEventListener('mouseup', mouseUp, false)
  document.body.removeEventListener('touchend', mouseUp, false)
  if (targetElement && targetElement.classList) targetElement.classList.remove(V_MOVABLE_DRAGGING_CLASS)
}
