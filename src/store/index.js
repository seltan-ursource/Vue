import Vue from "vue";
import Vuex from "vuex";
import productInfo from "../services/productInfo";
import *as notification from "@/store/modules/notification.js"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: { name: 'Hewlett-Packard' },
    categories: ['Desktop', 'Notebook', 'Gaming']
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    createProduct({ commit }, product) {
      productInfo.postProduct(product)
      commit('ADD_PRODUCT', product)
    }
  },
  modules: {
    notification
  },
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
