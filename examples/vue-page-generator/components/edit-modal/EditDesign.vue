<template>
  <MovableBox id="edit-design" class="v-movable-simple">
    <div v-movable-controller></div>
    <div class="v-movable-content">
      <ul>
        <li v-for="item in designList" @click="selectDesign(item)">{{item}}</li>
      </ul>
    </div>
  </MovableBox>
</template>

<script>
import { mapMutations } from 'vuex'
import designList from '../../assets/design-list'

export default {

  name: 'EditDesign',

  data () {
    return {
      designList: designList
    }
  },

  methods: {
    ...mapMutations([
      'selectDesign'
    ])
  }

}
</script>

<style lang="stylus">
.v-movable-content
  background-color: #fff

</style>

