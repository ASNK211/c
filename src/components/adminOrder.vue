<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>orderId</th>
          <th>email</th>
          <th>quantity</th>
          <th>product Name</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in displayorders" :key="order._id">
          <td>{{ order.orderNumber }}</td>
          <td>{{ order.email }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.nameproduct }}</td>
          <td>
            <router-link :to="`adminOrder/${order._id}`" class="btn btn-primary"
              >order</router-link
            >
            <button class="btn btn-danger">delete</button>
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
// import orderAdmin from "@/components/orderAdmin.vue";
export default {
  name: "HelloWorld",
  // components: { orderAdmin },
  data() {
    return {
      orders: [],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async created() {
    const response = await AuthenticationServices.getadminOrder();
    this.orders = response.data;
  },
  methods: {
    paginate(orders) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return orders.slice(from, to);
    },
    setorders() {
      let numberOfPages = Math.ceil(this.orders.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
        console.log("ff", i);
      }
    },
  },
  computed: {
    displayorders() {
      return this.paginate(this.orders);
    },
  },
  watch: {
    orders() {
      this.setorders();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
