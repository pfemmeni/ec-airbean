import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showNav: false,
    hideHome: false,
    menuItems: [],
    cart: [],
    count: 1,
    showModal: false,
  },
  mutations: {
    showNav(state) {
      state.showNav = true;
    },
    hideNav(state) {
      state.showNav = false;
      state.hideHome = true;
    },
    getMenuItems(state, payload) {
      state.menuItems.push(payload);
    },
    addToCart(state, payload) {
      let addItem = state.menuItems.filter((item) => item.id === payload);
      console.log(addItem, "add");
      state.cart.push(addItem);
      console.log(state.cart[0], "cart");
    },
    showModal(state) {
      state.showModal = !state.showModal;
    },
    arrowUp(state) {
      state.count++;
    },
    arrowDown(state) {
      state.count--;
    },
  },
  actions: {
    showNav({ commit }) {
      commit("showNav");
    },
    hideNav({ commit }) {
      commit("hideNav");
    },
    showModal({ commit }) {
      commit("showModal");
    },
    async getMenuItems(context) {
      const response = await fetch("http://localhost:5000/api/beans/");
      const body = await response.json();
      context.commit("getMenuItems", body.menu);
    },
    addToCart(context, payload) {
      context.commit("addToCart", payload);
      console.log(payload);
    },
    arrowUp(context) {
      context.commit("arrowUp");
    },
    arrowDown(context) {
      context.commit("arrowDown");
    },
  },
  modules: {},
});
