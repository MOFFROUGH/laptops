<template>
  <v-layout class="mt-5">
    <v-flex xs12>
      <div class="primary lighten-4 elevation-2">
        <v-toolbar flat dense class="primary darken-2" dark>
          <v-toolbar-title>Contact me</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>
        <div class="pa-3">
          <v-layout row wrap>
            <v-flex xs12 sm4>
              <div class="headline">
                <v-icon>face</v-icon> <a href="https://mymathkings.com">Portfolio</a>
              </div>
              <div class="headline">
                <v-icon>phone</v-icon> +254 706 798820
              </div>
              <div class="headline">
                <v-icon>email</v-icon> moffmu@gmail.com
              </div>
              <div class="headline">
                <v-icon>build</v-icon> <a href="https://mymathkings.com">Github</a>
              </div>
            </v-flex>
            <v-flex xs12 sm8>
              <form onkeypress.enter="login">
              <v-flex>
                <v-text-field
                  name="email"
                  label="Enter your Email"
                  id="email"
                  type="email"
                  v-model="contact.email"
                ></v-text-field>
                <v-text-field
                  name="name"
                  label="Enter your name"
                  id="name"
                  type="text"
                  v-model="contact.name"
                ></v-text-field>
                <v-text-field
                  name="message"
                  label="Enter your message"
                  id="message"
                  multi-line
                  v-model="contact.message"
                ></v-text-field>
              </v-flex>
              <v-btn block @click="login" color="success">Send Email</v-btn>
              <!-- <router-link :to="{ name: 'forgotpassword'}">Forgot Password</router-link>
              <br />
              <router-link :to="{ name: 'register'}">New to eCatalog, Register Here</router-link> -->
              </form>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
// import authService from '@/services/auth/authService'
export default {
  data () {
    return {
      contact: {
        email: '',
        name: '',
        message: ''
      },
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        // const response = await authService.login(this.contact)
        // Update the store
        // update the token and auth state
        // update user
        // update the category /* promoter, publisher, investor, admin */
        // redirect based on category /* make category equal to the route names of each category */
        // Router push to category
        console.log('a')
      } catch (e) {
        // alertify and sweet alert the error out
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
