<template>
  <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="-1"
      class="elevation-1"
  >
  </v-data-table>
</template>

<script>
export default {
  props:{
    headers:{
      required:true,
      type:Array
    },
    items:{
      required:true,
      type:Array
    }
  },
  name: "table-component"
}
</script>

<style scoped>

</style>
