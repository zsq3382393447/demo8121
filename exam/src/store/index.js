import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    key:'data',
    storage:window.sessionStorage
  })],
})
