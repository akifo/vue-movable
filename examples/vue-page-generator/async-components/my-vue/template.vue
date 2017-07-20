<template>
  <div class="vue" :style="[colorStyle('0001'), colorStyle('0002')]">

    <div id="hero">
      <div class="inner">
        <div class="left">
          <img class="hero-logo" src="../../assets/vue-logo.png" />
        </div>
        <div class="right">
          <h2 class="vue">Vue.js</h2>
          <h1 :style="colorStyle('0003')">
            The Progressive<br>
            JavaScript Framework
          </h1>
          <p>
            <a class="button" href="" :style="colorStyle('0006')">GET STARTED</a>
            <a class="button white" href="https://github.com/vuejs/vue" target="_blank" :style="colorStyle('0007')">GITHUB</a>
          </p>
        </div>
      </div>
    </div>

    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2 :style="colorStyle('0007')">Approachable</h2>
          <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
        </div>

        <div class="point">
          <h2 :style="colorStyle('0007')">Versatile</h2>
          <p>Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.</p>
        </div>

        <div class="point">
          <h2 :style="colorStyle('0007')">Performant</h2>
          <p>
            20kb min+gzip Runtime<br>
            Blazing Fast Virtual DOM<br>
            Minimal Optimization Efforts
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AsyncCompMixin from '../mixin'

export default {

  name: 'MyVue',

  mixins: [AsyncCompMixin]

}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono')
@import url('https://fonts.googleapis.com/css?family=Dosis:500&text=Vue.js')

$logo-font = 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif

.vue
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
  font-size: 15px
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0

#hero
  padding: 50px 40px
  .inner
    max-width: 900px
    margin: 0 auto
  .left, .right
    display: inline-block
    vertical-align: top
  .left
    width: 39%
  .right
    // width: 61%
    width: 60%
  .hero-logo
    width: 215px
    height: 215px
    float: right
    margin-right: 60px
  h1
    font-weight: 300
    margin: 0
    font-size: 3.2em
  h2
    font-family: $logo-font
    font-weight: 500
    font-size: 2.4em
    margin: 0 0 10px
    display: none
  .button
    margin: 1em 0
    font-size: 1.05em
    font-weight: 600
    letter-spacing: .1em
    min-width: 8em
    text-align: center
    padding: 0.75em 2em
    border-radius: 2em
    display: inline-block
    color: #fff
    transition: all 0.15s ease
    box-sizing: border-box
    border-width: 1px
    border-style: solid

    &:first-child
      margin-right: 1em
  .social-buttons
    list-style-type: none
    padding: 0
    li
      display: inline-block
      vertical-align: middle
      margin-right: 15px

#highlights
  padding-bottom: 70px
  .inner
    max-width: 900px
    margin: 0 auto
    text-align: center
  .point
    width: 33%
    display: inline-block
    vertical-align: top
    box-sizing: border-box
    padding: 0 2em
    h2
      font-size: 1.5em
      font-weight: 400
      margin: 0
      padding: .5em 0

</style>
