<template>
  <div id="edit-modal-index">
    <transition-group name="fade">
      <component
        v-for="item in activeModals"
        :is="item.modalName"
        :key="item.key"
        :value="item.key"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditColor from './EditColor.vue'
import EditDesign from './EditDesign.vue'

export default {

  name: 'EditModalIndex',

  computed: {
    ...mapGetters([
      'activeModals'
    ])
  },

  components: {
    EditColor,
    EditDesign
  }

}
</script>

<style lang="stylus">
#edit-modal-index
  height: 0
  width: 0

.fade-enter-active, .fade-leave-active
  transition: opacity .2s
.fade-enter, .fade-leave-to
  opacity: 0

</style>
