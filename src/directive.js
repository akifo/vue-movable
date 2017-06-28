import './style.css'
import getTransform from './util/get-transform'

let x
let y
let translate3dXYZ
let targetElement

export default {
  bind (el, binding, vnode) {
    el.addEventListener('mousedown', mouseDown, false)
    el.addEventListener('touchstart', mouseDown, false)
  }
}

const mouseDown = (e) => {
  if (!e.target) return

  let event = e
  if (e.type === 'mousedown') {
    event = e
  } else {
    event = e.changedTouches[0]
  }

  targetElement = event.target

  event.target.classList.add('v-movable-drag')

  x = event.pageX
  y = event.pageY

  translate3dXYZ = getTransform(e.target.style.transform)

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
  if (e.target && e.target.classList) e.target.classList.remove('v-movable-drag')
}
