<template>
  <div class="react" :style="colorStyle('0001')">
    this is react design
  </div>
</template>

<script>
import AsyncCompMixin from '../mixin'

export default {

  name: 'MyReact',

  mixins: [AsyncCompMixin]

}
</script>

<style lang="stylus">
</style>
