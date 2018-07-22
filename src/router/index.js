/*

Author Stephen Appiah
Date  3/06/2018
Nickname MonsterCrod

This file contains default routes

*/
import Vue from 'vue'
import Router from 'vue-router'
import Piano from './../components/default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Piano
    }
  ]
})
