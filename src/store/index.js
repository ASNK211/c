import { createStore } from "vuex";
let cart = window.localStorage.getItem("cart");
export default createStore({
  strict: true,
  state: {
    balance: null,
    token: null,
    user: null,
    isUserLoggedIn: false,
    isAdmin: false,
    cart: cart ? JSON.parse(cart) : [],
    total: 0,
    totalProducts: 0,
  },
  getters: {
    totalPrice: (state) => {
      let total = 0;
      state.cart.filter((item) => {
        total += item.productPrice * item.productQuanity;
      });

      return total;
    },
    totalProduct: (state) => {
      let totalProducts = 0;
      state.cart.filter((item) => {
        totalProducts += item.productQuanity;
      });

      return totalProducts;
    },
    userId: (state) => {
      let userId = 0;
      state.user.filter((item) => {
        userId = item._id;
      });

      return userId;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    userBalance(state, balance) {
      state.balance = balance;
    },
    setUser(state, user) {
      state.user = user;
    },
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
      if (isAdmin) {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    updatetQuanity(state, item) {
      let found = state.cart.find(
        (product) => product.productId == item.productId
      );
      if (found) {
        found.productQuanity = item.productQuanity;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    AddToCart(state, item) {
      let found = state.cart.find(
        (product) => product.productId == item.productId
      );
      if (found) {
        found.productQuanity++;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, item) {
      let iteminindex = state.cart.indexOf(item);
      state.cart.splice(iteminindex, 1);
      this.commit("saveData");
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    updatetQuanity({ commit }, intem) {
      commit("updatetQuanity", intem);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    userBalance({ commit }, balance) {
      commit("userBalance", balance);
    },
    setAdmin({ commit }, isAdmin) {
      commit("setAdmin", isAdmin);
    },
  },
});
