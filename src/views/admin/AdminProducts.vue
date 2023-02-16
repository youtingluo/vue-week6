<template>
  <div>
    <loading :active="isLoading" />
    後台產品列表
    <table class="table align-middle">
      <thead>
        <tr>
          <th>商品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td>
            {{ product.origin_price }} 元
          </td>
          <td>
            {{ product.price }} 元
          </td>
          <td width="150">
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_USER, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
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
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/admin/products/all`)
        .then(res => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
