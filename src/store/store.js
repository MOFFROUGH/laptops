import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loading: false,
    products: [
      {id: 1, src: '/static/img/laptops/1.jpeg', name: 'Lenovo', price: 5000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 2, src: '/static/img/laptops/2.jpeg', name: 'Lenovo', price: 5000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 3, src: '/static/img/laptops/3.jpeg', name: 'Lenovo', price: 1000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 4, src: '/static/img/laptops/4.jpeg', name: 'Lenovo', price: 2340, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 5, src: '/static/img/laptops/5.jpeg', name: 'Lenovo', price: 6500, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 6, src: '/static/img/laptops/6.jpeg', name: 'Lenovo', price: 2560, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 7, src: '/static/img/laptops/7.jpeg', name: 'Lenovo', price: 1000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'others'},
      {id: 8, src: '/static/img/laptops/dell/1.jpeg', name: 'DEll', price: 7000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'dell'},
      {id: 9, src: '/static/img/laptops/dell/2.jpeg', name: 'DEll', price: 1000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'dell'},
      {id: 10, src: '/static/img/laptops/dell/3.jpeg', name: 'DEll', price: 5300, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'dell'},
      {id: 11, src: '/static/img/laptops/dell/4.jpeg', name: 'DEll', price: 3000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'sittingroom'},
      {id: 12, src: '/static/img/laptops/dell/5.jpeg', name: 'DEll', price: 2000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'dell'},
      {id: 13, src: '/static/img/laptops/hp/1.jpeg', name: 'HP', price: 3000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 14, src: '/static/img/laptops/hp/2.jpeg', name: 'HP', price: 14000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 15, src: '/static/img/laptops/hp/3.jpeg', name: 'HP', price: 14000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 16, src: '/static/img/laptops/hp/4.jpeg', name: 'HP', price: 15000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 20, src: '/static/img/laptops/hp/5.jpeg', name: 'HP', price: 15000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 17, src: '/static/img/laptops/hp/6.jpeg', name: 'HP Folio', price: 14000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hp'},
      {id: 18, src: '/static/img/laptops/access/bag.jpeg', name: 'Bag', price: 14000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'bags'},
      {id: 21, src: '/static/img/laptops/access/hdd.jpeg', name: 'Trancend HDD', price: 15000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'hdd'},
      {id: 19, src: '/static/img/laptops/access/charger.jpeg', name: 'Charger', price: 15000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'chargers'}
    ],
    cart: [
      {id: 1, src: '/static/img/laptops/access/4.jpeg', name: 'Great Bed', price: 25000, color: 'aluminium', description: 'Quality Laptops, with warranty. WE are a brand you can trust.', category: 'accessories', quantity: 1}
    ]
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    addtocart (state, payload) {
      const indexItem = state.cart.findIndex(x => x.id === payload.index)
      if (indexItem >= 0) {
        payload.product.quantity += 1
      } else {
        payload.product.quantity = 1
        state.cart.push(payload.product)
      }
    },
    removeFromCart (state, payload) {
      const indexItem = state.cart.findIndex(x => x.id === payload.index)
      if (indexItem >= 0) {
        payload.product.quantity -= 1
      } else {
        //
      }
    }
  },
  actions: {
    setProducts ({commit}, payload) {
      commit('setLoading', true)
      // manage the payload layout form api
      commit('setProducts', payload)
      commit('setLoading', false)
    },
    addtocart ({commit, state}, payload) {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(payload)
      })
      let stuff = {
        product: product,
        index: payload
      }
      commit('addtocart', stuff)
    },
    removeFromCart ({commit, state}, payload) {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(payload)
      })
      let stuff = {
        product: product,
        index: payload
      }
      commit('removeFromCart', stuff)
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getLoading (state) {
      return state.loading
    },
    getFeaturedProducts (state) {
      return state.products.slice(2, 8)
    },
    getOneProduct: (state) => (id) => {
      var product = state.products.find(function (obj) {
        return obj.id === parseInt(id)
      })
      return product
    },
    getFilteredProducts: (state) => (category) => {
      return state.products.filter(function (item) {
        return item.category === category
      })
    },
    getSearchProducts: (state) => (search) => {
      // var self = this
      return state.products.filter(function (cust) {
        return cust.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 || cust.category.toLowerCase().indexOf(search.toLowerCase()) >= 0 || cust.color.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
        cust.description.toLowerCase().indexOf(search.toLowerCase()) >= 0
      })
    },
    inCart: (state) => {
      return state.cart
    }
  }
})
