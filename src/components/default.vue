<template>
    <div class="default">
      <!-- <Piano></Piano> -->
      <!-- <button type="button" name="button" @click="play()">Play</button>
      <button type="button" name="button" @click="stop()">Stop</button> -->
    </div>
</template>

<script>
  import Piano from './piano/Piano.vue'
  import Grid from './grid/Grid.vue'
  import { Timer } from './../model/Timer.js'

  export default {
        name: "default",
        components: {Piano , Grid},
        data(){
          return {
            stuff : {
              timer :  new Timer(new AudioContext())
            }
          }
        },
        methods : {

          play(){
            this.stuff.timer.startTimer()
          },

          stop(){
            this.stuff.timer.stopTimer()
          }
        }
    }
</script>

<style scoped lang="sass">

  div.default
    background: white
    width: 100%
    max-height: 1024px

</style>
