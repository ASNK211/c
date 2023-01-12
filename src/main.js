import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "./sass/main.scss";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "@popperjs/core";
import GAuth from "vue3-google-oauth2";
import Paginate from "vuejs-paginate-next";
import "./styles/app.css";
// import dotenv from 'dotenv' //
// dotenv.config()

const app = createApp(App);
let gauthClintId =
  "285542797384-vkvuagetjrov7dhk0tq7v4bta1oal4ns.apps.googleusercontent.com";

const gAuthOptions = {
  clientId: gauthClintId,
  scope: "email",
  prompt: "consent",
};
/* eslint-disable-next-line */
app.component("Paginate", Paginate);
app.use(GAuth, gAuthOptions);

store.dispatch("setToken", localStorage.getItem("token"));
store.dispatch("setAdmin", localStorage.getItem("isAdmin"));

app.use(store).use(router).mount("#app");
