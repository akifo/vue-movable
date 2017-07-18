import Vue from 'vue'

// const defaultProps = {
//   hex: '#194d33',
//   hsl: {
//     h: 150,
//     s: 0.5,
//     l: 0.2,
//     a: 1
//   },
//   hsv: {
//     h: 150,
//     s: 0.66,
//     v: 0.30,
//     a: 1
//   },
//   rgba: {
//     r: 25,
//     g: 77,
//     b: 51,
//     a: 1
//   },
//   a: 1
// }

export default new Vue({

  data: {
    currentColor: 'bgColor1',
    colors: {
      bgColor1: { hex: '#fff' },
      fontColor1: { hex: '#7f8c8d' }
    }
  }

})
