import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/frontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/ProductView.vue')
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
