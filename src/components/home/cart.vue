<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title class="title"> My Cart </v-card-title>
          <v-card-actions>
            <v-layout row wrap>
              <v-flex xs12>
                <table>
                  <tbody>
                    <tr v-for="item in products">
                      <td>
                        {{item.name}}
                      </td>
                      <td>
                        {{item.quantity}}
                      </td>
                      <td>
                        {{item.price}}
                      </td>
                      <td>
                        {{item.price * item.quantity}}
                      </td>
                      <td>
                        <v-btn flat @click="removeFromCart(item.id)"><v-icon color="red">delete</v-icon></v-btn>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Gross Total:
                      </td>
                      <td>
                        {{total *.84}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        VaT:
                      </td>
                      <td>
                        {{total *.16}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Total:
                      </td>
                      <td>
                        {{total}}
                      </td>
                    </tr>
                  </tbody>
                </table>
            <!-- <div v-for="item in products">
              <span class='headline ml-2 mb-1'>{{item.name}}</span>
              <span class='headline ml-2 mb-1'>{{item.quantity}}</span>
              <span class='headline ml-2 mb-1'>{{item.price}}</span>
              <span class='headline ml-2 mb-1'>{{item.price * item.quantity}}</span>
              <hr />
            </div> -->
          </v-flex>
          </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers:
      [
        { text: 'Name', value: 'name' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Amount', value: 'price' },
        { text: 'Remove', value: '' }
      ],
      search: '',
      dialog: false
    }
  },
  computed: {
    products () { return this.$store.getters.inCart },
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    removeFromCart (id) {
      this.$store.dispatch('removeFromCart', id)
    }
  }
}
</script>

<style lang="css">
table {
  margin: 0;
  padding: 15px;
  font-weight: 600;
  font-size: 20px;
}
td{
  margin : 5px;
  padding: 5px;
}
</style>
