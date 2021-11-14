<template>
  <v-container class="d-flex">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center align-center">
        <h1
            v-animate-css="'tada'"
        >Carlos Jose Hernandez</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    document.getElementsByClassName("v-main__wrap")[0].classList.add("d-flex");
  }
}
</script>
