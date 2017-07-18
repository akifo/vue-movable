<template>
  <div id="app">
    <EditModalIndex class="modal" />
    <Navi class="side" />
    <RealTimeView class="main" />
  </div>
</template>

<script>
import EditModalIndex from './edit-modal/EditModalIndex.vue'
import Navi from './Navi.vue'
import RealTimeView from './RealTimeView.vue'

export default {

  name: 'App',

  components: {
    EditModalIndex,
    Navi,
    RealTimeView
  }

}
</script>

<style lang="stylus">
body
  margin: 0
  padding: 0

#app
  display: flex
  height: 100vh
  .side
    flex: 0 0 70px
    z-index: 2
    box-shadow:
      0 6px 10px 0 rgba(0,0,0,0.14),
      0 1px 18px 0 rgba(0,0,0,0.12),
      0 3px 5px -1px rgba(0,0,0,0.3)
  .main
    flex: 1 1 auto
    z-index: 1
  .modal
    position: absolute
    z-index: 3
</style>
