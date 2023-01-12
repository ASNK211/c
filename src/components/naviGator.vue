<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a style="color: rgb(235, 29, 90)" class="navbar-brand" href="/"
          >ZoolGame</a
        >
        <div class="cartt">
          <a href="#">
            <span
              id="iconShop"
              class="badge rounded-pill"
              @click="showPopup = !showPopup"
            >
              <i class="fas fa-shopping-bag" id="icon"></i>
              <span class="counter">
                {{ this.$store.getters.totalProduct }}</span
              >
            </span>
          </a>
          <div v-show="showPopup" class="cart">
            <!-- <div v-if="3 > cartcheck.length" class="emptycart">
        <h1>the cart is empty</h1>
      </div> -->
            <div>
              <div class="nord">
                <div class="over">
                  <div
                    class="cartcontainer"
                    v-for="item in this.$store.state.cart"
                    :key="item"
                  >
                    <div class="inlineos">
                      <img :src="item.image" :alt="path" />
                    </div>
                    <div class="namecontainer">
                      <div class="productName">{{ item.productName }}</div>
                      <div class="productquntaty">
                        ${{ item.productPrice }} x {{ item.productQuanity }}
                      </div>
                    </div>
                    <div class="removeitem">
                      <span
                        class="flot-right"
                        @click="$store.commit('removeFromCart', item)"
                        ><svg
                          style="width: 20px; font-weight: bolder"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="{1.5}"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cartfooter">
                <div class="modal-body">
                  <p style="font-size: large">
                    <strong>Subtotal:</strong> £:
                    {{ this.$store.getters.totalPrice }}
                  </p>
                </div>
                <div class="alert alert-danger" v-if="alert">
                  {{ alert }}
                </div>
                <div class="modal-footer">
                  <button
                    style="width: 50%"
                    @click="Checkout()"
                    to="/Checkout"
                    class="btn btn-primary"
                  >
                    الدفع
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/" class="nav-item">الصفحه الرئيسيه</router-link>
            <!-- <li class="nav-item">
              <router-link to="/" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Contact us</router-link>
            </li> -->
            <router-link
              to="order"
              v-if="$store.state.isUserLoggedIn"
              class="nav-item"
            >
              طلباتي
            </router-link>
            <router-link
              to="wallet"
              v-if="$store.state.isUserLoggedIn"
              class="nav-item"
            >
              المحفظه
            </router-link>
            <li v-if="$store.state.isUserLoggedIn" class="balance">
              <div style="display: inline-block">ج.س</div>
              {{ balance || 0 }}
            </li>

            <li v-if="!$store.state.isUserLoggedIn" class="login">
              <router-link to="/login"
                ><button
                  id="login"
                  class="rounded-md flex space-x-2 w-16 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                >
                  تسجيل الدخول
                </button></router-link
              >
            </li>
            <li v-if="!$store.state.isUserLoggedIn" class="Register">
              <router-link to="/Register"
                ><button
                  class="rounded-md flex space-x-2 w-16 h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
                >
                  التسجيل
                </button></router-link
              >
            </li>
            <a
              role="button"
              class="nav-item"
              v-if="$store.state.isUserLoggedIn"
              @click="logout"
            >
              تسجيل الخروج
            </a>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import { Modal } from "bootstrap";
