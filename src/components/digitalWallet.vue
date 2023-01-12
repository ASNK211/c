<template>
  <div class="mb-16">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div class="bg-gray-100">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <div>
            <p
              class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
            >
              رصيدك الحالي
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          >
            <div style="display: inline-block">ج.س</div>
            {{ balance }}
          </h2>
          <p class="text-base text-gray-700 md:text-lg"></p>
        </div>
        <div class="flex items-center sm:justify-center">
          <router-link to="addbalance" class="nav-link">
            <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              + إضافة رصيد
            </button>
          </router-link>

          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >ارجع للتسوق</a
          >
        </div>
      </div>
    </div>
    <!-- <div class="relative px-4 sm:px-0">
      <div class="absolute inset-0 bg-gray-100 h-1/2"></div>
      <div class="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Make it better</p>
        </div>
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Do it faster</p>
        </div>
        <div class="inline-block p-8 text-center">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Working harder</p>
        </div>
      </div>
    </div> -->
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
    async wallet() {
      // this.$store.commit("AddToCart", this.item);
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      await AuthenticationServices.account({
        userId: userId,
        amount: this.amount,
        nameproduct: this.nameproduct,
        email: email,
      });
    },
  },
  mounted() {
    document.title = "wallet";
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
.mb-16 {
  font-family: "Noto Sans Arabic", sans-serif;
}
button {
  margin: 6%;
}
/* From uiverse.io by @shah1345 */
.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  right: 20%;
  overflow: hidden;
  z-index: 1;
  color: #ff1d5e;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  border: #009087 1px solid;
  background: #2f263d;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.button2:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.wallet {
  display: flex;
  justify-content: center;
}
.balance {
  position: relative;
  left: 30%;
  bottom: 100px;
  height: 20%;
  width: 200px;
  border-radius: 0.5em;
  background-color: #ffffff;
}
span {
  position: relative;
  top: 5px;
}
.digital {
  border-radius: 1.5em;
  background-color: rgb(221, 219, 219);
  display: flex;
  justify-content: center;
  position: relative;
  margin: 5%;
  // width: 50%;
  // height: 100%;
  padding: 10%;
}
.group {
  position: relative;
  bottom: 25px;
  right: 30px;
}
input {
  position: relative;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  right: 20%;
  border: none !important;
}
// label {
//   color: #999;
//   font-size: 18px;
//   font-weight: normal;
//   position: absolute;
//   pointer-events: none;
//   left: 5px;
//   top: 10px;
//   transition: 0.2s ease all;
//   -moz-transition: 0.2s ease all;
//   -webkit-transition: 0.2s ease all;
// }

input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease !important;
  -moz-animation: inputHighlighter 0.3s ease !important;
  animation: inputHighlighter 0.3s ease !important;
}
</style>
