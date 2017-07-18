<template>
  <MovableBox id="edit-design" class="v-movable-simple">
    <div v-movable-controller></div>
    <div class="v-movable-content">
      <ul>
        <li @click="selectDesign('my-vue')">Vue.js</li>
        <li @click="selectDesign('my-riot')">Riot</li>
        <li @click="selectDesign('my-react')">React</li>
        <li @click="selectDesign('my-angular')">Angular</li>
        <li @click="selectDesign('my-backbone')">Backbone</li>
      </ul>
    </div>
  </MovableBox>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

  name: 'EditDesign',

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

