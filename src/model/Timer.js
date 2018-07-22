/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains all timer properties.

Tempo = BPM = Beats Per Minute
BPM/60 = Beats Per Second (ex. 120 BPM = 2 beats per second)
1 second / Beats Per Second = Length of a Beat in seconds (i.e. 1 beat at 120 BPM is 0.5 seconds)
Length of Beat per Second * number of beats in note = length of note in seconds (whole note at 120 BPM is 2 seconds)

*/

import { Common } from './../common/js/Common'


export class Timer {

  constructor(){

    this.signature = Common.Timer.SIGNATURE
    this.beat =  Common.Timer.BEATS
    this.tempo = this.beat / Common.Timer.Second

    this.length_of_beat = Common.Timer.Second  / this.beat
    this.length_of_note = this.signature  * this.length_of_beat

    this.requestAnimationFrame = null

    console.log(this);

  }

}
