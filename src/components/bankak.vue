<template>
  <div class="container mx-auto px-4">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div
      v-if="$store.state.isUserLoggedIn"
      style="
        padding: 20%;
        margin-top: 16%;
        margin-bottom: 8%;
        border-radius: 5%;
        width: 100%;
      "
      class="overflow-y-hidden dark:bg-gray-900"
    >
      <ul
        role="list"
        class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
      >
        <li>bankak account: 2590671</li>
        <li>bankak name: IBRAHEM ABDALWAHAB MOHAMMED</li>
        <li>bankak branch: abdalah al taib</li>
      </ul>

      <div class="flex justify-center p-2">
        <div class="mb-3 w-96">
          <label
            for="formFile"
            class="form-label inline-block mb-2 text-gray-700"
            style="color: antiquewhite"
            >transaction image</label
          >
          <input
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ref="file"
            @change="uploadImage"
            type="file"
            id="formFile"
          />
        </div>
      </div>
      <label
        for="email"
        class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >send transaction number</label
      >
      <input
        id="email"
        v-model="trnumber"
        style="display: block"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Placeholder"
      />
      <div class="col-auto d-block mx-auto alert alert-danger" v-if="alert">
        {{ alert }}
      </div>
      <div id="preview">
        <img v-if="url" :src="url" />
      </div>
      <button
        v-if="user"
        type="button"
        style="margin: 8%"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="sendorder"
      >
        send
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
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import lognview from "@/views/loginMeddile.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { lognview },
  data() {
    return {
      trnumber: "",
      file: "",
      alert: "",
      url: "",
      user: true,
    };
  },
  methods: {
    uploadImage() {
      this.file = this.$refs.file.files[0];
      const file = this.$refs.file.files[0];
      this.url = URL.createObjectURL(file);
    },
    async sendorder() {
      this.alert = "";
      const order = localStorage.getItem("cart");
      const email = localStorage.getItem("email");
      const userId = localStorage.getItem("userId");
      if (!this.trnumber) {
        this.alert = "please set transaction number";
      } else if (!this.file) {
        this.alert = "please upload image for transaction";
      } else {
        this.user = false;
        try {
          let formData = new FormData();
          formData.append("image", this.file);
          formData.append("orders", order);
          formData.append("trnumber", this.trnumber);
          formData.append("email", email);
          formData.append("userId", userId);
          const response = await AuthenticationServices.addorder(formData);
          if (response.data) {
            this.message = "order send successfully";
            const order = response.data._id;
            this.$router.push(`/order${order}`);
            localStorage.removeItem("cart");
          }
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
