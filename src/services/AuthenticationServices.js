import Api from "@/services/Api";

const token = localStorage.token;
export default {
  register(credentials) {
    return Api().post("/auth/register", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  login(credentials) {
    return Api().post("/auth/login", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getUser(id, credentials) {
    return Api().get(`users/find/${id}`, credentials);
  },
  getAllUsers() {
    return Api().get("users/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  dleteadminUser(id) {
    return Api().delete(`users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  adminProduct(credentials) {
    return Api().post("products/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getadminProduct(credentials) {
    return Api().get("products/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getalladminProduct() {
    return Api().get("products/allproduct", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  gettadminProduct(id) {
    return Api().get(`products/find/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  dleteadminProduct(id) {
    return Api().delete(`products/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  updatedadminProduct(id, credentials) {
    return Api().put(`products/${id}`, credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  intproduct(credentials) {
    return Api().post("intproducts/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getintproduct(credentials) {
    return Api().get("intproducts/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  updaateint(id, credentials) {
    return Api().put(`intproducts/${id}`, credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  deleteintproduct(id) {
    return Api().delete(`intproducts/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  addorder(credentials) {
    return Api().post("orders/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getorder(id) {
    return Api().get(`orders/find/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getorderone(id) {
    return Api().get(`orders/finda/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getadminOrder() {
    return Api().get("orders/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getProduct(id, credentials) {
    return Api().get(`products/find/${id}`, credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  account(credentials) {
    return Api().post("accounts/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getaccount(id, credentials) {
    return Api().get(`accounts/find/${id}`, credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getorderoneup(id, credentials) {
    return Api().put(`orders/${id}`, credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  serial(credentials) {
    return Api().post("serials/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  autoserial(id) {
    return Api().get(`autoserial/find/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getallautoserial() {
    return Api().get(`autoserial/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getserial(id) {
    return Api().get(`serials/find/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  activatedUser(credentials) {
    return Api().post("auth/register/activated", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  resetUser(credentials) {
    return Api().put("auth/forgot/password", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  changeUserpassword(credentials) {
    return Api().put("auth/changepassword", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  walletUser(credentials) {
    return Api().put("/wallet/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getUsersbalance() {
    return Api().get("/wallet/getbalance", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  debtUsersbalance(credentials) {
    return Api().post("/wallet/debt", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  crdetUsersbalance(credentials) {
    return Api().post("/wallet/crdet", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getUserbalance(id) {
    return Api().get(`/wallet/find/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  usergetway(credentials) {
    return Api().post("/getway/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  admingetway(credentials) {
    return Api().post("/getway/admin", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  admincard(credentials) {
    return Api().post("/card/", credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getadmincard(id) {
    return Api().get(`/card/getadmincard/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  googlelogout() {
    return Api().get(`/logout`);
  },
};
