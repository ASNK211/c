<template>
  <div class="add-to-cart">
    <button
      type="button"
      @click="AddToCart()"
      style="width: 30%"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      إضافه للسلة
    </button>
  </div>
</template>

<script>
// import { Modal } from "bootstrap";
export default {
  name: "AddToCart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  props: {
    name: String,
    price: String,
    pId: String,
    serial: String,
    image: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productId: this.pId,
        serial: this.serial,
        image: this.image,
        productQuanity: 1,
      },
    };
  },
  methods: {
    AddToCart() {
      this.$store.commit("AddToCart", this.item);
      // let minicart = new Modal(document.getElementById("minicart"), {});
      // minicart.show();
    },
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
button {
  font-family: "Noto Sans Arabic", sans-serif;
}
</style>
