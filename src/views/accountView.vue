<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "accountView",
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
    pp: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productId: this.pId,
        serial: this.serial,
        image: this.image,
        productQuanity: "" || this.pp,
      },
      alert: "",
    };
  },
  methods: {
    AddToCart() {
      const Quanity = this.item.productQuanity;
      if (Quanity <= 0) {
        this.alert = "Quantity must be at least 1.";
      } else {
        this.alert = "";
        this.$store.commit("updatetQuanity", this.item);
      }
    },
  },
};
</script>
