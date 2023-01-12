<template>
  <div class="cetres">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">email</th>
          <th scope="col">username</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in displayorders" :key="user._id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-primary">edit</button>
            <button class="btn btn-danger" @click="deleteuser(user._id)">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <paginate
      v-model="page"
      :page-count="pages.length"
      :page-range="5"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  name: "HelloWorld",
  data() {
    return {
      users: [],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async created() {
    const response = await AuthenticationServices.getAllUsers();
    this.users = response.data;
  },
  methods: {
    async deleteuser(_id) {
      await AuthenticationServices.dleteadminUser(_id);
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
    setusers() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displayorders() {
      return this.paginate(this.users);
    },
  },
  watch: {
    users() {
      this.setusers();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .cetres {
    margin: 8%;
  }
}
#pagination {
  margin-top: 10px;
  text-align: center;
}

h3 {
  margin-top: 10px;
  text-align: center;
}

div {
  margin-top: 10px;
}

small {
  font-size: 14px;
}
</style>
