/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains all bar properties,
how does the bar is define.

*/

import Util from './../common/js/Utilities'
import {Common} from './../common/js/Common'

export default class Bar {

  constructor(){

    this.propertie = Common.BAR.NOTE
    this.ID = Util.hashKey('newBar!').ciphertext.words[0] //generates a CryptoJS.AES key for the bar
    this.DOMElement = Common.BAR.DOMElement //asocieted dom element

  }

  getProperie(){ return this.propertie }

  getID(){ return parseInt(this.ID) }

  getDomElement(){ return this.DOMElement }

  setNewBarNoteProperie(notePropertie){ if(notePropertie) this.propertie = notePropertie }

}
