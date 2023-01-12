<template>
  <div class="hello">
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        v-model="password"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="reset">reset</button>
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
      password: "",
      //   error: null,
    };
  },
  methods: {
    async reset() {
      const accessToken = this.$route.params.accessToken;
      await AuthenticationServices.changeUserpassword({
        newPass: this.password,
        resetLink: accessToken,
      });
      // resetLink, newPass
      // this.error = error.response.data.error;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
