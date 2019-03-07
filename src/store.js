import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentJWT: '' || localStorage.getItem('accessToken')
  },
  mutations: {
    setJWT(state, jwt) {
      state.currentJWT = jwt
    }
  },
  actions: {
    async login({commit, state}, {username, password}) {
      const res = await axios.post('https://recruitment-backend.herokuapp.com/session', {username, password})
      commit('setJWT', await res.data.accessToken)
      localStorage.setItem('accessToken', state.currentJWT)
    },

    logout({commit}) {
      commit('setJWT', '')
      localStorage.removeItem('accessToken')
    }
  },
  getters: {
    jwt: state => state.currentJWT,
    jwtData: (state, getters) => state.currentJWT ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtRole: (state, getters) => getters.jwtData ? getters.jwtData.role : null,
    isLoggedIn: state => !!state.currentJWT,
    isApplicant: (state, getters) => getters.jwtRole === 'applicant'
  }
})
