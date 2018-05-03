<template>
  <div class="white elevation-2 mt-2">
    <v-toolbar flat dense class="green darken-2" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <span>Mpesa Till Number: 745673</span> -->
      <slot name="action" />
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
