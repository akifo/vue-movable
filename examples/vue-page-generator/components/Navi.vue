<template>
  <div id="navi">
    this is Navi
    <ul>
      <li @click="toggleActiveModals('EditDesign')">design</li>
      <li v-for="(value, key) in currentDesignStyleObjects" @click="openColorEditor(key)">{{key}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import vm from '../vm'

export default {

  name: 'Navi',

  data () {
    return {
      vm: vm.$data
    }
  },

  computed: {
    ...mapGetters([
      'currentDesign',
      'currentDesignStyleObjects'
    ])
  },

  methods: {

    ...mapMutations([
      'toggleActiveModals'
    ]),

    openColorEditor (val) {
      this.vm.currentColor = val
      this.toggleActiveModals('EditColor')
    }

  }

}
</script>

<style lang="stylus">
</style>
