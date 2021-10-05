import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    lang: localStorage.getItem('lang') || 'zh',
    username: "",
    phonenumber: "",
    avatar: "",
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getLang(state) {
      return state.lang
    },
    getUserName(state) {
      return state.username
    },
    getPhoneNumber(state) {
      return state.phonenumber
    },
    getAvatar(state) {
      return state.avatar
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setLang(state, lang) {
      state.lang = lang
    },
    setUserName(state, username) {
      state.username = username
    },
    setPhoneNumber(state, phonenumber) {
      state.phonenumber = phonenumber
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
    }
  },
  actions: {
  },
  modules: {
  }
})
