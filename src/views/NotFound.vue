<template>
  <v-container class="d-flex justify-center align-center">
    <v-row>
      <v-col cols="12">
        <h1 :class="{'white--text':$vuetify.theme.dark,'black--text':!$vuetify.theme.dark}" class="ml9">
          Not Found
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>
