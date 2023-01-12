<template>
  <div class="hello">
    hello
    {{ seccess }}
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
      seccess: "",
    };
  },
  async created() {
    const accessToken = this.$route.params.accessToken;
    const response = await AuthenticationServices.activatedUser({
      sorer: accessToken,
    });
    this.seccess = response.data.message;
  },
};
</script>

<style scoped lang="scss"></style>
