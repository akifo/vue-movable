import Vue from 'vue'
import Vuex from 'vuex'
import { some } from 'lodash'

Vue.use(Vuex)

const state = {
  activeModals: [],
  currentDesign: 'my-vue',
  currentDesignColors: []
}

const mutations = {
  toggleActiveModals (state, { modalName, key }) {
    if (some(state.activeModals, { modalName, key })) {
      state.activeModals = state.activeModals.filter(x => !(x.modalName === modalName && x.key === key))
    } else {
      state.activeModals.push({
        modalName,
        key
      })
    }
  },
  selectDesign (state, designName) {
    state.currentDesign = designName
  },
  selectDesignColors (state, colors) {
    Vue.set(state, 'currentDesignColors', colors)
  },
  updateColor (state, { key, hex }) {
    state.currentDesignColors[key].hex = hex
  }
}

const actions = {
}

const getters = {
  activeModals: state => state.activeModals,
  currentDesign: state => state.currentDesign,
  currentDesignColors: state => state.currentDesignColors
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
