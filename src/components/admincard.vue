<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>name</th>
          <th>image</th>
          <th>price</th>
          <th>Modify</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in displayproducts" :key="product._id">
          <td>{{ product.title }}</td>
          <td style="width: 25%">
            <img
              style="width: 100%"
              :src="`http://zoolgame.com/uploads/${product.image}`"
              alt=""
            />
          </td>
          <td>${{ product.price }}</td>
          <td>
            <router-link :to="`card/${product._id}`" class="btn btn-primary"
              >order</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <paginate
      v-model="page"
      :page-count="pages.length"
      :page-range="5"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: { price: "", title: "", image: "" },
      activeItem: null,
      file: "",
      id: "",
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async created() {
    const response = await AuthenticationServices.getalladminProduct();
    this.products = response.data.products;
  },
  methods: {
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setproducts() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
        console.log("ff", i);
      }
    },
  },
  computed: {
    displayproducts() {
      return this.paginate(this.products);
    },
  },
  watch: {
    products() {
      this.setproducts();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
