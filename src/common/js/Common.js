/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains all default constant values,
made to contain important const variables and to be manipulate
from this file.

*/

export const Common = {

  Timer  : {

    //Default mesure seconds
    BEATS : 120, //beatsPerSecond
    Second : 60,
    SIGNATURE : 4

  },

  BAR : {

    NOTE: {
      pain: 0,
      velocity: 0,
      release: 0,
      pitch: 0,
      startingTime: 0,
      duration: 1,
      key: "C1",
      octave: 1,
      volume : 1,
      frequency: 3000
    },

    DOMElement: null,
    ID: null //Note used , coz every id is generate dynamicly
  }


}
