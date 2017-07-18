import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  activeModals: [],
  currentDesign: 'my-vue'
}

const mutations = {
  toggleActiveModals (state, modalName) {
    const index = state.activeModals.indexOf(modalName)
    console.log(index)
    if (index !== -1) state.activeModals.splice(index, 1)
    else state.activeModals.push(modalName)
  },
  selectDesign (state, designName) {
    state.currentDesign = designName
  }
}

const actions = {
}

const getters = {
  activeModals: state => state.activeModals,
  currentDesign: state => state.currentDesign
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
