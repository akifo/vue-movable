<template>
  <div id="edit-modal-index">
    <transition-group name="fade">
      <component v-for="(item, index) in activeModals" :is="item" v-show="isActiveModal(item)" :key="index"/>
      <!-- <EditColor v-show="isActiveModal('EditColor')" :key="'EditColor'" /> -->
      <!-- <EditDesign v-show="isActiveModal('EditDesign')" :key="'EditDesign'" /> -->
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
  },

  methods: {
    isActiveModal (modalName) {
      return this.activeModals.some(modal => modal === modalName)
    }
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
