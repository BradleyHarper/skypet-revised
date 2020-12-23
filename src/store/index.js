import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: "baldly", registered: false}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
