<template>
  <v-container class="d-flex">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center align-center">
        <h1 class="ml12">Made by Carlos Hernandez</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  mounted() {
    document.getElementsByClassName("v-main__wrap")[0].classList.add("d-flex");
    //animate title

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
          targets: '.ml12 .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });

  }
}
</script>

<style>
.ml12 {
  font-weight: 200;
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.ml12 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
