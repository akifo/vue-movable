import { mapMutations } from 'vuex'
import { kebabCase } from 'lodash'

export default {

  data () {
    return {
      settings: {},
      colors: []
    }
  },

  created () {
    import(`./${kebabCase(this.$options.name)}/settings.js`).then(m => {
      this.settings = m.default
      this.colors = m.default.colors
      this.selectDesignColors(this.colors)
    })
  },

  methods: {
    ...mapMutations([
      'selectDesignColors'
    ]),
    colorStyle (key) {
      if (!this.colors[key]) return
      return {
        [this.colors[key].property]: this.colors[key].hex
      }
    }
  }
}
