<template>
  <div class="grid">

    <div v-for="octave in octaves">

     <template v-if="piano">

       <div class="pattern"  :data-pattern-id = "(grid.heightNotes - octave)" v-for="col in cols">
         <div class="row" :data-octave="(grid.heightNotes - octave)" :data-keyNote="grid.pianoNotes[col] + (grid.heightNotes - octave) " v-for="row in rows"  @mousedown="controller($event)"></div>
         <div class="row last" :data-octave="(grid.heightNotes - octave)" :data-keyNote="grid.pianoNotes[col] + (grid.heightNotes - octave) " @mousedown="controller($event)"></div>
       </div>
     </template>

    </div>

  </div>
</template>

<style src="./Grid.sass" lang="sass" scoped></style>
<script src="./Grid.js"></script>
