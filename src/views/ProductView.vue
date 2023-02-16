<template>
  <div>
    <h1>單一產品細節</h1>
    {{ product.title }}
    <img class="img-fluid" width="300" :src="product.imageUrl">
  </div>
</template>

<script>
const { VITE_USER, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.isActive = true
      this.$http.get(`${VITE_PATH}/v2/api/${VITE_USER}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          this.isActive = false
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
