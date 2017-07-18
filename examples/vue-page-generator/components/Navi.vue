<template>
  <div id="navi">
    this is Navi
    <ul>
      <li @click="toggleActiveModals('EditDesign')">design</li>
      <li @click="openColorEditor('bgColor1')">background color 1</li>
      <li @click="openColorEditor('fontColor1')">font color 1</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import vm from '../vm'

export default {

  name: 'Navi',

  methods: {

    ...mapMutations([
      'toggleActiveModals'
    ]),

    openColorEditor (val) {
      vm.$data.currentColor = val
      this.toggleActiveModals('EditColor')
    }

  }

}
</script>

<style lang="stylus">
</style>