import { mapGetters } from "vuex";
export default {
  name: "navBar",
  data() {
    return {
      balance: "",
      show: false,
      text: "Sort by",
      showPopup: false,
      search: true,
      windowWidth: window.innerWidth,
      cartcheck: "",
      alert: "",
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "authenticated",
      user: "user",
      isAdmin: "isAdmin",
    }),
  },
  async created() {
    const userId = localStorage.getItem("userId");

    try {
      const response = await AuthenticationServices.getUserbalance(
        JSON.parse(userId)
      );
      this.balance = response.data.balance;
      this.$store.dispatch("userBalance", response.data.balance);
      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showPopup = false;
        }
      });
    } catch (error) {
      if (error.response.data.message) {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
        this.$store.dispatch("setAdmin", false);
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("cart");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        this.$router.push({
          path: "/login",
        });
        await AuthenticationServices.googlelogout();
      }
    }
    // const ddd = response.data.message;
  },
  methods: {
    Checkout() {
      const cart = localStorage.getItem("cart");
      this.alert = "";
      if (!cart || 3 > cart.length) {
        this.alert = "no product";
      } else {
        this.$router.push("/Checkout");
        this.showPopup = false;
      }
    },
    Cartmodal() {
      let minicart = new Modal(document.getElementById("minicart"), {});
      minicart.show();
    },
    async logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setAdmin", false);
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("cart");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      this.$router.push({
        path: "/login",
      });
      await AuthenticationServices.googlelogout();
    },
    onClose() {
      this.seen = false;
    },
    checkoutHandler(flag3) {
      let checkout = document.getElementById("checkout");
      let checdiv = document.getElementById("chec-div");
      if (!flag3) {
        checkout.classList.add("translate-x-full");
        checkout.classList.remove("translate-x-0");
        setTimeout(function () {
          checdiv.classList.add("hidden");
        }, 1000);
        flag3 = true;
      } else {
        setTimeout(function () {
          checkout.classList.remove("translate-x-full");
          checkout.classList.add("translate-x-0");
        }, 1000);
        checdiv.classList.remove("hidden");
        flag3 = false;
      }
    },
  },
};
</script>

// Add "scoped" attribute to limit CSS to this component only -->
<!-- HTML !-->
<button class="button-35" role="button">Button 35</button>

/* CSS */
<!-- .button-35 {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-35:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
} -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap");
.nav-link {
  color: #050505;
}
.nav-item {
  font-weight: 800;
  font-family: "Noto Sans Arabic", sans-serif;
  // border: 2px #3e0e0e solid;
  // margin: 2px;
  // border-radius: 9px;
  // width: 27%;
}
@media screen and (min-width: 993px) {
  .nav-item {
    font-weight: 800;
    font-family: "Noto Sans Arabic", sans-serif;
    // border: 2px #3e0e0e solid;
    margin: 4px;
    // border-radius: 9px;
    // width: 27%;
  }
  .balance {
    border: 1px red solid;
    font-weight: 800;
    font-family: "Noto Sans Arabic", sans-serif;
    // border: 2px #3e0e0e solid;
    margin: 2px;
    // border-radius: 9px;

    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;

    // margin: 0;
    outline: none;
    // padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    border: 1px #dbd2d2 solid;
  }
  #login {
    width: 110%;
  }
  .login {
    position: relative;
    left: 90%;
  }
  .Register {
    position: relative;
    left: 95%;
  }
}
@media screen and (max-width: 980px) {
  .balance {
    color: black;
    background-color: rgb(229, 234, 242);
    width: 40%;
    border-radius: 28px;
    left: 34%;
    margin: 4px;
    font-weight: 800;
    border: 1px red solid;
    font-weight: 800;
    font-family: "Noto Sans Arabic", sans-serif;
    // border: 2px #3e0e0e solid;
    // border-radius: 9px;
    // width: 70%;
    position: relative;
    top: 5px;

    // background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    // font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 2;
    // margin: 0;
    outline: none;
    // padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    border: 1px #dbd2d2 solid;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .nav-item {
    font-weight: 800;
    font-family: "Noto Sans Arabic", sans-serif;
    margin: 2px;
    width: 70%;
    height: 43px;
    position: relative;
    top: 5px;
    left: 19%;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    // font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 2;
    // margin: 0;
    outline: none;
    // padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    white-space: nowrap;
    border: 1px #dbd2d2 solid;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .nav-item:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
  .Register button {
    width: 100%;
  }
  .login button {
    width: 100%;
  }
}
.navbar {
  position: fixed;
  z-index: 100;
  width: 100%;
}
.navbar-toggler {
  display: flex;
}
.cartt {
  display: flex;
  position: fixed;
  right: 100px;
  top: 16px;
  z-index: 888;
}
div {
  background-color: AB46D2;
}
#iconShop {
  background-color: rgba(3, 22, 194, 0.726);
  display: flex;
  width: 45px;
  height: 24px;
}
.counter {
  display: flex;
  position: absolute;
  bottom: 6px;
  left: 24px;
}
#icon {
  display: flex;
  position: absolute;
  top: 5px;
  left: 10px;
}
.inlineos {
  display: inline-block;
  width: 30%;
  height: 63px;
}
img {
  width: 89%;
  position: relative;
  right: 103px;
  height: 73px;
  border-radius: 8%;
  top: 13px;
}
.cart {
  position: absolute;
  /* bottom:50px; */
  background-color: rgb(255, 255, 255);
  border: 2px solid #9191ca;
  border-radius: 5%;
  width: 320px;
  // left: 20px;
  background: #fff;
  top: 94%;
  right: 17%;
}
@media screen and (max-width: 500px) {
  .cart {
    top: 94%;
    right: -186%;
  }
}
.removeitem {
  display: inline-block;
  position: relative;
  bottom: 50px;
}
.cartcontainer {
  /* border-bottom: 1px solid black; */
  /* margin: 5%; */
  height: 100px;
  box-shadow: rgb(223, 53, 53);
}
.productName {
  font-family: Arial, Helvetica, sans-serif;
  /* display: inline-block; */
  /* width: 33.3%; */
  position: relative;
  /* bottom: 17px; */
  font-family: "system-ui", "San Francisco", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", Arial, sans-serif;
  display: block;
  line-height: 1.3;
  font-size: 13px;
  font-weight: 400;
  color: #2a74ed;
  right: 12px;
  top: 6px;
}
.productquntaty {
  font-family: Arial, Helvetica, sans-serif;
  /* display: inline-block; */
  /* width: 33.3%; */
  position: relative;
  /* bottom: 17px; */
  font-family: "system-ui", "San Francisco", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", Arial, sans-serif;
  display: block;
  line-height: 1;
  font-size: 13px;
  font-weight: 600;
  right: 38px;
  top: 20px;
}
.over {
  overflow: auto;
  height: 400px;
}

