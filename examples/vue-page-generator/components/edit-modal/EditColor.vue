<template>
  <MovableBox id="edit-color" class="v-movable-simple" @close="close" @cancel="cancel">
    <div v-movable-controller>{{currentDesignColors[value].name}}</div>
    <sketch-picker :value="editColor" @input="update" />
  </MovableBox>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import designList from '../../assets/design-list'
import { Sketch } from 'vue-color'

export default {

  name: 'EditColor',

  components: {
    'sketch-picker': Sketch
  },

  props: {
    value: {
      type: String,
      required: true,
      default: '999999999'
    }
  },

  data () {
    return {
      designList: designList
    }
  },

  computed: {
    ...mapGetters([
      'currentDesign',
      'currentDesignColors'
    ]),
    editColor () {
      return {
        hex: this.currentDesignColors[this.value].hex || '#fff'
      }
    }
  },

  methods: {
    ...mapMutations([
      'updateColor'
    ]),
    update (val) {
      this.updateColor({
        key: this.value,
        hex: val.hex
      })
    },
    close () {
    },
    cancel () {
    }
  }

}
</script>

<style lang="stylus">
</style>
