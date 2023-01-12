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
            <tr
              v-for="product in displaycards.map((a) => a.card)"
              :key="product.card"
            >
              <td>{{ product.map((a) => a) }}</td>

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
            <h5 class="modal-title" id="editLabel">add Product</h5>
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
                  <div class="input-group">
                    <textarea
                      placeholder="product description"
                      v-model="description"
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                  <div>
                    {{ quntaty }}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            </div>
          </div>
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
      cards: [],
      product: { price: "", title: "", image: "" },
      activeItem: null,
      file: "",
      description: "",
      quntaty: "",
      id: "",
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const cardId = this.id;
    // const respons = await AuthenticationServices.gettadminProduct(this.id);
    // this.products = respons.data;
    const response = await AuthenticationServices.getadmincard(cardId);
    this.cards = response.data.getcard;
  },
  methods: {
    async adminProduct() {
      const description0 = this.description;
      const description = description0.split(/\r?\n/);
      this.quntaty = description.length;
      await AuthenticationServices.admincard({
        card: description,
        productId: this.id,
      });
    },
    async updateProduct() {
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("price", this.price);
      formData.append("title", this.title);
      await AuthenticationServices.updatedadminProduct(
        this.activeItem,
        formData
      );
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
    paginate(cards) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return cards.slice(from, to);
    },
    setcards() {
      let numberOfPages = Math.ceil(this.cards.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displaycards() {
      return this.paginate(this.cards);
    },
  },
  watch: {
    cards() {
      this.setcards();
    },
  },
};
</script>
