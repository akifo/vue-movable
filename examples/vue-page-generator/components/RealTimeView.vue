<template>
  <component
    :is="currentDesign"
  />
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

  components: {
    'my-vue': () => import('../async-components/my-vue.vue').then(m => m.default),
    'my-riot': () => import('../async-components/my-riot.vue').then(m => m.default),
    'my-react': () => import('../async-components/my-react.vue').then(m => m.default),
    'my-angular': () => import('../async-components/my-angular.vue').then(m => m.default),
    'my-backbone': () => import('../async-components/my-backbone.vue').then(m => m.default)
  },

  computed: {
    ...mapGetters([
      'currentDesign'
    ])
  }

}
</script>



