import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import products from '@/components/home/products'
import product from '@/components/home/product'
import cart from '@/components/home/cart'
import contacts from '@/components/contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: product
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    }
  ],
  mode: 'history',
  hashbang: false
})