.flot-right {
  position: relative;
  left: 104px;
  bottom: 92px;
  cursor: pointer;
}
.namecontainer {
  position: relative;
  width: 181px;
  left: 94px;
  bottom: 61px;
  height: 82px;
}
.cartfooter {
  border-top: 1px solid #e4e4e4;
  padding: 20px 0;
  font-size: 15px;
  margin: 0;
}
.modal-footer {
  position: relative;
  right: 25%;
  top: 8px;
}
.nord {
  /* height: 200px; */
}
.emptycart {
  height: 100px;
  background-color: #d6e4f0;
}
.emptycart h1 {
  font-size: larger;
  font-weight: bolder;
  color: #777fca;
  position: relative;
  top: 37px;
}
</style>

<!-- <template>
  <header :class="{ scrolled: scrollPosition }">
    <nav>
      <div class="branding">
        <img src="./img/index.jpeg" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
      </ul>
      <div class="icon">
        <ion-icon
          name="menu-outline"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        ></ion-icon>
        <ion-icon name="close"></ion-icon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>

</script>
<style scoped>
header {
  background-color: black;
  z-index: 99;
  widows: 100%;
  position: fixed;
  transition: .5s ease all;
  color: aliceblue;
}
nav{
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140) {
    max-width:1140;
  }
  
}
ul,
.link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;

  }
  li{
    padding: 16px;
    margin-left: 16px;
  }
  .link {
    font-size: 14px;
    transition: .5 ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
  }
  .link:hover{
    color: aqua;
    border-color: aqua;
  }
  .branding{
    display: flex;
    align-items: center;
  }
.branding img {
  width: 50px;
  transition: .5s ease all;
}

</style> -->

<!-- <template>
  <div class="header">
    <div class="logo">
      <img src="./img/index.jpeg" alt="" />
      <a href="" class="header__logo">zoolgame</a>
    </div>
    <nav class="nav" id="nav-menu">
      <ion-icon name="close" class="header_close" id="close-menu"></ion-icon>
      <ul class="nav__list">
        <li class="nav__item"><a href="" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="" class="nav__link">About</a></li>
        <li class="nav__item"><a href="" class="nav__link">Contact</a></li>
        <li class="nav__item"><a href="" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="" class="nav__link">Home</a></li>
      </ul>
    </nav>
    <ion-icon
      name="menu-outline"
      class="header_toggle"
      id="toggle-menu"
    ></ion-icon>
  </div>
</template>
<script>
const navMenu = document.getElementById("nav-menu")
const toggleMenu = document.getElementById("toggle-menu")
const closeMenu = document.getElementById("close-menu");
      toggleMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
      closeMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
