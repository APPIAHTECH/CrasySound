/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains common Utilities functions

*/

import CryptoJS from 'crypto-js';
const key = "secret key 123" , msg = "CrasySound";

export default class Utilities {

  static preventDefaultAction(event){

    if(event.preventDefault) event.preventDefault()
    else
      event.returnValue = false
  }

  static hashKey(newMsg){
    return CryptoJS.AES.encrypt(newMsg || msg , key)
  }

  static decrypt(ciphertext){
    let bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), key)
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedData
  }

  static setSetateBarArray(object){

      let arr = new Array()

      for (let i = 0 ; i < object.rows; i++) {
      arr[i]=new Array()

      for (let j = 0; j < object.cols; j++)
      arr[i][j] = 0
    }

    return arr
  }
}
