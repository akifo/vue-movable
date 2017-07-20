<template>
  <div class="backbone" :style="colorStyle('0001')">
    <h1>BackBone</h1>
  </div>
</template>

<script>
import AsyncCompMixin from '../mixin'

export default {

  name: 'MyBackbone',

  mixins: [AsyncCompMixin]

}
</script>

<style lang="stylus">
</style>
