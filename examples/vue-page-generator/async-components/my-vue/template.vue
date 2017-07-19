<template>
  <div class="vue" :style="styleObjects['0001']">

    <div id="hero">
      <div class="inner">
        <div class="left">
          <img class="hero-logo" src="../../assets/vue-logo.png">
        </div><div class="right">
          <h2 class="vue">Vue.js</h2>
          <h1>
            The Progressive<br>JavaScript Framework
          </h1>
          <p>
            <a class="button" href="">GET STARTED</a>
            <a class="button white" href="https://github.com/vuejs/vue" target="_blank">GITHUB</a>
          </p>
        </div>
      </div>
    </div>

    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>Approachable</h2>
          <p :style="styleObjects['0002']">Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
        </div>

        <div class="point">
          <h2>Versatile</h2>
          <p :style="styleObjects['0002']">Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.</p>
        </div>

        <div class="point">
          <h2>Performant</h2>
          <p :style="styleObjects['0002']">
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
@import url('https://fonts.googleapis.com/css?family=Dosis|Source+Sans+Pro')

// font faces
$body-font = 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
$logo-font = 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
$code-font = 'Roboto Mono', Monaco, courier, monospace

// font sizes
$body-font-size = 15px
$code-font-size = .8em

// colors
// $light  = #7f8c8d
$green  = #42b983
$border = #dddddd
$codebg = #f8f8f8
$red = #ff6666
$info = #1C90F3

$radius = 2px
$content-padding-top = 30px
$header-inner-height = 41px
$heading-padding-vertical = 10px
$header-height = $header-inner-height + $heading-padding-vertical * 2
$mobile-header-height = 40px
$heading-link-padding-top = $header-height + $content-padding-top
$mobile-heading-link-padding-top = $mobile-header-height + $content-padding-top
$h2-margin-top = 45px
$h3-margin-top = 52px


#hero
  padding: $space 40px
  // background-color: #fff
  .inner
    max-width: $width
    margin: 0 auto
  .left, .right
    display: inline-block
    vertical-align: top
  .left
    width: 39%
  .right
    width: 61%
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
  // background-color: #fff
  padding-bottom: 70px
  .inner
    max-width: $width
    margin: 0 auto
    text-align: center
  .point
    width: 33%
    display: inline-block
    vertical-align: top
    box-sizing: border-box
    padding: 0 2em
    h2
      color: $green
      font-size: 1.5em
      font-weight: 400
      margin: 0
      padding: .5em 0
    p
      // color: $light
</style>
