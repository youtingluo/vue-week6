<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/products">產品列表</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/cart">購物車列表</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/login">登入後台</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
