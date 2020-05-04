import Vue from 'vue'
import Vuex from 'vuex'
import projects from '../data/projects.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    query: '',
    projects: []
  },
  mutations: {
    'SET_PROJECTS' (state, projects) {
      state.projects = projects
    }
  },
  actions: {
    initProjects: ({ commit }) => {
      commit('SET_PROJECTS', projects)
    }
  },
  modules: {
  },
  getters: {
    projects: state => {
      return state.projects
    }
  }
})
