<template>
  <div class="riot"  :style="colorStyle('0001')">
    <h1>Riot</h1>
  </div>
</template>

<script>
import AsyncCompMixin from '../mixin'

export default {

  name: 'MyRiot',

  mixins: [AsyncCompMixin]

}
</script>

<style lang="stylus">
</style>
