import axios from 'axios'

export default {
  namespaced: true,

  state: {
    items: []
  },
  getters: {

  },
  actions: {
    fetchCategories ({state, commit}) {
      axios.get('/api/v1/categories')
        .then(res => {
          const categories = res.data
          commit('setItems', {resource: 'categories', items: categories}, {root: true})
          return state.categories
        })
    }
  },
  mutations: {

  }
}