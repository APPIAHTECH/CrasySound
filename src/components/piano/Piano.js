import Notes from '../../model/Notes.js';
import Grid from './../grid/Grid'

export default {

  name: "paino",
  components : {Grid},
  data(){

    return{

      keyboard : {
        defaultOctave : 4,
        notes : [ 'C' , 'CS' , 'D' , 'DS' , 'E' , 'F' , 'FS' , 'G' , 'GS' , 'A' , 'AS', 'B'],
        octaves : 5,//5
        type : "modern",
        totalNotes : 7,
        cssActiveWhite : "active",
        cssActiveBlack : "active-black",
        volume : .3,
        totalKeys : 12
      },

      effects : {
        gainNode : null,
      },

      times:{
        currentTime: 0
      },

      oscillator : {
        context : null,
        oscillatorsFrequencies : {},
        audioType : 'sawtooth' //sine , square , sawtooth , triangle ,
      },

      heightNotes : 0
    }
  },

  created(){

    this.oscillator.context = new (window.AudioContext || window.webkitAudioContext)();
    this.times.currentTime = this.oscillator.context.currentTime;
    this.effects.gainNode = this.oscillator.context.createGain();

    this.heightNotes = this.keyboard.octaves + 1;
    this.$store.commit('addMaxNote' , this.heightNotes);
    this.$store.commit('addMaxOctaves' , this.keyboard.octaves);

    //Used for the keyboard key
    window.addEventListener("keydown" , (event)=> this.soundToPlay(event))
    window.addEventListener("keyup" , (event)=> this.releaseSound(event))
  },

  mounted() {
  },

  methods : {

    mousePlayKey(octave , note){
      this.playKeyNote(octave , note)
    },

    mouseStopKey(octave , note){
      let id = note.concat(octave);
      this.oscillator.oscillatorsFrequencies[id].stop(this.times.currentTime);
    },

    soundToPlay(event){

      //notes : [ 'C' , 'C#' , 'D' , 'D#' , 'E' , 'F' , 'F#' , 'G' , 'G#' , 'A' , 'A#', 'B'],

      //All white keys
      if(event.key.toLowerCase() == "q"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[0]);
        document.getElementById(this.keyboard.notes[0].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "w"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[2]);
        document.getElementById(this.keyboard.notes[2].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "e"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[4]);
        document.getElementById(this.keyboard.notes[4].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "r"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[5]);
        document.getElementById(this.keyboard.notes[5].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "t"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[7]);
        document.getElementById(this.keyboard.notes[7].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "y")  {
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[9]);
        document.getElementById(this.keyboard.notes[9].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "u") {
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[11]);
        document.getElementById(this.keyboard.notes[11].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveWhite);
      }


      //Next octave
      else if(event.key.toLowerCase() == "i") {
        this.playKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[0]);
        document.getElementById(this.keyboard.notes[0].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "o") {
        this.playKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[2]);
        document.getElementById(this.keyboard.notes[2].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "p") {
        this.playKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[4]);
        document.getElementById(this.keyboard.notes[4].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.keyCode == 186) {
        this.playKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[5]); //The `` key
        document.getElementById(this.keyboard.notes[5].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveWhite);
      }
      else if(event.keyCode == 187){ //+
        this.playKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[7]);
        document.getElementById(this.keyboard.notes[7].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveWhite);
      }

      //Black keys
      if(event.key.toLowerCase() == "2") {
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[1]);
        document.getElementById(this.keyboard.notes[1].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "3"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[3]);
        document.getElementById(this.keyboard.notes[3].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "5"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[6]);
        document.getElementById(this.keyboard.notes[6].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "6"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[8]);
        document.getElementById(this.keyboard.notes[8].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "7"){
        this.playKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[10]);
        document.getElementById(this.keyboard.notes[10].concat(this.keyboard.defaultOctave)).classList.add(this.keyboard.cssActiveBlack);
      }

      //Black keys next octave
      if(event.key.toLowerCase() == "9"){
        this.playKeyNote(this.keyboard.defaultOctave + 1 , this.keyboard.notes[1]);
        document.getElementById(this.keyboard.notes[1].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "0"){
        this.playKeyNote(this.keyboard.defaultOctave + 1 , this.keyboard.notes[3]);
        document.getElementById(this.keyboard.notes[3].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "¡"){
        this.playKeyNote(this.keyboard.defaultOctave + 1, this.keyboard.notes[6]);
        document.getElementById(this.keyboard.notes[6].concat(this.keyboard.defaultOctave + 1)).classList.add(this.keyboard.cssActiveBlack);
      }


    },

    releaseSound(event){

      //All white keys
      if(event.key.toLowerCase() == "q"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[0]);
        document.getElementById(this.keyboard.notes[0].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "w"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[2]);
        document.getElementById(this.keyboard.notes[2].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "e"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[4]);
        document.getElementById(this.keyboard.notes[4].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "r"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[5]);
        document.getElementById(this.keyboard.notes[5].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "t"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[7]);
        document.getElementById(this.keyboard.notes[7].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "y")  {
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[9]);
        document.getElementById(this.keyboard.notes[9].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "u") {
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[11]);
        document.getElementById(this.keyboard.notes[11].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveWhite);
      }

      //Next octave
      else if(event.key.toLowerCase() == "i") {
        this.stopKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[0]);
        document.getElementById(this.keyboard.notes[0].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "o") {
        this.stopKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[2]);
        document.getElementById(this.keyboard.notes[2].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.key.toLowerCase() == "p") {
        this.stopKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[4]);
        document.getElementById(this.keyboard.notes[4].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.keyCode == 186) {
        this.stopKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[5]); //The `` key
        document.getElementById(this.keyboard.notes[5].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveWhite);
      }
      else if(event.keyCode == 187){ //+
        this.stopKeyNote(this.keyboard.defaultOctave+1 , this.keyboard.notes[7]);
        document.getElementById(this.keyboard.notes[7].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveWhite);
      }


      //Black keys
      if(event.key.toLowerCase() == "2") {
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[1]);
        document.getElementById(this.keyboard.notes[1].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "3"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[3]);
        document.getElementById(this.keyboard.notes[3].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "5"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[6]);
        document.getElementById(this.keyboard.notes[6].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "6"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[8]);
        document.getElementById(this.keyboard.notes[8].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "7"){
        this.stopKeyNote(this.keyboard.defaultOctave , this.keyboard.notes[10]);
        document.getElementById(this.keyboard.notes[10].concat(this.keyboard.defaultOctave)).classList.remove(this.keyboard.cssActiveBlack);
      }

      //Black keys next octave
      if(event.key.toLowerCase() == "9"){
        this.stopKeyNote(this.keyboard.defaultOctave + 1 , this.keyboard.notes[1]);
        document.getElementById(this.keyboard.notes[1].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "0"){
        this.stopKeyNote(this.keyboard.defaultOctave + 1 , this.keyboard.notes[3]);
        document.getElementById(this.keyboard.notes[3].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveBlack);
      }
      else if(event.key.toLowerCase() == "¡"){
        this.stopKeyNote(this.keyboard.defaultOctave + 1, this.keyboard.notes[6]);
        document.getElementById(this.keyboard.notes[6].concat(this.keyboard.defaultOctave + 1)).classList.remove(this.keyboard.cssActiveBlack);
      }

    },


    playKeyNote(octave , note){

      let osc = this.oscillator.context.createOscillator();
      let notes = new Notes();
      let id = note.concat(octave);

      console.log("id play -> " + id)
      osc.type = this.oscillator.audioType;
      osc.connect(this.effects.gainNode);

      this.effects.gainNode.connect(this.oscillator.context.destination);
      this.effects.gainNode.gain.setValueAtTime(this.keyboard.volume , this.times.currentTime);

      osc.frequency.setValueAtTime(notes.getNoteFrequency(octave , note), this.times.currentTime);

      this.oscillator.oscillatorsFrequencies[id] = osc;
      osc.start(this.times.currentTime);

    },

    stopKeyNote(octave , note){
      let id = note.concat(octave);
      console.log("id stop -> " + id);
      this.effects.gainNode.gain.exponentialRampToValueAtTime(0.001, this.times.currentTime);
      this.oscillator.oscillatorsFrequencies[id].stop(this.times.currentTime);
    },

    play(){

      let rows = this.keyboard.octaves;

      for(let i = 0; i < rows; i++){

        let octavesNotesToPlay = this.getOctavePainoNotes(this.$store.getters.getBarState , i);

        octavesNotesToPlay.forEach((element)=>{

          let noteInfo = element.note;
          let audioCtx  = new AudioContext();
          let oscillator = audioCtx.createOscillator();
          let noteFrequency = noteInfo.frequency;

          oscillator.type = this.oscillator.audioType;

          oscillator.frequency.setValueAtTime(noteFrequency, audioCtx.currentTime);

          oscillator.connect(audioCtx.destination);
          oscillator.start(noteInfo.startingTime);
          oscillator.stop(noteInfo.duration);

        });
      }

    },

    //TODO : Structure implementar de otra manera!
    getOctavePainoNotes : (barState , next)=> {

      let  col, tempArr = new Array(), len = barState[next].length;
      let element = 0;

      for(col= 0; col < len; col++){
        element = barState[next][col];
        if(element) tempArr.push(element);
      }
      return tempArr;
    }

  },

  destroy(){}
}
