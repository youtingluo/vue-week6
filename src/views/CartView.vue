<template>
  <div>
    <loading v-model:active="isLoading" />
    <h1>這是購物車列表</h1>
    <div class="text-end">
      <button class="btn btn-outline-danger" :disabled="carts.total === 0" type="button" @click="removeAllCart">
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="cart in carts.carts" :key="cart.id">
          <tr>
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(cart.id)">
                <i class="spinner-border spinner-border-sm" v-if="isActive"></i>
                x
              </button>
            </td>
            <td>
              {{ cart.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select class="form-select" v-model="cart.qty" @change="updateCart(cart)" :disabled="isActive">
                    <option :value="i" v-for="i in 10" :key="i + '5458'">{{ i }}</option>
                  </select>
                  <span class="input-group-text" id="basic-addon2"
                    >{{ cart.product.unit }}</span
                  >
                </div>
              </div>
            </td>
            <td class="text-end">
              {{ cart.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ carts.total }}</td>
        </tr>
      </tfoot>
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
      carts: {},
      isActive: false,
      isLoading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    getCart () {
      this.isLoading = true
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/cart`)
        .then(res => {
          this.carts = res.data.data
          this.isLoading = false
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    removeCart (id) {
      this.isActive = true
      this.$http.delete(`${VITE_PATH}/v2/api/${VITE_USER}/cart/${id}`)
        .then(() => {
          this.getCart()
          this.isActive = false
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    updateCart (cart) {
      this.isActive = true
      const data = {
        product_id: cart.product_id,
        qty: cart.qty
      }
      this.$http.put(`${VITE_PATH}/v2/api/${VITE_USER}/cart/${cart.id}`, { data })
        .then(res => {
          this.getCart()
          this.isActive = false
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    removeAllCart () {
      this.$http.delete(`${VITE_PATH}/v2/api/${VITE_USER}/carts`)
        .then(() => {
          this.getCart()
          alert('已清空購物車')
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