export default {
  
  methods: {
    // show() {
    //   const navMenu = document.getElementById("nav-menu"),
    //     toggleMenu = document.getElementById("toggle-menu"),
    //     closeMenu = document.getElementById("close-menu");
    //   toggleMenu.addEventListener("click", () => {
    //     navMenu.classList.toggle("show");
    //   });
    // },
    // closem() {
    //   const navMenu = document.getElementById("nav-menu"),
    //     toggleMenu = document.getElementById("toggle-menu"),
    //     closeMenu = document.getElementById("close-menu");
    //   closeMenu.addEventListener("click", () => {
    //     navMenu.classList.toggle("show");
    //   });
    // },
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.header {
  display: flex;
  background-color: #222831;
  justify-content: space-between;
  padding: 1rem 0;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.header__logo {
  color: #eeee;
}
.nav__list {
  display: flex;
  align-items: center;
}
.nav__item {
  margin: 0 8px;
}
.nav__link {
  padding: 10px;
  color: #eeee;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 5px;
}
.nav__link:hover {
  background-color: aqua;
}
.header_toggle,
.header_close {
  display: none;
}
@media screen and (max-width: 768px) {
  .header {
    height: 48px;
    justify-content: space-between;
    padding: 0 28px;
  }
  .logo a {
    font-size: 0.9rem;
  }
  .logo img {
    width: 30px;
  }
  .header_toggle {
    display: inline;
    color: #eeee;
    font-size: 24px;
  }
  .header_close {
    position: absolute;
    right: 24px;
    display: block;
    font-size: 24px;
    border-radius: 50%;
  }
}
.header_close:hover {
  background-color: aqua;
}
.nav {
  position: fixed;
  top: 0;
  right: -100%;
  background-color: #222831;
  color: #eeee;
  width: 60%;
  height: 100vh;
  z-index: 100;
  transition: 0.5s;
  border-radius: 0 0 0 50%;
}
.nav__list {
  display: flex;
  flex-direction: column;
}
.nav__item {
  margin: 2rem 0;
}
// .show {
//   right: 0;
// }
</style> -->

<!-- <template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ZoolGames</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Contact us</router-link>
            </li>
            <li>
              <router-link to="admin" v-if="isAdmin" class="nav-link">
                Admin
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="profile"
                v-if="$store.state.isUserLoggedIn"
                class="nav-link"
              >
                Profile
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="order"
                v-if="$store.state.isUserLoggedIn"
                class="nav-link"
              >
                Order
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="order"
                v-if="$store.state.isUserLoggedIn"
                class="nav-link"
              >
                wallet
              </router-link>
            </li>
            <li to="admin" v-if="$store.state.isUserLoggedIn" class="nav-link">
              $ {{ balance }}
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="!$store.state.isUserLoggedIn"
              >
                Register
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropdown-item">
                  <router-link to="/Register" class="nav-link"
                    >Register</router-link
                  >
                </li>
                <li class="dropdown-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                role="button"
                class="nav-link"
                v-if="$store.state.isUserLoggedIn"
                @click="logout"
              >
                Logout
              </a>
            </li>
          </ul>
          <div>
            <a href="#" v-if="$store.state.isAdmin">
              <span
                id="iconShop"
                class="badge rounded-pill"
                @click="Cartmodal()"
              >
                {{ this.$store.getters.totalProduct }}
              </span>
            </a>
            <i class="fas fa-shopping-bag"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import { Modal } from "bootstrap";
import { mapGetters } from "vuex";
export default {
  name: "navBar",
  data() {
    return {
      balance: "",
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "authenticated",
      user: "user",
      isAdmin: "isAdmin",
    }),
  },

  async created() {
    const userId = localStorage.getItem("userId");
    const response = await AuthenticationServices.getaccount(userId);
    this.balance = response.data[0].balance;
  },
  methods: {
    Cartmodal() {
      let minicart = new Modal(document.getElementById("minicart"), {});
      minicart.show();
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setAdmin", false);
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("cart");
      localStorage.removeItem("userId");
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

// Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped lang="scss">
div {
  background-color: AB46D2;
}
#iconShop {
  background-color: rgb(255, 0, 0);
}
</style> -->
