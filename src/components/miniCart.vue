<template>
  <div class="minicart">
    <!-- Modal -->
    <div
      class="modal fade"
      id="minicart"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div style="width: 100%; height: 300px; overflow: auto">
            <table
              class="table"
              cellspacing="0"
              cellpadding="1"
              border="1"
              width="300"
            >
              <tbody>
                <tr v-for="item in this.$store.state.cart" :key="item">
                  <td class="cartimage">
                    <img :src="item.image" :alt="path" />
                  </td>
                  <td>{{ item.productName }}</td>
                  <td>${{ item.productPrice }} x {{ item.productQuanity }}</td>
                  <td>
                    <span
                      class="flot-right"
                      @click="$store.commit('removeFromCart', item)"
                      >x</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-body">
            <p style="font-size: large; color: #4488dd">
              Total Price : £ {{ this.$store.getters.totalPrice }}.00
            </p>
          </div>
          <div class="modal-footer">
            <button
              data-bs-dismiss="modal"
              @click="Checkout()"
              to="/Checkout"
              class="btn btn-primary"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniCart",
  props: {
    msg: String,
  },
  methods: {
    removeItem() {},
    Checkout() {
      this.$router.push("/Checkout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-62 {
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}
.modal-body {
  border-top: 1px solid rgb(197, 191, 191);
}
.table tbody td {
  border: none;
}
.table tbody {
  border: none;
}
.cartimage {
  width: 25%;
  height: 10;
}
.cartimage img {
  display: flex;
  width: 100%;
  border-radius: 10px;
  size: 10%;
}
</style>
