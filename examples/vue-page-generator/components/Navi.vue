<template>
  <div id="navi">
    <ul>
      <li @click="openModal('EditDesign', 'rNgO02x')" v-tooltip.right="'Design List'"><i class="material-icons">view_list</i></li>
      <li v-for="(value, key) in currentDesignColors"
        @click="openModal('EditColor', key)"
        v-tooltip.right="value.name"
        :style="colorStyle(value)"
      >
        <i class="material-icons">color_lens</i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

  name: 'Navi',

  computed: {
    ...mapGetters([
      'currentDesign',
      'currentDesignColors'
    ])
  },

  methods: {

    ...mapMutations([
      'toggleActiveModals'
    ]),

    colorStyle (value) {
      if (!value) return
      return {
        'color': value.hex
      }
    },

    openModal (modalName, key) {
      this.toggleActiveModals({
        modalName: modalName,
        key: key
      })
    }

  }

}
</script>

<style lang="stylus">
#navi
  ul
    margin: 10px 0
    padding: 0
    li
      list-style: none
      margin: 5px 0
      padding: 0
      width: 35px
      text-align: center
      cursor: pointer
      color: #19b5fe
      text-shadow: 0 1px 1px rgba(#000, .2)
      border-bottom: 1px solid #f1f1f1
      opacity: 1
      transition: ease .2 opacity
      &:hover
        opacity: .6

.tooltip
  display: block !important
  padding: 4px
  z-index: 10000

  .tooltip-inner
    font-size: 10px
    background: rgba(#f9690e, .9)
    color: #fff
    border-radius: 2px
    border: 1px solid darken(#f9690e, 5%)
    padding: 2px 5px 1px

  .tooltip-arrow
    display: none

  &[aria-hidden='true']
    visibility: hidden
    opacity: 0
    transition: opacity .15s, visibility .15s

  &[aria-hidden='false']
    visibility: visible
    opacity: 1
    transition: opacity .15s
</style>
