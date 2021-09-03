import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    lang: localStorage.getItem('lang') || 'zh',
    user: "",
    phone: "",
    head: "",
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getLang(state) {
      return state.lang
    },
    getUser(state) {
      return state.user
    },
    getPhone(state) {
      return state.phone
    },
    getHead(state) {
      return state.head
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setLang(state, lang) {
      state.lang = lang
    },
    setUser(state, user) {
      state.user = user
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setHead(state, head) {
      state.head = head
    }
  },
  actions: {
  },
  modules: {
  }
})
