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
              <button type="button" :disabled="isActive" class="btn btn-outline-danger btn-sm" @click="removeCart(cart.id)">
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

    <VeeForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VeeField
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="required|email"
        ></VeeField>
        <ErrorMessage
          name="email"
          class="invalid-feedback"
        ></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <VeeField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
        ></VeeField>
        <ErrorMessage
          name="姓名"
          class="invalid-feedback"
        ></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <VeeField
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8"
        ></VeeField>
        <ErrorMessage
          name="電話"
          class="invalid-feedback"
        ></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <VeeField
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
        ></VeeField>
        <ErrorMessage
          name="地址"
          class="invalid-feedback"
        ></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VeeForm>
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
      this.isActive = true
      this.$http.delete(`${VITE_PATH}/v2/api/${VITE_USER}/carts`)
        .then(() => {
          this.getCart()
          this.isActive = false
          alert('已清空購物車')
        })
        .catch(err => {
          alert(err.data.message)
        })
    },
    onSubmit () {
      alert('表單驗證成功')
      this.$refs.form.resetForm()
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
