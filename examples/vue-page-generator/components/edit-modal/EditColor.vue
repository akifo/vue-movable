<template>
  <MovableBox id="edit-color" class="v-movable-simple">
    <div v-movable-controller></div>
    <photoshop-picker v-model="vm.colors[vm.currentColor]" />
  </MovableBox>
</template>

<script>
import { Photoshop } from 'vue-color'
import vm from '../../vm'

export default {

  name: 'EditColor',

  components: {
    'photoshop-picker': Photoshop
  },

  data () {
    return {
      vm: vm.$data
    }
  }

}
</script>

<style lang="stylus">
</style>
