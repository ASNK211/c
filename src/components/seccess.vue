<template>
  <div class="hello">ggggggggggggggg</div>
</template>

<script>
// import AuthenticationServices from "@/services/AuthenticationServices";
import axios from "axios";
// import EventBus from '@/event-bus.js'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  async created() {
    const response = await axios.get("http://zoolgame.com/seccess", {
      withCredentials: true,
    });
    console.log(response.data);
    localStorage.setItem("isAdmin", response.data.sendUser.isAdmin);
    localStorage.setItem("email", response.data.sendUser.email);
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("userId", JSON.stringify(response.data.sendUser._id));
    this.$store.dispatch("setToken", response.data.accessToken);
    this.$store.dispatch("setUser", response.data.sendUser);
    this.$store.dispatch("setAdmin", response.data.sendUser.isAdmin);
    const dddd = response.data;
    console.log("ddd", dddd);
    if (dddd) {
      // this.$root.$emit('myEvent', "response.data.accessToken");
      location.reload();
      setTimeout(() => {
        window.close();
      }, 1);
    }

    // EventBus.$emit('event-name',response.data.accessToken)
  },
  // created() {
  //   setTimeout(() => {
  //     window.close();
  //   }, 10);
  // },
};
</script>

<style scoped lang="scss"></style>
