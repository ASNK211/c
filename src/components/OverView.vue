<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="Product title"
        v-model="title"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        placeholder="Product price"
        v-model="price"
        class="form-control"
      />
    </div>
    <button
      @click="updateProduct(product._id)"
      type="button"
      class="btn btn-primary"
    >
      Apply changes
    </button>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";

export default {
  name: " OverView ",
  data() {
    return {
      products: [],
      product: { price: "", title: "" },
      activeItem: null,
    };
  },
  async created() {
    const response = await AuthenticationServices.updatedadminProduct();
    this.product = response.data;
  },
  methods: {
    async updateProduct(_id) {
      await AuthenticationServices.updatedadminProduct(_id);
      // this.product = response.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
