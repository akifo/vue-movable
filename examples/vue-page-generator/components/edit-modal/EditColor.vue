<template>
  <MovableBox id="edit-color" class="v-movable-simple">
    <div v-movable-controller></div>
    <p>aiueo</p>
    <!-- <sketch-picker v-model="editColor" v-if="editColor" /> -->
  </MovableBox>
</template>

<script>
import { mapGetters } from 'vuex'
import designList from '../../assets/design-list'
import { Sketch } from 'vue-color'
import vm from '../../vm'

export default {

  name: 'EditColor',

  components: {
    'sketch-picker': Sketch
  },

  data () {
    return {
      designList: designList,
      vm: vm.$data
    }
  },

  computed: {
    ...mapGetters([
      'currentDesign'
    ]),
    editColor () {
      // return designList[this.currentDesign].colors[vm.currentColor]
    }
  }

}
</script>

<style lang="stylus">
</style>
