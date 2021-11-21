<template>
  <v-container class="d-flex justify-center align-center">
    <v-row>
      <v-col cols="12">
        <h1 v-if="showTitle" :class="{'white--text':$vuetify.theme.dark,'black--text':!$vuetify.theme.dark}"
            class="ml9">
          <span class="text-wrapper">
            <span class="letters">Metodos Numericos</span>
          </span>
          <span></span>
        </h1>
        <h1 v-if="showTitle2" :class="{'white--text':$vuetify.theme.dark,'black--text':!$vuetify.theme.dark}" class="ml11">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters">Tan util como abstracto</span>
  </span>
        </h1>

        <!-- EXPLAINED CARD-->
        <page-container-skeleton
            :title="'Math + software = <3'"
            :items="[]"
            :headers="[]"
            v-model="alwaysFalse"
            :for-presentation="true"
            v-if="showCard">
          <template v-slot:ilustration>
            <v-img src="/ilustrations/home.svg"></v-img>
          </template>
          <template v-slot:form>
            En este ciclo logre a comprender ciertas aplicaciones de metodos numericos al software, como este puede ayudar a mejorar
            la calidad de software y como intrinsecamente correlacionadas con todo lo que a el mundo del desarrollo se refiere, espero
            que en un futuro pueda poder aplicar todo lo aprendido este ciclo en un proyecto propio o con fines lucrativos en una empresa
          </template>
        </page-container-skeleton>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import PageContainerSkeleton from "../layouts/PageContainerSkeleton";

export default {
  name: 'Home',
  data() {
    return {
      showTitle: true,
      showTitle2: true,
      showCard:false,
      alwaysFalse:false
    }
  },
  components: {PageContainerSkeleton},
  mounted() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper2 = document.querySelector('.ml11 .letters');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1)
        }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      complete: () => {
        this.showTitle = false;
      }
    }) .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    }).add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml11',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      complete:()=>{
        this.showTitle2=false;
        this.showCard=true;
      }
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

.ml11 {
  font-weight: 700;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 {
  top: 0;
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}

</style>
