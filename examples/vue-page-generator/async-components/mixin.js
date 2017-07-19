import { mapMutations } from 'vuex'
import { kebabCase } from 'lodash'

export default {

  data () {
    return {
      settings: {},
      styleObjects: []
    }
  },

  created () {
    import(`./${kebabCase(this.$options.name)}/settings.js`).then(m => {
      this.settings = m.default
      this.styleObjects = m.default.styleObjects
      this.selectDesignStyleObjects(this.styleObjects)
    })
  },

  methods: {
    ...mapMutations([
      'selectDesignStyleObjects'
    ])
  }
}
