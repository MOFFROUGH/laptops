<template>
  <v-app id="inspire">
    <v-container fluid >
      <v-progress-linear v-bind:indeterminate="true" height="1" v-show="loading"></v-progress-linear>
      <v-progress-circular class="wait" indeterminate :size="100" :width="2" color="purple" v-show="loading">Loading...</v-progress-circular>

      <v-navigation-drawer fixed   :clipped="$vuetify.breakpoint.lgAndUp"  app v-model="drawer">
        <v-list dense>
          <v-text-field flat  solo-inverted append-icon="search" v-model="search" label="Search" @keyup.enter="filterby" class="mb-2 mt-1 ma-1" ></v-text-field>
          <template v-for="item in items">
            <v-layout row  v-if="item.heading"  align-center  :key="item.heading"  >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group v-else-if="item.children"  v-model="item.model" :key="item.text" :prepend-icon="item.model ?item.icon : item['icon-alt']" append-icon="">
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-for="(child, i) in item.children" :key="i" @click="moveto(child.to, child.filter)" class="ml-3">
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content >
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="move(item.to)" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <div>
          <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true" class="mt-2">
            <v-carousel-item v-for="product in featuredProducts"  src=""  :key="product.id"class="responsive">
              <v-card flat>
                <v-btn class="viewbutton" block round outline small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                <v-btn class="viewbutton" block round small color="red" dark :to="'/addtocart/'+product.id"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
                <v-card-media :src="product.src" height="200px"></v-card-media>
                <v-card-title>
                  <div>
                    <h3 class="title mb-0">{{product.name}}</h3>
                    <br />
                    <div class="price">
                      <span class="title">{{product.price |currency('Ksh.',0,{ spaceBetweenAmountAndSymbol: true })}}</span>
                      <br />
                      <span class="caption">{{product.color}}</span>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
              <span class="caption">{{product.description}}</span>
            </v-carousel-item>

          </v-carousel>
        </div>
      </v-navigation-drawer>
      <v-toolbar color="primary darken-3" dark app :clipped-left="$vuetify.breakpoint.smAndUp" fixed >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer" v-show="$vuetify.breakpoint.mdAndDown"></v-toolbar-side-icon>
          <span class="" @click="move('/')" style="cursor:pointer;">ECATALOG</span>

        </v-toolbar-title>
        <!-- <v-text-field flat solo-inverted prepend-icon="search" v-model="search" label="Search" @keyup.enter="filterby" class="hidden-sm-and-down" ></v-text-field> -->
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>lock_open</v-icon>
        </v-btn>
        <v-btn icon to="/cart">
          <v-icon>shopping_cart</v-icon>
          {{inCart.length}}
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content v-show="!loading">
        <router-view></router-view>
      </v-content>

      <v-footer :fixed="fixed" app>
        <v-spacer></v-spacer>
        <span>ECatalog &copy; {{new Date().getFullYear()}}</span>
        <v-spacer></v-spacer>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: '',
    fixed: false,
    drawer: null,
    items: [
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Models',
        model: true,
        children: [
          { text: 'All', to: '/products', filter: '' },
          { text: 'Dell', to: '/products', filter: 'dell' },
          { text: 'HP', to: '/products', filter: 'hp' },
          { text: 'Others ', to: '/products', filter: 'others' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Accessories',
        model: true,
        children: [
          // { text: 'All', to: '/products', filter: 'accessories' },
          { text: 'chargers', to: '/products', filter: 'chargers' },
          { text: 'HDD', to: '/products', filter: 'hdd' },
          { text: 'Earphones ', to: '/products', filter: 'earphones' }
        ]
      },
      { icon: 'chat_bubble', text: 'Send feedback', to: '/contacts' }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    move (to) {
      this.$router.push(to)
    },
    moveto (to, filter) {
      // console.log(filter)
      this.$router.push({
        name: 'products',
        query: {
          category: filter
        }
      })
    },
    filterby () {
      this.$router.push({
        name: 'products',
        query: {
          search: this.search
        }
      })
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    },
    featuredProducts () {
      return this.$store.getters.getFeaturedProducts
    },
    inCart () { return this.$store.getters.inCart }
  }
}
</script>
<style scoped>
.wait {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
