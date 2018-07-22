<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

//Internal Global imports
import Util from './common/js/Utilities.js'
// import Bar from './model/Bar.js'

export default {

  name: 'App',

  created(){
    let contex = 'contextmenu'
    document.addEventListener(contex, (e)=> Util.preventDefaultAction(e)  , false)
  }
}

</script>

<style lang="sass">

  @import "./common/style/layout"

  ::-webkit-scrollbar
    width: 20px

  ::-webkit-scrollbar-track
    background: $scroll-bar-inside

  ::-webkit-scrollbar-thumb
    background: $scroll-bar-out

  ::-webkit-scrollbar-thumb:hover
    background: $scroll-bar-hover


  div.bar
    width: 100%
    height: 100%
    background: $bar-color
    box-sizing: content-box
    border-radius: 3px

</style>
