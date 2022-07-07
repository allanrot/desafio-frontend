import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const dataState = createPersistedState({
  paths: ['users', 'userDetails']
})

export default new Vuex.Store({
  state: {
    users: [],
    userDetails: {},
  },
  getters: {
    users: state => state.users,
    userDetails: state => state.userDetails,

  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER_DETAILS(state, userDetails) {
      state.userDetails = userDetails;
    }
  },
  actions: {
    getUsers({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('https://reqres.in/api/users')
          .then(response => {
            commit('SET_USERS', response.data.data);
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getUser({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://reqres.in/api/users/${id}`)
          .then(response => {
            commit('SET_USER_DETAILS', response.data.data);
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    createUser({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://reqres.in/api/users', user)
          .then(response => {
            resolve(response.data.data);
          })
          .catch(error => {
            reject(error);
          })
          .finally(() => {
            dispatch('getUsers');
          })
      });
    },
    updateUser({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        axios
          .put(`https://reqres.in/api/users/${user.id}`, user)
          .then(response => {
            resolve(response.data.data);
          })
          .catch(error => {
            reject(error);
          })
          .finally(() => {
            dispatch('getUsers');
          })
      });
    },
    deleteUser({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`https://reqres.in/api/users/${user.id}`)
          .then(response => {
            resolve(response.data.data);
          })
          .catch(error => {
            reject(error);
          })
          .finally(() => {
            dispatch('getUsers');
          })
      });
    }
  },
  modules: {
  },
  plugins: [dataState]
})
