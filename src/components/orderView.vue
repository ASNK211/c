<template>
  <div>
    <lognview v-if="!$store.state.isUserLoggedIn"> </lognview>
    <div v-if="$store.state.isUserLoggedIn">
      <div>
        <ul class="namepage">
          <li :to="Home" class="home">
            <router-link class="link" :to="{ name: 'Home' }">Home/</router-link>
          </li>
          <li>order</li>
        </ul>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">رقم الطلب</th>
            <th scope="col">الحاله</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in displayorders" :key="order._id">
            <th scope="row">{{ order.orderNumber }}</th>
            <td>{{ order.status }}</td>
            <td>
              <router-link :to="`order${order._id}`" class="btn btn-primary"
                >view</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <paginate
          v-model="page"
          :page-count="pages.length"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </nav>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import lognview from "@/views/loginMeddile.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      orders: [],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  components: { lognview },
  async created() {
    const userId = localStorage.getItem("userId");
    const response = await AuthenticationServices.getorder(userId);
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
  mounted() {
    document.title = "order";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
div {
  font-family: "Noto Sans Arabic", sans-serif;
}

.namepage {
  list-style: none;
  display: flex;
  border-bottom: 1px solid rgb(197, 191, 191);
}
@media screen and (max-width: 700px) {
  .namepage {
    margin: 10%;
  }
}
.namepage li {
  font-size: 300;
  color: rgb(155, 155, 155);
}
.link {
  text-decoration: none !important;
  color: rgb(155, 155, 155);
}
</style>
