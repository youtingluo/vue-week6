<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/coupons">優惠券列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/orders">訂單列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">回前台</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view v-if="status" />
    </div>
  </div>
</template>

<script>
const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    checkLogin () {
      const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('hexschoolToken'))
        ?.split('=')[1]
      this.$http.defaults.headers.common.Authorization = cookieValue
      this.$http.post(`${VITE_PATH}/v2/api/user/check`)
        .then((res) => {
          if (res.data.success) {
            this.status = true
            this.$router.push('/admin/products')
          }
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
