<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />-->

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="30" height="30"
             viewBox="0 0 172 172"
             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M97.73542,17.2c-35.98813,0 -40.02243,40.1964 -42.12656,51.6h-18.73412l-2.38516,11.46667h19.13724c-10.63533,63.20427 -15.1902,67.54583 -20.4362,67.54583c-4.75867,-13.31853 -8.2182,-17.58073 -15.43073,-17.58073c-10.1136,0 -12.17214,8.34119 -12.17214,11.50026c0,7.09787 5.87891,13.06797 17.34557,13.06797c42.44387,0 45.82277,-34.81853 52.47344,-74.53333h19.58515l2.39636,-11.46667h-20.23464c2.12707,-16.48907 4.41628,-40.33543 10.68281,-44.6125c1.03773,2.752 4.85793,17.58073 15.45313,17.58073c11.3864,0 12.34011,-10.61993 12.34011,-11.86979c-0.01147,-3.80693 -2.15627,-12.69844 -17.89427,-12.69844zM122.34844,91.73333c-5.8652,0 -13.31065,3.5544 -16.57292,5.02786l-1.19818,4.98308c0.90587,-0.33253 5.16923,-1.65729 7.0211,-1.65729c6.49013,0 7.58027,2.98761 10.7164,13.59427c0.7396,2.50547 1.75225,6.20033 2.95625,11.11953c-1.3416,1.9092 -5.70377,6.92676 -6.24843,7.36823c-1.41613,-0.516 -5.8429,-2.03802 -9.52943,-2.03802c-8.41653,0 -10.39167,7.30283 -10.39167,10.57083c0,2.91827 2.01571,8.36484 7.98411,8.36484c8.46813,0 10.88734,-6.67441 19.3612,-19.31641c2.236,9.0816 2.7829,19.31641 16.6289,19.31641c5.92253,0 12.97839,-2.87517 16.56172,-4.42317l1.19817,-4.98308c0,0 -3.99989,1.64609 -7.00989,1.64609c-8.7204,0 -8.63037,-6.36436 -13.78464,-25.30729c1.4104,-1.9436 5.14522,-6.79526 6.34922,-7.59219c1.23267,0.43573 5.65996,1.98203 9.50703,1.98203c2.89533,0 10.36927,-1.86459 10.36927,-10.45885c0,-2.96414 -1.76918,-8.19688 -7.98411,-8.19688c-9.83267,0 -14.86985,13.49573 -19.45078,19.37239c-2.494,-12.48147 -5.11413,-19.37239 -16.48333,-19.37239z"></path></g></g></svg>
      &nbsp;
        Project number
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>



        <v-main>
          <HelloWorld/>
        </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
