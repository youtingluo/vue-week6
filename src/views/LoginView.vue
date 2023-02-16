<template>
    <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal text-center">
          請先登入
        </h1>
        <div class="col-6">
          <form class="form-signin">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                placeholder="name@example.com" required autofocus>
              <label for="floatingInput">帳號</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                placeholder="Password" required>
              <label for="floatingPassword">密碼</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
              登入
            </button>
          </form>
        </div>
      </div>
</template>

<script>
const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_PATH}/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hexschoolToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
