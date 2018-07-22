/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains the main features and init
*/

import Vue from 'vue'
import App from './App'
import router from './router'
import {Store} from "./store/store"


// Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store : Store,
  router,
  components: { App },
  template: '<App/>'
});
