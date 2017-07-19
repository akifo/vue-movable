<template>
  <component :is="currentDesign" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'RealTimeView',

  created () {
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'currentDesign'
    ])
  }

}
</script>
