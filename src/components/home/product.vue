<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <h1>{{product.name |capitalize}}-{{product.color|capitalize}}</h1>
        <img :src="product.src" />
      </v-flex>
      <v-flex xs12 sm6>
        <h1>Description</h1>
        <p>
          {{product.description|capitalize}}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex class="mt-1">
        <v-btn round block large color ="orange"><v-icon>shopping_cart</v-icon>Buy now</v-btn>
        <v-btn round block small color ="green" to="/products">Back</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      product: null
    }
  },
  created () {
    this.product = this.$store.getters.getOneProduct(this.id)
    console.log(this.product)
    console.log(this.id)
  }
}
</script>

<style lang="css">
</style>
