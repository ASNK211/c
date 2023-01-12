<template>
  <div class="mb-16">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div class="relative px-4 sm:px-0">
      <div
        style="padding: 10%"
        class="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"
      >
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full"
          >
            <img
              class="w-11 h-11"
              style=""
              src="./img/Binance-Vertical2-Dark-Background-Logo.wine.svg"
              alt="image description"
            />
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            binance account: 290236894
          </p>
          <p class="font-bold tracking-wide text-gray-800">
            account name: justforyou
          </p>
        </div>
      </div>
      <div class="inline-block p-8 w-full text-center">
        <label for="product_image">Product Images</label>
        <input
          type="file"
          ref="file"
          @change="uploadImage"
          class="p-2 form-control"
        />
      </div>
      <div class="alert alert-success" v-if="message">
        {{ message }}
      </div>
      <div class="col-auto d-block mx-auto alert alert-danger" v-if="alert">
        {{ alert }}
      </div>
      <div id="preview">
        <img v-if="url" :src="url" />
      </div>
      <div class="p-5">
        <button
          v-if="user"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="wallet"
        >
          Buy now
        </button>
        <button
          v-if="!user"
          type="button"
          class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white bg-blue-700"
          disabled=""
        >
          <svg
            class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import lognview from "@/views/loginMeddile.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      amount: "",
      nameproduct: "wallet amount",
      balance: "",
      show: 1,
      file: "",
      alert: "",
      message: "",
      url: "",
      user: true,
    };
  },
  components: { lognview },
  async created() {
    const userId = localStorage.getItem("userId");
    // const response = await AuthenticationServices.getaccount(userId);
    // this.balance = response.data[0].balance;
    // const userId = localStorage.getItem("userId");
    const response = await AuthenticationServices.getUserbalance(
      JSON.parse(userId)
    );
    this.balance = response.data.balance;
  },
  methods: {
    uploadImage() {
      this.file = this.$refs.file.files[0];
      const file = this.$refs.file.files[0];
      this.url = URL.createObjectURL(file);
    },
    async wallet() {
      this.alert = "";
      if (!this.file) {
        this.alert = "please upload image for transaction";
      } else {
        this.user = false;
        try {
          const email = localStorage.getItem("email");
          const userId = localStorage.getItem("userId");
          const order = localStorage.getItem("cart");
          let formData = new FormData();
          formData.append("image", this.file);
          formData.append("orders", order);
          formData.append("email", email);
          formData.append("userId", userId);
          const response = await AuthenticationServices.addorder(formData);
          if (response.data) {
            this.message = "order send successfully";
            const order = response.data._id;
            this.$router.push(`/order${order}`);
            localStorage.removeItem("cart");
          }
          // this.message = response.data.savedAccount
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 50%;
  max-height: 500px;
}
</style>
