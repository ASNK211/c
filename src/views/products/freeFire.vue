<template>
  <div class="bg-gray-100">
    <!-- Remove py-8 -->
    <div class="mx-auto container py-8">
      <div
        class="flex flex-wrap items-center lg:justify-between justify-center"
      >
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <div
          v-for="product in products"
          :key="product._id"
          class="mx-2 w-72 lg:mb-0 mb-8 m-2"
        >
          <div>
            <img
              v-bind:src="`${urlimage}${product.image}`"
              class="w-full h-44"
            />
          </div>
          <div class="bg-white">
            <div
              style="
                font-size: 130%;
                font: xx-large;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              {{ product.title }}
            </div>
            <h3 class="text-xl font-semibold">
              <div style="display: inline-block">ج.س</div>
              {{ product.price }}
            </h3>
            <div class="flex items-center justify-between py-1">
              <h2
                style="width: 100%; position: relative; left: 8px"
                class="text-indigo-700 text-xs font-semibold"
              >
                <AddToCart
                  :p-id="product._id"
                  :price="product.price"
                  :name="product.title"
                  :serial="product.serial"
                  :image="`${urlimage}${product.image}`"
                >
                </AddToCart>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import AddToCart from "@/components/AddToCart.vue";
import LoadingScreen from "@/components/lodingPage.vue";

export default {
  name: "aboutView",
  components: { LoadingScreen, AddToCart },
  data() {
    return {
      products: [],
      id: "",
      isLoading: true,
      urlimage: "",
    };
  },
  async created() {
    this.urlimage = process.env.VUE_APP_IMMAGE_CLIENT;
    this.id = this.$route.params.id;
    const response = await AuthenticationServices.gettadminProduct(this.id);
    this.products = response.data;
    if (this.products) {
      this.isLoading = false;
    }
  },
  mounted() {
    document.title = "products";
  },
};
</script>
<style scoped>
.product-list {
  background-color: rgb(190, 190, 190);
  padding: 3em;
}
.product-list .card {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0px 10px 5px #b2bec3;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.card .title {
  font-size: 18px;
  font-weight: bold;
}
.card img {
  max-width: 100%;
  border-radius: 10px;
}
.card .text {
  text-align: left;
  margin-left: 2em;
  margin-bottom: 0.5em;
  font-size: 12px;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
</style>
