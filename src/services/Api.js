import axios from "axios";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
};

const Baseurl = process.env.VUE_APP_API_URL;
const token = localStorage.token;
// axios.defaults.withCredentials = true;
export const puplicRequest = axios.create({
  baseURL: Baseurl,
});
export const userRequest = axios.create({
  baseURL: Baseurl,
  headers: { token: `Bearer ${token}` },
});
