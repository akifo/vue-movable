<template>
  <div class="angular" :style="colorStyle('0001')">
    <h1>Angular</h1>
  </div>
</template>

<script>
import AsyncCompMixin from '../mixin'

export default {

  name: 'MyAngular',

  mixins: [AsyncCompMixin]

}
</script>

<style lang="stylus">
</style>
