<!-- <template>
  <div class="hello">
    <table class="table" v-if="amount.amount">
      <thead>
        <tr>
          <th>email</th>
          <th>quantity</th>
          <th>product price</th>
          <th>{{ amount.amount }}</th>
          <th>{{ amount.order }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="amount in amounts" :key="amount._id">
          <td>{{ amount.amount }}</td>
          <td>{{ amount.nameproduct }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <button class="btn btn-primary" @click="addtowallet">Completed</button>
    </table>

    <table class="table" v-if="order.productId">
      <thead v-if="order.productId">
        <tr>
          <th>email</th>
          <th>quantity</th>
          <th>product price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders.order" :key="order.productId">
          <td>{{ order.productName }}</td>
          <td>{{ order.productQuanity }}</td>
          <td>${{ order.productPrice }}</td>
          {{
            order.productId
          }}
        </tr>
      </tbody>
    </table>
    <table class="table">
      <thead>
        <tr>
          <th>productName</th>
          <th>serial</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>productName<input v-model="productName" type="text" /></td>
          <td>seril<input v-model="serial" type="text" /></td>
        </tr>
      </tbody>
      <button class="btn btn-primary" @click="seriaal">Completed</button>
      <button class="btn btn-danger">canceled</button>
    </table>
  </div>
</template> -->

<template>
  <body class="overflow-y-hidden dark:bg-gray-900">
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1
          class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
        >
          Order #{{ orderNumber }}
        </h1>
        <h1
          v-if="nameproduct"
          class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
        >
          {{ nameproduct }}
        </h1>
        <p
          class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600"
        >
          {{ createdAt }}
        </p>
      </div>
      <div
        class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"
      >
        <div
          class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <div
            v-for="order in orders.order"
            :key="order.productId"
            class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
          >
            <p
              class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800"
            >
              Customer Order
            </p>
            <div
              class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
            >
              <div
                class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0"
              >
                <div
                  class="w-full flex flex-col justify-start items-start space-y-8"
                >
                  <h3
                    class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800"
                  >
                    {{ order.productName }}
                  </h3>
                </div>
                <div class="flex justify-between space-x-8 items-start w-full">
                  <p
                    class="text-base dark:text-white xl:text-lg leading-6 text-gray-800"
                  >
                    Quantity: {{ order.productQuanity }}
                  </p>
                  <p
                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"
                  >
                    ${{ order.productPrice }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
          >
            <div
              class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
            >
              <div class="flex justify-between items-center w-full">
                <p
                  class="text-base dark:text-white font-semibold leading-4 text-gray-800"
                >
                  Total
                </p>
                <p
                  class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"
                >
                  ${{ amount.amount }}
                  {{ total }}
                </p>
              </div>
            </div>
          </div>
          <div
            v-if="amount.image"
            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
          >
            <div
              class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
            >
              <h3
                class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
              >
                transaction image
              </h3>
              <p class="text-base dark:text-white leading-4 text-gray-800"></p>
              <div
                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"
              >
                <div class="flex justify-between w-full">
                  <div style="color: antiquewhite; width: 300px">
                    <div>
                      <img
                        :src="`${urlimage}/${amount.image}`"
                        class="w-full h-44"
                      />
                    </div>
                    <p
                      class="text-base dark:text-gray-300 leading-4 text-gray-600"
                      style="white-space: pre-line"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="serial in serials"
            :key="serial.orderId"
            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
          >
            <div
              class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
            >
              <h3
                class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
              >
                your order
              </h3>
              <p class="text-base dark:text-white leading-4 text-gray-800">
                {{ serial.productId }}
              </p>
              <div
                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"
              >
                <div class="flex justify-between w-full">
                  <div style="color: antiquewhite; width: 300px">
                    <div>{{ serial.serial.join("") }}</div>
                    <p
                      class="text-base dark:text-gray-300 leading-4 text-gray-600"
                      style="white-space: pre-line"
                    >
                      g
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col"
        >
          <h3
            class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
          >
            Customer info
          </h3>
          <div
            class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0"
          >
            <div class="flex flex-col justify-start items-start flex-shrink-0">
              <div
                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200"
              >
                <div class="flex justify-start items-start flex-col space-y-2">
                  <p
                    style="color: chartreuse"
                    class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800"
                  >
                    {{ status }}
                  </p>
                </div>
              </div>
              <!-- <div class="alert alert-success" v-if="message">
               {{ message }}
              </div> -->
              <div class="alert alert-success" v-if="alert">
                {{ alert }}
              </div>
              <table class="table">
                <button
                  v-if="amount.amount"
                  class="btn btn-primary"
                  @click="addtowallet"
                >
                  Completed
                </button>
                <button
                  v-if="amount.status != 'Completed'"
                  class="btn btn-primary"
                  @click="addtoorder"
                >
                  Completed
                </button>
              </table>
              <div
                class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full"
              >
                <img
                  class="dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                  alt="email"
                />
                <img
                  class="hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                  alt="email"
                />
                <p class="cursor-pointer text-sm leading-5">{{ email }}</p>
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
export default {
  name: "orderAdmin",
  data() {
    return {
      // id: "",
      orders: [],
      amounts: [],
      serials: [],
      amount: "",
      order: "",
      orderNumber: "",
      nameproduct: "",
      urlimage: "",
      alert: "",
      // serial: "",
      // productName: "",
      // kfmlk: "5120",
    };
  },
  async created() {
    this.urlimage = process.env.VUE_APP_IMMAGE_ADMIN;
    this.id = this.$route.params.id;
    const orderId = this.id;
    const response = await AuthenticationServices.getorderone(orderId);
    this.orders = response.data;
    this.amounts = response;
    this.amount = response.data;
    this.order = response.data.order;
    const orders = response.data;
    this.nameproduct = orders.nameproduct;
    this.orderNumber = orders.orderNumber;
    const ff = response.data;
    console.log(ff.status);
    const respons = await AuthenticationServices.autoserial(orderId);
    this.serials = respons.data;
  },
  methods: {
    async addtowallet() {
      this.id = this.$route.params.id;
      await AuthenticationServices.walletUser({
        balance: this.amount.amount,
        userId: this.amount.userId,
        orderId: this.amount._id,
        status: "Completed",
      });
    },
    async addtoorder() {
      const orderId = this.id;
      const response = await AuthenticationServices.admingetway({
        orderId: orderId,
      });
      const resive = response.data;
      if (resive) {
        this.alert = "order is send successfully";
      }
      console.log(response.data);
    },
    async seriaal() {
      const orderId = this.id;
      await AuthenticationServices.serial({
        orderId: orderId,
        serial: this.serial,
        productName: this.productName,
      });
    },
  },
};
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss"></style>
