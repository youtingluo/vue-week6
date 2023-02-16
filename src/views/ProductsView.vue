<template>
  <loading v-model:active="isLoading" />
  <h1>這是產品列表</h1>
  <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage : `url(${product.imageUrl})`}"
            ></div>
          </td>
          <td>{{ product.title }}</td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <router-link class="btn btn-outline-secondary" :to="`/product/${product.id}`">產品細節</router-link>
              <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)">
                <i class="spinner-border spinner-border-sm" v-if="isActive"></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
  </table>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_USER, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isActive: false,
      isLoading: false,
      products: []
    }
  },
  components: {
    Loading
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/products`)
        .then(res => {
          this.products = res.data.products
          this.isLoading = false
        })
    },
    getCart () {
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/cart`)
        .then(res => {
          this.carts = res.data.data
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    addToCart (productId, qty = 1) {
      this.isActive = true
      const data = {
        product_id: productId,
        qty
      }
      this.$http.post(`${VITE_PATH}/v2/api/${VITE_USER}/cart`, { data })
        .then(() => {
          this.getCart()
          alert('已加入購物車')
          this.isActive = false
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
</style>
