<template>
  <div class="hello">
    <div class="reset">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        v-model="email"
        placeholder="email"
      />
      {{ error }}
      <button class="w-100 btn btn-lg btn-primary" @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "",
      error: null,
    };
  },
  methods: {
    async reset() {
      const response = await AuthenticationServices.resetUser({
        email: this.email,
      });
      console.log(response);
      // this.error = error.response.data.error;
    },
  },
  mounted() {
    document.title = "resetpassword";
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reset {
  width: 50%;
  position: relative;
  top: 100px;
  left: 20%;
  height: 350px;
}
</style>
