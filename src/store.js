import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    accessToken: localStorage.getItem('access_token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },

    auth_success(state, accessToken, user) {
      state.status = 'success'
      state.accessToken = accessToken
      state.user = user
    },

    auth_error(state) {
      state.status = 'error'
    },

    logout(state) {
      state.status = ''
      state.accessToken = ''
    }
  },
  actions: {
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8000/users', data: user, method: 'POST'})
        .then(resp => {
          const accessToken = resp.data.accessToken
          const user = resp.data.user
          localStorage.setItem('accessToken', accessToken)
          axios.defaults.headers.common['Authorization'] = accessToken
          commit('auth_success', accessToken, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('accessToken')
          reject(err)
        })
      })
    },

    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8000/session', data: user, method: 'POST'})
        .then(resp => {
          const accessToken = resp.data.accessToken
          const user = resp.data.user
          localStorage.setItem('accessToken', accessToken)
          axios.defaults.headers.common['Authorization'] = accessToken
          commit('auth_success', accessToken, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('accessToken')
          reject(err)
        })
      })
    },

    logout({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('accessToken')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.accessToken,
    authStatus: state => state.status
  }
})
