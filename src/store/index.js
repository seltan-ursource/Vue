import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: { id: 'abc123', name: 'Hewlett-Packard' },
    categories: ['Desktop', 'Notebook', 'Gaming']
  },
  mutations: {},
  actions: {},
  modules: {},
  getters:{
    categoryLeagth : state => {
      return state.categories.length
    },
    doneTodos : state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state) => {
      return state.todos.filter(todo => !todo.done).length
    }
  }
});
