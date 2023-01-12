<template>
  <body class="overflow-y-hidden dark:bg-gray-900">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div
      class="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20"
      v-if="$store.state.isUserLoggedIn"
    >
      <div
        class="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8"
      >
        <div
          class="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full"
        >
          <h3
            class="text-3xl xl:text-4xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800"
          >
            الدفع
          </h3>
          <p class="text-base leading-none dark:text-white mt-4 text-gray-800">
            اختر من طرق الدفع تحت
          </p>
          <div
            class="flex justify-center items-center w-full mt-8 flex-col space-y-4"
            v-for="item in this.$store.state.cart"
            :key="item"
          >
            <div
              class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full"
            >
              <div class="-m-px w-40 md:w-32">
                <img
                  class="hidden md:block"
                  :src="item.image"
                  alt="girl-in-white-dress"
                />
                <img
                  class="md:hidden"
                  style="border-radius: 0.5rem; height: 100%"
                  :src="item.image"
                  alt="your item"
                />
              </div>
              <div
                class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8"
              >
                <div
                  class="flex flex-col md:flex-shrink-0 justify-start items-start"
                >
                  <h3
                    class="text-lg md:text-xl dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800"
                  >
                    {{ item.productName }}
                  </h3>
                  <div
                    class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4"
                  >
                    <div
                      class="text-sm leading-none dark:text-gray-300 text-gray-600"
                    >
                      Quantity:
                      <span class="text-gray-800 dark:text-white">
                        {{ item.productQuanity }}</span
                      >
                      <AddToCart
                        :p-id="item.productId"
                        :pp="item.productQuanity"
                      ></AddToCart>
                    </div>
                  </div>
                </div>
                <div
                  class="flex mt-4 md:mt-0 md:justify-end items-center w-full"
                >
                  <p
                    class="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800"
                  >
                    £: {{ item.productPrice }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full"
          >
            <div
              class="flex justify-start items-start flex-col md:flex-row w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8 lg:w-full"
            >
              <div>
                <input
                  type="radio"
                  id="flowbite-option"
                  value="bankak"
                  class="hidden peer"
                  v-model="picked"
                />
                <label
                  for="flowbite-option"
                  class="inline-flex justify-between items-center p-5 h-8 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <img
                      class="w-11 h-11"
                      style="
                        border-radius: 8%;
                        position: relative;
                        right: 30px;
                        top: 23px;
                      "
                      src="./productsimg/index.jpeg"
                      alt="image description"
                    />
                    <div
                      class="w-full text-lg font-semibold"
                      style="position: relative; left: 13px; bottom: 14px"
                    >
                      بنكك
                    </div>
                    <div class="w-full text-sm">بنك الخرطوم</div>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="angular-option"
                  value="wallet"
                  class="hidden peer"
                  v-model="picked"
                />
                <label
                  for="angular-option"
                  class="inline-flex justify-between items-center p-5 h-8 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <svg
                      class="h-8 w-8 text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style="
                        border-radius: 8%;
                        position: relative;
                        right: 30px;
                        top: 15px;
                      "
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                      />
                      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                    </svg>
                    <div
                      class="w-full text-lg font-semibold"
                      style="position: relative; right: 22px; bottom: 14px"
                    >
                      المحفظه
                    </div>
                    <div style="position: relative; right: 40px; bottom: 14px">
                      رصيدك الحالي: {{ this.$store.state.balance }}
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="react-option"
                  value="binance"
                  class="hidden peer"
                  v-model="picked"
                />
                <label
                  for="react-option"
                  class="inline-flex justify-between items-center p-5 h-8 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <img
                      class="w-11 h-11"
                      style="
                        border-radius: 8%;
                        position: relative;
                        right: 30px;
                        top: 15px;
                      "
                      src="../components/img/Binance-Vertical2-Dark-Background-Logo.wine.svg"
                      alt="image description"
                    />
                    <div
                      class="w-full text-lg font-semibold"
                      style="position: relative; left: 22px; bottom: 20px"
                    >
                      binance
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="reac-option"
                  value="payeer"
                  class="hidden peer"
                  v-model="picked"
                />
                <label
                  for="reac-option"
                  class="inline-flex justify-between items-center p-5 h-8 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <img
                      class="w-11 h-11"
                      style="
                        border-radius: 8%;
                        position: relative;
                        right: 30px;
                        top: 15px;
                        width: 100%;
                      "
                      src="../components/img/f646307ee26d1a714e1cae84fb58aa49.jpg"
                      alt="image description"
                    />
                    <div
                      class="w-full text-lg font-semibold"
                      style="position: relative; left: 45px; bottom: 20px"
                    >
                      payeer
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="reac-optio"
                  value="Fawry"
                  class="hidden peer"
                  v-model="picked"
                />
                <label
                  for="reac-optio"
                  class="inline-flex justify-between items-center p-5 h-8 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <img
                      class="w-11 h-11"
                      style="
                        border-radius: 8%;
                        position: relative;
                        right: 30px;
                        top: 15px;
                        width: 100%;
                      "
                      src="../components/img/Fawry.png"
                      alt="image description"
                    />
                    <div
                      class="w-full text-lg font-semibold"
                      style="position: relative; left: 45px; bottom: 20px"
                    >
                      فوري
                    </div>
                  </div>
                </label>
              </div>
              <div
                class="col-auto d-block mx-auto alert alert-success"
                v-if="success"
              >
                {{ success }}
              </div>
            </div>
            <div class="flex flex-col w-full space-y-4 w-full">
              <div class="flex justify-between items-center w-full">
                <p
                  class="text-base dark:text-white font-semibold leading-4 text-gray-800"
                >
                  £: {{ this.$store.getters.totalPrice }}.00
                </p>
                <p
                  class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"
                >
                  الاجمالي
                </p>
              </div>
              <div
                class="flex w-full justify-center items-center pt-1 md:pt-4 xl:pt-8 space-y-6 md:space-y-8 flex-col"
              >
                <div>
                  <button
                    v-if="user"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="buy"
                  >
                    <svg
                      aria-hidden="true"
                      class="mr-2 -ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      ></path>
                    </svg>
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
                {{ alert }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import AddToCart from "./cartView.vue";
import lognview from "./loginMeddile.vue";
export default {
  name: "HelloWorld",
  components: { lognview, AddToCart },
  data() {
    return {
      dddd: [],
      picked: "",
      alert: "",
      error: "",
      success: "",
      user: true,
    };
  },
  methods: {
    async buy() {
      this.user = false;
      const cc = this.picked;
      if (cc === "wallet") {
        const userId = localStorage.getItem("userId");
        const order = localStorage.getItem("cart");
        const email = localStorage.getItem("email");
        // for (match in matches){
        //   print(match)
        // }
        // resd.map(async (elment) => {
        //            console.log(elment.productQuanity)
        //            if (elment.productQuanity == 0) {
        //             console.log(zero)
        //             return
        //            }
        //         })
        try {
          const response = await AuthenticationServices.usergetway({
            userId: userId,
            orders: JSON.parse(order),
            email: email,
          });
          this.success = response.data.message;
          if (response.data.OrderId) {
            const order = response.data.OrderId;
            this.$router.push(`/order${order}`).then(() => {
              window.location.reload();
            });
            localStorage.removeItem("cart");
          }
        } catch (error) {
          this.error = error.response.data.error;
        }
      } else if (cc === "bankak") {
        const dd = this.picked;
        this.$router.push(`/${dd}`);
      } else if (cc === "binance") {
        const dd = this.picked;
        this.$router.push(`/${dd}`);
      } else {
        const dd = this.picked;
        this.$router.push(`/${dd}`);
      }
    },
  },
  mounted() {
    document.title = "Checkout";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
body {
  font-family: "Noto Sans Arabic", sans-serif;
}
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.number-input {
  border: 2px solid #ddd;
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  background-color: #eeeeee;
  border: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  cursor: pointer;
  margin: 0;
  position: relative;
  padding: 0;
}

.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 2px;
  background-color: #212121;
  transform: translate(-50%, -50%);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type="number"] {
  font-family: sans-serif;
  max-width: 2.5rem;
  padding: 0.1rem;
  border: 0;
  text-align: center;
  outline: none;
}
.number-input {
  border: solid #c2c4c6;
  border-width: 2px;
}
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
body,
html {
  height: 100%;
  margin: 0;
  font-family: lato;
}

h2 {
  margin-bottom: 0px;
  margin-top: 25px;
  text-align: center;
  font-weight: 200;
  font-size: 19px;
  font-size: 1.2rem;
}
.container {
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background: -webkit-linear-gradient(#c5e5e5, #ccddf9);
  background: linear-gradient(#c9e5e9, #ccddf9);
}
.dropdown-select.visible {
  display: block;
}
.dropdown {
  position: relative;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  padding-left: 10px;
  cursor: pointer;
}
ul li:hover {
  background: rgba(255, 255, 255, 0.1);
}
.dropdown-select {
  position: absolute;
  background: #77aaee;
  text-align: left;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 90%;
  left: 2px;
  line-height: 2em;
  margin-top: 2px;
  box-sizing: border-box;
}
.thin {
  font-weight: 400;
}
.small {
  font-size: 12px;
  font-size: 0.8rem;
}
.half-input-table {
  border-collapse: collapse;
  width: 100%;
}
.half-input-table td:first-of-type {
  border-right: 10px solid #4488dd;
  width: 50%;
}
.window {
  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  z-index: 10;
}
.order-info {
  height: 100%;
  width: 50%;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
.price {
  bottom: 0px;
  position: absolute;
  right: 0px;
  color: #4488dd;
}
.order-table td:first-of-type {
  width: 25%;
}
.order-table {
  position: relative;
}
.line {
  height: 1px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #ddd;
}
.order-table td:last-of-type {
  vertical-align: top;
  padding-left: 25px;
}
.order-info-content {
  table-layout: fixed;
}

.full-width {
  width: 100%;
}
.pay-btn {
  border: none;
  background: #22b877;
  line-height: 2em;
  border-radius: 10px;
  font-size: 19px;
  font-size: 1.2rem;
  color: #fff;
  // cursor: pointer;
  // position: absolute;
  // bottom: 25px;
  // width: calc(100% - 50px);
  // -webkit-transition: all 0.2s ease;
  // transition: all 0.2s ease;
}
.pay-btn:hover {
  background: #22a877;
  color: #eee;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.total {
  margin-top: 25px;
  font-size: 20px;
  font-size: 1.3rem;
  position: absolute;
  bottom: 30px;
  right: 27px;
  left: 35px;
}
.dense {
  line-height: 1.2em;
  font-size: 16px;
  font-size: 1rem;
}
.input-field {
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  margin-top: 3px;
  line-height: 1.5em;
  font-size: 20px;
  font-size: 1.3rem;
  border: none;
  padding: 5px 10px 5px 10px;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.credit-info {
  background: #4488dd;
  height: 100%;
  width: 50%;
  color: #eee;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  font-size: 0.9rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
}
.dropdown-btn {
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5em;
  cursor: pointer;
  position: relative;
  -webkit-transition: background 0.2s ease;
  transition: background 0.2s ease;
}
.dropdown-btn:after {
  content: "\25BE";
  right: 8px;
  position: absolute;
}
.dropdown-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  -webkit-transition: background 0.2s ease;
  transition: background 0.2s ease;
}
.dropdown-select {
  display: none;
}
.credit-card-image {
  display: block;
  max-height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  margin-bottom: 15px;
}
.credit-info-content {
  margin-top: 25px;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
@media (max-width: 600px) {
  .window {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0px;
  }
  .order-info {
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    border-radius: 0px;
  }
  .credit-info {
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    border-radius: 0px;
  }
  .pay-btn {
    border-radius: 0px;
  }
}
</style>
