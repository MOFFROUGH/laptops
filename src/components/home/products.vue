<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <!-- <h1>{{this.$route.query.category ? this.$route.query.category +' products' :'All products'}}</h1> -->
        <v-card color="grey">
          <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
            <v-layout row wrap>
              <v-flex  md3  sm4  xs12  v-for="product in products"  :key="product.id" class="pl-1">
                <v-card flat class="cardproduct">
                  <v-layout row wrap>
                    <v-flex xs12 class="text-xs-center">
                      <v-card-media  :src="product.src" height="250px" class="cardproduct pa-1 ma-1"></v-card-media>
                    </v-flex>
                  </v-layout>

                  <v-card-title primary-title>
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
                  <v-card-actions>
                    <v-btn class="viewbutton" block responsive round outline small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                    <v-btn class="viewbutton" v-show="$vuetify.breakpoint.smAndUp"round responsive small color="red" dark @click="addtocart(product.id)"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex v-if="products.length === 0">
                <h1>Ooops!</h1>
                <h2>No results Found for '{{this.$route.query.category || this.$route.query.search }}' in our Store'!!</h2>
                <h3>Try Searching using another keyword or category</h3>
                <h3><v-btn flat to="/products" color="white">Take me home</v-btn></h3>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      size: 'xs',
      filter: null
    }
  },
  methods: {
    addtocart (product) {
      this.$store.dispatch('addtocart', product)
    }
  },
  computed: {
    products () {
      if (this.$route.query.category) {
        return this.$store.getters.getFilteredProducts(this.$route.query.category)
      }
      if (this.$route.query.search) {
        return this.$store.getters.getSearchProducts(this.$route.query.search)
      }
      return this.$store.getters.getProducts
    }
  }
}
</script>

<style lang="css">
.cardproduct{
  border: #f0a solid 1px;
  border-radius: 10px;

}
.price{
  background-color: lightgrey;
  text-align: center;
  font-weight: 600;
  margin: 0 auto;
  padding: 5px;
}
</style>
