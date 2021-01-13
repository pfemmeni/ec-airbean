import Vue from "vue";
import Vuex from "vuex";
import Modules from "../backend/utils/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showNav: false,
    hideHome: false,
    menuItems: [],
    showModal: false,
    sumOfAllOrders: 0,
    cart: [],
    total: 0,
    orderNumber: "",
    orderETA: "",
    loginInfo: { name: "", email: "" },
    loggedIn: false,
    orderInformation: [],
    date: new Date(),
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
      state.menuItems = [...payload];
    },
    addToCart(state, payload) {
      let addItem = state.menuItems.filter((item) => item.id === payload);
      let amount = { amount: "" };
      let cartObject = { ...addItem[0], ...amount };

      if (state.cart.find((item) => item.id === cartObject.id)) {
        cartObject.amount += 1;
      } else {
        state.total = state.total + cartObject.price;
        state.cart.push(cartObject);
        cartObject.amount += 1;
      }
    },
    showModal(state) {
      state.showModal = !state.showModal;
    },
    arrowUp(state, payload) {
      const addOne = state.cart.find((item) => item.id === payload);

      addOne.amount++;
      state.total = state.total + addOne.price;
    },
    arrowDown(state, payload) {
      const addOne = state.cart.find((item) => item.id === payload);
      if (addOne.amount > 1) {
        addOne.amount--;
        state.total = state.total - addOne.price;
      } else {
        state.cart = state.cart.filter((item) => item.id !== addOne.id);
        state.total = state.total - addOne.price;
      }
    },
    generateOrderNumber(state, payload) {
      state.orderNumber = payload;
    },
    generateETA(state, payload) {
      state.orderETA = payload;
    },
    orderInformation(state) {
      let order = {
        orderNumber: state.orderNumber,
        total: state.total,
        date: state.date.toLocaleDateString(),
      };
      state.sumOfAllOrders = state.sumOfAllOrders + state.total;
      state.orderInformation.push(order);
      state.cart = [];
      state.total = 0;
      state.showModal = false;
      const objectToStore =
        "Ordernummer:" +
        order.orderNumber +
        " - Ordertotal: " +
        order.total +
        " -  Orderdatum:" +
        order.date;

      localStorage.setItem("orderinfo", objectToStore);
    },
    loginName(state, payload) {
      state.loginInfo.name = payload;
      localStorage.setItem("name", state.loginInfo.name);
    },
    loginEmail(state, payload) {
      state.loginInfo.email = payload;
      localStorage.setItem("email", state.loginInfo.email);
    },
    loggedIn(state) {
      localStorage.setItem("email", state.loginInfo.email);
      state.loggedIn = true;
    },
    getName(state) {
      if (localStorage.getItem("name") === null) {
        state.loggedIn = false;
        state.loginInfo.name = localStorage.getItem("name").value;
      } else {
        state.loggedIn = true;
      }
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
    loginName({ commit }, payload) {
      commit("loginName", payload);
    },
    loginEmail({ commit }, payload) {
      commit("loginEmail", payload);
    },
    loggedIn({ commit }) {
      commit("loggedIn");
    },
    async getMenuItems({ commit }) {
      const response = await fetch("http://localhost:5000/api/beans/");
      const body = await response.json();
      commit("getMenuItems", body.menu);
    },
    addToCart(context, payload) {
      context.commit("addToCart", payload);
    },
    cartTotal(context) {
      context.commit("cartTotal");
    },
    cartTotalRemove(context) {
      context.commit("cartTotalRemove");
    },

    arrowUp(context, payload) {
      context.commit("arrowUp", payload);
    },
    arrowDown(context, payload) {
      context.commit("arrowDown", payload);
    },
    async generateOrderNumber(context) {
      const orderNumber = await Modules.generateOrderNr();
      context.commit("generateOrderNumber", orderNumber);
    },
    async generateETA({ commit }) {
      const orderETA = await Modules.generateETA();
      commit("generateETA", orderETA);
    },

    generateOrderInfo(context) {
      context.dispatch("generateETA");
      context.dispatch("generateOrderNumber");
    },
    generateOrderHistory(context) {
      context.commit("orderInformation");
    },
    getName(context) {
      context.commit("getName");
    },
  },

  modules: {},
});
