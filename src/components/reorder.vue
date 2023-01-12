<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>productId</th>
          <th>image</th>
          <th>price</th>
          <th>Modify</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="reorder in displayreorders" :key="reorder.orderId">
          <td>{{ reorder.productName }}</td>
          <td>{{ reorder.productQuanity }}</td>
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
      reorders: [],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async created() {
    const response = await AuthenticationServices.getallautoserial();
    this.reorders = response.data;
  },
  methods: {
    paginate(reorders) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return reorders.slice(from, to);
    },
    setreorders() {
      let numberOfPages = Math.ceil(this.reorders.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
        console.log("ff", i);
      }
    },
  },
  computed: {
    displayreorders() {
      return this.paginate(this.reorders);
    },
  },
  watch: {
    reorders() {
      this.setreorders();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
