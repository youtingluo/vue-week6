<template>
  <div>
    <loading :active="isLoading"/>
    <h2>訂單列表</h2>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th>建立於</th>
          <th>購買產品</th>
          <th>用戶</th>
          <th>Email</th>
          <th>是否付款</th>
          <th>編輯產品</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ dueDate(item.create_at) }}</td>
          <td>
            <div v-for="product in item.products" :key="product.id">
              {{ product.product.title }} /
            </div>
          </td>
          <td>{{ item.user.name }}</td>
          <td>
            {{ item.user.email }}
          </td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="openOrderModal(item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openRemoveModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      目前有 <span></span> 項優惠券
    </p>
    <div class="d-flex justify-content-center">
      <Pagination
        :pagination="pagination"
        @emit-page="getOrder"
      ></Pagination>
    </div>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder" @update="updateOrder"/>
  <DelModal ref="delModal" :product="tempOrder" @remove-item="removeOrder"/>
</template>

<script>
import Loading from 'vue-loading-overlay'
import OrderModal from '../../components/OrderModal.vue'
import DelModal from '../../components/DeleteModal.vue'
import Pagination from '../../components/PaginationComponent.vue'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_PATH, VITE_USER } = import.meta.env
export default {
  data () {
    return {
      isLoading: false,
      orders: [],
      tempOrder: {},
      pagination: {},
      bsModal: ''
    }
  },
  components: {
    OrderModal,
    DelModal,
    Pagination,
    Loading
  },
  methods: {
    getOrder (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/admin/orders?page=${page}`)
        .then(res => {
          console.log(res.data)
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/login')
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      this.bsModal = this.$refs.orderModal
      this.bsModal.openModal()
    },
    updateOrder (order) {
      const api = `${VITE_PATH}/api/${VITE_USER}/admin/order/${order.id}`
      this.$http.put(api, { data: this.tempOrder })
        .then(() => {
          this.getOrder()
        })
        .catch((err) => {
          alert(err.message)
        })
      this.bsModal.hideModal()
    },
    openRemoveModal (item) {
      this.tempOrder = { ...item }
      this.bsModal = this.$refs.delModal
      this.bsModal.openModal()
    },
    removeOrder () {
      this.$http.delete(`${VITE_PATH}/api/${VITE_USER}/admin/order/${this.tempOrder.id}`)
        .then(() => {
          this.getOrder()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      this.bsModal.hideModal()
    }
  },
  computed: {
    dueDate () {
      return (time) => new Date(time * 1000).toLocaleDateString()
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
