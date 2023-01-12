<!-- <template>
  <div class="hello">
    <div>
      <ul class="namepage">
        <li :to="Home" class="home">
          <router-link class="link" :to="{ name: 'Home' }">Home/</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'order' }">order/</router-link>
        </li>
        <li>myorder</li>
      </ul>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>product</th>
          <th>Q</th>
          <th>totale</th>
        </tr>
      </thead>
      <tbody v-if="orders">
        <tr v-for="order in orders.order" :key="order.productId">
          <td>{{ order.productName }}</td>
          <td>{{ order.productQuanity }}</td>
          <td>${{ order.productPrice }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="serials.length > 0">
      <thead>
        <tr>
          <th>productName</th>
          <th>serial</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="serial in serials" :key="serial._id">
          <td>{{ serial.productName }}</td>
          <td>{{ serial.serial }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> -->

<template>
  <body class="overflow-y-hidden dark:bg-gray-900">
    <lognview v-if="!$store.state.isUserLoggedIn"></lognview>
    <div
      v-if="$store.state.isUserLoggedIn"
      class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto"
    >
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1
          class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
        >
          Order #{{ orderNumber }}
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
                    £{{ order.productPrice }}
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
                  ${{ total || orders.amount }}
                </p>
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
                طلبك
              </h3>
              <p class="text-base dark:text-white leading-4 text-gray-800">
                {{ serial.productId }}
              </p>
              <div
                v-for="sss in serial.serial"
                :key="sss"
                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"
              >
                <div class="flex justify-between w-full">
                  <div style="color: rgb(255, 59, 59); width: 300px">
                    <div>{{ sss }}</div>
                    <!-- <p class="text-base dark:text-gray-300 leading-4 text-gray-600" style="white-space: pre-line">g</p> -->
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
import lognview from "@/views/loginMeddile.vue";
export default {
  name: "orderAdmin",
  data() {
    return {
      id: "",
      orders: [],
      serials: [],
      total: "",
      orderNumber: "",
      createdAt: "",
      email: "",
      status: "",
    };
  },
  components: { lognview },
  async created() {
    this.id = this.$route.params.id;
    const orderId = this.id;
    // console.log("ddd", JSON.stringify(this.id));
    const response = await AuthenticationServices.getorderone(orderId);
    this.orders = response.data;
    const orders = response.data;
    this.orderNumber = orders.orderNumber;
    this.createdAt = orders.createdAt;
    this.email = orders.email;
    this.status = orders.status;

    // orders.map((num) =>console.log(num))
    let sum = 0;
    for (const value of orders.order) {
      sum += value.productPrice;
    }
    this.total = sum;
    // const respons = await AuthenticationServices.getserial(orderId);
    // this.serials = respons.data;
    const respons = await AuthenticationServices.autoserial(orderId);
    this.serials = respons.data;
  },
};
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
div {
  font-family: "Noto Sans Arabic", sans-serif;
}
.table {
  border-radius: 10px;
  background-color: rgb(49, 34, 34);
  width: 75%;
  margin-left: 10%;
  border-color: rgb(0, 0, 0);
  margin-bottom: 10%;
}
.table thead tr th {
  color: aliceblue;
}
.table tbody tr {
  border: none;
}
.table tbody tr td {
  color: rgb(255, 255, 255) !important;
  // border: 5px white !important;
}

@media (max-width: 760px) {
  .table {
    background-color: rgb(49, 34, 34);
  }
  .table tbody tr td {
    color: rgb(255, 255, 255) !important;
  }
  .table tbody tr td {
    border: none !important;
    padding: 10px;
    font-size: 75%;
  }
  .table thead tr th {
    color: aliceblue;
  }
}
.namepage {
  list-style: none;
  display: flex;
  border-bottom: 1px solid rgb(197, 191, 191);
}
.namepage li {
  font-size: 300;
  color: rgb(155, 155, 155);
}
.link {
  text-decoration: none !important;
  color: rgb(155, 155, 155);
}
</style>
