import AuthenticationServices from "@/services/AuthenticationServices";
import Api from "@/services/Api";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {},
  actions: {
    async logins(credentials) {
      let response = await Api().post("/auth/login", credentials);
      console.log(response);
    },
  },
};
