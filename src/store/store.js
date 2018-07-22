/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

The file contains all global storage , info for all components.

*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const Store = new Vuex.Store({

  state : {
    barState : new Array(),
    maxNotes : 0, //the highest note number
    maxOctaves : 5
  },

  getters:{

    getBarState : state => { return state.barState },
    getMaxNotes : state => { return state.maxNotes },
    getMaxOctaves : state => { return state.maxOctaves }

  },

  mutations : {

    addMaxNote : (state , heightNotes)=>{ state.maxNotes = heightNotes; },
    addMaxOctaves : (state , octaves)=>{ state.maxOctaves = octaves; },

    //TODO : Structure implementar de otra manera!
    addNewBar : (state , object)=> { state.barState[object.row].push(object.bar) },

  },
});
