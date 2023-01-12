<template>
  <div class="products">
    <h3>anythings</h3>
    <div class="product-test">
      <h3 class="d-inline-block p-3">product list</h3>
      <button
        @click="addNew()"
        type="button"
        class="btn btn-primary float-right"
      >
        add product
      </button>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in displayproducts" :key="product._id">
              <td>{{ product.title }}</td>
              <td style="width: 25%">
                <img
                  style="width: 100%"
                  :src="`http://zoolgame.com/uploads/${product.image}`"
                  alt=""
                />
              </td>
              <td>${{ product.price }}</td>
              <td>
                <button @click="editProduct(product)" class="btn btn-primary">
                  edit
                </button>
                <button
                  @click="deleteProduct(product._id)"
                  class="btn btn-danger"
                >
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
    </div>
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="btn-close btn-close-black"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="title"
                    v-model="title"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <textarea
                      placeholder="product description"
                      v-model="description"
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input
                    type="file"
                    ref="file"
                    :rules="rules"
                    @change="uploadImage"
                    class="form-control"
                  />
                </div>

                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    v-for="(image, index) in images"
                    :key="(image, index)"
                  >
                    <div class="img-wrapp">
                      <div>
                        <img :src="image" alt="" class="immudel" />
                      </div>
                      <div>
                        <span
                          id="xclose"
                          class="btn-close btn-close-reed"
                          @click="deleteImage(image, index)"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{ alerte }}
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button @click="adminProduct" type="button" class="btn btn-primary">
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="btn-close btn-close-black"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product title"
                    v-model="title"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <textarea
                      placeholder="product description"
                      v-model="description"
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="price"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input
                    type="file"
                    ref="filed"
                    :rules="rules"
                    @change="uploadImaged"
                    class="form-control"
                  />
                </div>
                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    v-for="(image, index) in images"
                    :key="(image, index)"
                  >
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px" />
                      <span
                        class="delete-img"
                        @click="deleteImage(image, index)"
                        >X</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{ alert }}
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="updateProduct()"
              type="button"
              class="btn btn-primary"
            >
              Apply changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#xclose {
  position: relative;
  right: 35px;
  top: -86px;
}
.immudel {
  width: 80px;
}
</style>
<script>
import AuthenticationServices from "@/services/AuthenticationServices";
import { Modal } from "bootstrap";
export default {
  name: "aboutView",
  data() {
    return {
      products: [],
      // product: { price: "", title: "", image: "" },
      activeItem: null,
      file: "",
      filed: null,
      id: "",
      page: 1,
      perPage: 10,
      pages: [],
      price: null,
      title: null,
      image: "",
      alert: "",
      alerte: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const respons = await AuthenticationServices.gettadminProduct(this.id);
    this.products = respons.data;
    const response = await AuthenticationServices.updatedadminProduct();
    this.product = response.data;
  },
  methods: {
    uploadImage() {
      this.file = this.$refs.file.files[0];
    },
    uploadImaged() {
      this.filed = this.$refs.filed.files[0];
    },
    async adminProduct() {
      this.alerte = "";
      if (
        this.file === null ||
        this.productname === null ||
        this.title === null
      ) {
        this.alerte = "one fo the value is not faund!";
      } else {
        try {
          let formData = new FormData();
          this.id = this.$route.params.id;
          console.log(this.file);
          formData.append("image", this.file);
          formData.append("price", this.price);
          formData.append("title", this.title);
          formData.append("intproductId", this.id);
          await AuthenticationServices.adminProduct(formData);
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    async updateProduct() {
      this.alert = "";
      if (this.filed === null || this.title === null || this.price === null) {
        this.alert = "one fo the value is not faund!";
      } else {
        let formData = new FormData();
        formData.append("image", this.filed);
        formData.append("price", this.price);
        formData.append("title", this.title);
        await AuthenticationServices.updatedadminProduct(
          this.activeItem,
          formData
        );
      }
    },
    editProduct(product) {
      let edit = new Modal(document.getElementById("edit"), {});
      edit.show();
      this.activeItem = product._id;
      this.product = product.data();
    },
    async deleteProduct(_id) {
      await AuthenticationServices.dleteadminProduct(_id);
    },
    addNew() {
      this.reset();
      let product = new Modal(document.getElementById("product"), {});
      product.show();
    },
    reset() {
      this.product = {
        name: null,
        price: null,
        description: null,
        img: [],
      };
    },
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setusers() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displayproducts() {
      return this.paginate(this.products);
    },
  },
  watch: {
    products() {
      this.setusers();
    },
  },
};
</script>
