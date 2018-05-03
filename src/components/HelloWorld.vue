<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>
          <div>
            <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true">
              <v-carousel-item v-for="product in featuredProducts"  :src="product.src"  :key="product.id"class="responsive">
                <p class="text-xs-center">
                  <span class="red--text display-2 mb-2 text-xs-center">{{product.name}}</span><br />
                  <span class="red--text display-1 text-xs-center">{{product.price |currency('Ksh.',0, { spaceBetweenAmountAndSymbol: true })}}</span><br />
                  <span class="red--text display-1 text-xs-center "><v-btn block round dark large :to="'/product/'+product.id" color ="red" class="itembutton">Buy Now</v-btn></span>
                  <!-- <span class="orange--text display-1 item4">{{product.description | capitalize}}</span> -->
                </p>
              </v-carousel-item>
            </v-carousel>
            </div>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <panel title="Sizzling hot" class="mt-1">
            <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true">
              <v-carousel-item v-for="product in featuredProducts"  :src="product.src"  :key="product.id"class="responsive">
                <v-btn class="viewbutton"  round  small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                <v-btn class="viewbutton"  round small color="red" dark :to="'/addtocart/'+product.id"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
              </v-carousel-item>
            </v-carousel>
          </panel>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <panel title="Top Sellers" class="mt-1">
            <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true">
              <v-carousel-item v-for="product in featuredProducts"  :src="product.src"  :key="product.id"class="responsive">
                <v-btn class="viewbutton"  round  small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                <v-btn class="viewbutton"  round small color="red" dark :to="'/addtocart/'+product.id"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
              </v-carousel-item>
            </v-carousel>
          </panel>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <panel title="Must have" class="mt-1">
            <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true">
              <v-carousel-item v-for="product in featuredProducts"  :src="product.src"  :key="product.id"class="responsive">
                <v-btn class="viewbutton"  round  small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                <v-btn class="viewbutton"  round small color="red" dark :to="'/addtocart/'+product.id"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
              </v-carousel-item>
            </v-carousel>
          </panel>
        </v-flex>
        <v-flex xs12>
          <panel title="ECatalog Featured" class="mt-1">
            <v-carousel fullscreen hide-delimiters v-show="!loading" :lazy="true">
              <v-carousel-item v-for="product in featuredProducts"  :src="product.src"  :key="product.id"class="responsive">
                <v-btn class="viewbutton"  round  small color="green" dark :to="'/product/'+product.id"><v-icon left>remove_red_eye</v-icon>View</v-btn>
                <v-btn class="viewbutton"  round small color="red" dark :to="'/addtocart/'+product.id"><v-icon left>shopping_cart</v-icon>Buy Now </v-btn>
              </v-carousel-item>
            </v-carousel>
          </panel>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    featuredProducts () {
      return this.$store.getters.getFeaturedProducts
    },
    loading () {
      return this.$store.getters.getLoading
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .item {
margin: 0;
position: absolute;
top: 50px;
left: 50px;
} */
/* .item2 {
margin: 0;
position: absolute;
top: 100px;
left: 50px;
}
.item3 {
margin: 0;
position: absolute;
top: 150px;
left: 50px;
}
.item4 {
margin: 0;
position: absolute;
bottom: 50px;
left: 50px;
} */
.itembutton{
  position: absolute;
  bottom:50px;
}
</style>
