<template>
  <div class="mb-16">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div class="bg-gray-100">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col md:mr-16">
          <div>اكتب كمية الرصيد تحت هنا</div>
          <div class="relative">
            <div
              class="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer"
            >
              £
            </div>
            <input
              v-model="amount"
              id="number"
              class="text-gray-600 dark:text-gray-800 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
              placeholder="balance"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="relative px-4 sm:px-0">
      <div class="absolute inset-0 bg-gray-100 h-1/2"></div>
      <div
        class="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"
      >
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full"
          >
            <img
              class="w-11 h-11"
              style=""
              src="@/views/productsimg/index.jpeg"
              alt="image description"
            />
          </div>

          <p class="font-bold tracking-wide text-gray-800">
            حساب بنكك: 2590671
          </p>
          <p class="font-bold tracking-wide text-gray-800">
            اسم الحساب: ابراهيم عبدالوهاب محمد
          </p>
          <p class="font-bold tracking-wide text-gray-800">
            الفرع: عبدالله الطيب
          </p>
        </div>
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full"
          >
            <img
              class=""
              style=""
              src="./img/Fawry.png"
              alt="image description"
            />
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            حساب فوري : 51231286
          </p>
          <p class="font-bold tracking-wide text-gray-800">
            اسم الحساب: ابراهيم عبدالوهاب محمد
          </p>
        </div>
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
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full"
          >
            <img
              class=""
              style=""
              src="./img/index.png"
              alt="image description"
            />
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            payeer account: P1057109786
          </p>
        </div>
      </div>
      <div class="inline-block p-8 w-full text-center">
        <label for="product_image">قم برفع اشعار التحويل تحت</label>
        <input
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          ref="file"
          @change="uploadImage"
          type="file"
          id="formFile"
        />
      </div>
      <div id="preview">
        <img v-if="url" :src="url" />
      </div>
      <div class="alert alert-success" v-if="message">
        {{ message }}
      </div>
      <div class="col-auto d-block mx-auto alert alert-danger" v-if="alert">
        {{ alert }}
      </div>
      <div class="p-5">
        <button
          v-if="user"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="wallet"
        >
          اشتري الان
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
          ... يتم الدفع
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
      const email = localStorage.getItem("email");
      const userId = localStorage.getItem("userId");
      if (!this.amount) {
        this.alert = "من فضلك قم ب اضافة الرصيد";
      } else if (!this.file) {
        this.alert = "من فضلك ارفع اشعار التحويل";
      }
      if (this.file && this.amount && this.nameproduct) {
        this.user = false;
        try {
          let formData = new FormData();
          formData.append("image", this.file);
          formData.append("userId", userId);
          formData.append("amount", this.amount);
          formData.append("email", email);
          formData.append("nameproduct", this.nameproduct);
          const response = await AuthenticationServices.account(formData);
          if (response.data.savedAccount) {
            this.message = "order send successfully";
            const order = response.data.savedAccount._id;
            this.$router.push(`/order${order}`);
          }
          // this.message = response.data.savedAccount
        } catch (error) {
          this.error = error.response.data.error;
        }
      }

      // this.$store.commit("AddToCart", this.item);
      // const userId = localStorage.getItem("userId");
      // const email = localStorage.getItem("email");
      // await AuthenticationServices.account({
      //   userId: userId,
      //   amount: this.amount,
      //   nameproduct: this.nameproduct,
      //   email: email,
      // });
    },
  },
  mounted() {
    document.title = "add balance";
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
.mb-16 {
  font-family: "Noto Sans Arabic", sans-serif;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>
