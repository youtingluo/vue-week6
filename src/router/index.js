import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router
