/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains the notes frequency,
stored at a map

*/

//S -> #
const DO_FREQ = "C" , RE_FREQ = "D" , MI_FREQ = "E",
      FA_FREQ = "F" , SOL_FREQ = "G" , LA_FREQ = "A" , SI_FREQ = "B";

const DO_FREQ_PRIM = "CS" , RE_FREQ_PRIM = "DS" , FA_FREQ_PRIM = "FS" ,
      SOL_FREQ_PRIM = "GS" , LA_FREQ_PRIM = "AS";

export default class Notes {

    constructor(){

        /**The 0 octave notes**/
        this.OCTAVE = new Map();

        //The withe Notas
        this.OCTAVE.set(DO_FREQ, 16.351598);
        this.OCTAVE.set(RE_FREQ, 18.354048);
        this.OCTAVE.set(MI_FREQ, 20.601722);
        this.OCTAVE.set(FA_FREQ, 21.826764);
        this.OCTAVE.set(SOL_FREQ, 24.499715);
        this.OCTAVE.set(LA_FREQ, 27.500000);
        this.OCTAVE.set(SI_FREQ, 30.867706);

        //The black Notes
        this.OCTAVE.set(DO_FREQ_PRIM, 17.323914);
        this.OCTAVE.set(RE_FREQ_PRIM, 19.445436);
        this.OCTAVE.set(FA_FREQ_PRIM, 23.124651);
        this.OCTAVE.set(SOL_FREQ_PRIM, 25.956544);
        this.OCTAVE.set(LA_FREQ_PRIM, 29.135235);

        /**The 1 octave notes**/
        this.OCTAVE_ONE = new Map();

        //The withe Notas
        this.OCTAVE_ONE.set(DO_FREQ, 32.703196);
        this.OCTAVE_ONE.set(RE_FREQ, 36.708096);
        this.OCTAVE_ONE.set(MI_FREQ, 41.203445);
        this.OCTAVE_ONE.set(FA_FREQ, 43.653529);
        this.OCTAVE_ONE.set(SOL_FREQ, 48.999429);
        this.OCTAVE_ONE.set(LA_FREQ, 55.000000);
        this.OCTAVE_ONE.set(SI_FREQ, 61.735413);

        //The black Notes
        this.OCTAVE_ONE.set(DO_FREQ_PRIM, 34.647829);
        this.OCTAVE_ONE.set(RE_FREQ_PRIM, 38.890873);
        this.OCTAVE_ONE.set(FA_FREQ_PRIM, 46.249303);
        this.OCTAVE_ONE.set(SOL_FREQ_PRIM, 51.913087);
        this.OCTAVE_ONE.set(LA_FREQ_PRIM, 58.270470);

        /**The 2 octave notes**/
        this.OCTAVE_TWO = new Map();

        //The withe Notas
        this.OCTAVE_TWO.set(DO_FREQ, 65.406391);
        this.OCTAVE_TWO.set(RE_FREQ, 73.416192);
        this.OCTAVE_TWO.set(MI_FREQ, 82.406889);
        this.OCTAVE_TWO.set(FA_FREQ, 87.307058);
        this.OCTAVE_TWO.set(SOL_FREQ, 97.998859);
        this.OCTAVE_TWO.set(LA_FREQ, 110.000000);
        this.OCTAVE_TWO.set(SI_FREQ, 123.470825);

        //The black Notes
        this.OCTAVE_TWO.set(DO_FREQ_PRIM, 69.295658);
        this.OCTAVE_TWO.set(RE_FREQ_PRIM, 77.781746);
        this.OCTAVE_TWO.set(FA_FREQ_PRIM, 92.498606);
        this.OCTAVE_TWO.set(SOL_FREQ_PRIM, 103.826174);
        this.OCTAVE_TWO.set(LA_FREQ_PRIM, 116.540940);

        /**The 3 octave notes**/
        this.OCTAVE_THREE = new Map();

        //The withe Notas
        this.OCTAVE_THREE.set(DO_FREQ, 130.812783);
        this.OCTAVE_THREE.set(RE_FREQ, 146.832384);
        this.OCTAVE_THREE.set(MI_FREQ, 164.813778);
        this.OCTAVE_THREE.set(FA_FREQ, 174.614116);
        this.OCTAVE_THREE.set(SOL_FREQ, 195.997718);
        this.OCTAVE_THREE.set(LA_FREQ, 220.000000);
        this.OCTAVE_THREE.set(SI_FREQ, 246.941651);

        //The black Notes
        this.OCTAVE_THREE.set(DO_FREQ_PRIM, 138.591315);
        this.OCTAVE_THREE.set(RE_FREQ_PRIM, 155.563492);
        this.OCTAVE_THREE.set(FA_FREQ_PRIM, 184.997211);
        this.OCTAVE_THREE.set(SOL_FREQ_PRIM, 207.652349);
        this.OCTAVE_THREE.set(LA_FREQ_PRIM, 233.081881);


        /**The 4 octave notes**/
        this.OCTAVE_FOUR = new Map();

        //The withe Notas
        this.OCTAVE_FOUR.set(DO_FREQ, 261.625565);
        this.OCTAVE_FOUR.set(RE_FREQ, 293.664768);
        this.OCTAVE_FOUR.set(MI_FREQ, 329.627557);
        this.OCTAVE_FOUR.set(FA_FREQ, 349.228231);
        this.OCTAVE_FOUR.set(SOL_FREQ, 391.995436);
        this.OCTAVE_FOUR.set(LA_FREQ, 440.000000);
        this.OCTAVE_FOUR.set(SI_FREQ, 493.883301);

        //The black Notes
        this.OCTAVE_FOUR.set(DO_FREQ_PRIM, 277.182631);
        this.OCTAVE_FOUR.set(RE_FREQ_PRIM, 311.126984);
        this.OCTAVE_FOUR.set(FA_FREQ_PRIM, 369.994423);
        this.OCTAVE_FOUR.set(SOL_FREQ_PRIM, 415.304698);
        this.OCTAVE_FOUR.set(LA_FREQ_PRIM, 466.163762);


        /**The 5 octave notes**/
        this.OCTAVE_FIVE = new Map();

        //The withe Notas
        this.OCTAVE_FIVE.set(DO_FREQ, 523.251131);
        this.OCTAVE_FIVE.set(RE_FREQ, 587.329536);
        this.OCTAVE_FIVE.set(MI_FREQ, 659.255114);
        this.OCTAVE_FIVE.set(FA_FREQ,  698.456463);
        this.OCTAVE_FIVE.set(SOL_FREQ, 783.990872);
        this.OCTAVE_FIVE.set(LA_FREQ, 880.000000);
        this.OCTAVE_FIVE.set(SI_FREQ, 987.766603);

        //The black Notes
        this.OCTAVE_FIVE.set(DO_FREQ_PRIM, 554.365262);
        this.OCTAVE_FIVE.set(RE_FREQ_PRIM, 622.253967);
        this.OCTAVE_FIVE.set(FA_FREQ_PRIM, 739.988845);
        this.OCTAVE_FIVE.set(SOL_FREQ_PRIM, 830.609395);
        this.OCTAVE_FIVE.set(LA_FREQ_PRIM, 932.327523);
        
    }

    getNoteFrequency(octave , note){

      if(!octave && typeof(octave) != 'Number' || !note && typeof(note) != 'String') throw new Error('Invalid arguments')

      //type of note according to octave
      switch (octave){

        case 1:
          return this.OCTAVE_ONE.get(note)
          break;
        case 2:
          return this.OCTAVE_TWO.get(note)
          break;
        case 3:
          return this.OCTAVE_THREE.get(note)
          break;
        case 4:
          return this.OCTAVE_FOUR.get(note)
          break;
        case 5:
          return this.OCTAVE_FIVE.get(note)
          break;
        default:
          return null
    }
  }
}
