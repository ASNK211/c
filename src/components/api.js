import axios from "axios";
const url = `${process.env.VUE_APP_API_URL}products/`;
// const url2 = "http://localhost:5000/api/products/:id";

export default class API {
  static async getadminProduct() {
    const res = await axios.get(url);
    return res.data;
  }
  static async deleteadminProduct(id) {
    const res = await axios.delete(`${url}${id}`);
    return res.data;
  }
  static async updatedadminProduct(id, data) {
    const res = await axios.put(`${url}/${id}`, data);
    return res.data;
  }
}
