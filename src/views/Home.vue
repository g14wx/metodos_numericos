<template>
  <v-container class="d-flex justify-center align-center">
    <v-row>
      <v-col cols="12">
        <h1 :class="{'white--text':$vuetify.theme.dark,'black--text':!$vuetify.theme.dark}" class="ml9">
  <span class="text-wrapper">
    <span class="letters">Metodos Numericos</span>
  </span>
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'Home',
  components: {},
  mounted() {
    //document.getElementsByClassName("v-main__wrap")[0].classList.add("d-flex");
// Wrap every letter in a span
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i+1)
        }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }
}
</script>

<style>
.ml9 {
  position: relative;
  font-weight: 200;
  font-size: 4em;
}

.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml9 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
}
</style>
