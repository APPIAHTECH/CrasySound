<template>

  <div class="piano-roll">

    <!--Key board desing -->
    <div class="key-board">

      <div class="octave" v-for="octave in keyboard.octaves">

        <div class="white key"  :id="keyboard.notes[11] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[11])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[11])"><p>{{keyboard.notes[11] + (heightNotes - octave)}}</p></div>

        <div class="black key black-key black-key-one" :id="keyboard.notes[10] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[10])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[10])"></div>

        <div class="white key" :id="keyboard.notes[9] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[9])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[9])"><p>{{keyboard.notes[9] + (heightNotes - octave)}}</p></div>

        <div class="black key black-key black-key-two" :id="keyboard.notes[8] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[8])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[8])"></div>

        <div class="white key" :id="keyboard.notes[7] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[7])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[7])"><p>{{keyboard.notes[7] + (heightNotes - octave)}}</p></div>

        <div class="black key black-key black-key-three" :id="keyboard.notes[6] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[6])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[6])"></div>

        <div class="white key" :id="keyboard.notes[5] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[5])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[5])"><p>{{keyboard.notes[5] + (heightNotes - octave)}}</p></div>

        <div class="white key" :id="keyboard.notes[4] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[4])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[4])"><p>{{keyboard.notes[4] + (heightNotes - octave)}}</p></div>

        <div class="black key black-key black-key-four" :id="keyboard.notes[3] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[3])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[3])"></div>

        <div class="white key" :id="keyboard.notes[2] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[2])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[2])"><p>{{keyboard.notes[2] + (heightNotes - octave)}}</p></div>

        <div class="black key black-key black-key-five" :id="keyboard.notes[1] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[1])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[1])"></div>

        <div class="key do" :id="keyboard.notes[0] + (heightNotes - octave)" @mousedown="mousePlayKey((heightNotes - octave) , keyboard.notes[0])" @mouseup="mouseStopKey((heightNotes - octave) , keyboard.notes[0])"><p>{{keyboard.notes[0] + (heightNotes - octave)}}</p></div>

      </div>


    </div>


    <!-- Piano Roll desing-->
    <Grid
      :piano=true
      :octaves=keyboard.octaves
      :cols=keyboard.totalKeys
      :notes=keyboard.notes>
    </Grid>

    <button @click="play()">Play</button>

  </div>

</template>

<style src="./Piano.sass" lang="sass" scoped></style>
<script src="./Piano.js"></script>
