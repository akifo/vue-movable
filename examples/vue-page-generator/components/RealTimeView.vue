<template>
  <component :is="currentDesign" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'RealTimeView',

  computed: {
    ...mapGetters([
      'currentDesign'
    ])
  }

}
</script>
