<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <v-app-bar
        class="rounded-corners"
        fixed
        flat
        dark
        hide-on-scroll
    >

      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="48" height="48"
           viewBox="0 0 172 172"
           style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-size="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M111.08333,53.75h-89.58333v86c0,7.88333 6.45,14.33333 14.33333,14.33333h60.91667c7.88333,0 14.33333,-6.45 14.33333,-14.33333z" fill="#455a64"></path><path d="M96.75,10.75h-60.91667c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v32.25h89.58333v-32.25c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333z" fill="#263238"></path><path d="M96.75,46.58333h-60.91667c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-17.91667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h60.91667c2.15,0 3.58333,1.43333 3.58333,3.58333v17.91667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#9ccc65"></path><rect x="24" y="9" transform="scale(3.58333,3.58333)" width="2" height="2" fill="#33691e"></rect><rect x="20" y="9" transform="scale(3.58333,3.58333)" width="2" height="2" fill="#33691e"></rect><path d="M46.58333,78.83333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M71.66667,78.83333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M46.58333,100.33333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M71.66667,100.33333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M46.58333,121.83333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M71.66667,121.83333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M46.58333,143.33333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M71.66667,143.33333h-10.75c-2.15,0 -3.58333,-1.43333 -3.58333,-3.58333v-7.16667c0,-2.15 1.43333,-3.58333 3.58333,-3.58333h10.75c2.15,0 3.58333,1.43333 3.58333,3.58333v7.16667c0,2.15 -1.43333,3.58333 -3.58333,3.58333z" fill="#78909c"></path><path d="M82.41667,114.66667v-3.58333c0,0 -8.127,5.0955 -11.77483,9.5675c-3.2465,3.65858 -3.65858,8.25242 0,13.1365c0,0 15.35817,34.62933 33.27483,34.62933h25.542c13.41242,0 24.62467,-10.87542 24.62467,-24.27708c0,0 0,-13.65608 0,-29.47292z" fill="#ffcc80"></path><path d="M82.41667,130.978c0,4.79092 4.03842,8.71108 8.95833,8.71108c4.93783,0 8.95833,-3.92017 8.95833,-8.71108v-57.78125c0,-4.78017 -4.0205,-8.69675 -8.95833,-8.69675c-4.91992,0 -8.95833,3.91658 -8.95833,8.69675z" fill="#ffcc80"></path><path d="M100.33333,131.04967c0,4.79092 4.03842,8.7075 8.95833,8.7075c4.93783,0 8.95833,-3.91658 8.95833,-8.7075v-25.72475c0,-4.78017 -4.0205,-8.69675 -8.95833,-8.69675c-4.91992,0 -8.95833,3.91658 -8.95833,8.69675z" fill="#ffcc80"></path><path d="M118.25,130.978c0,4.79092 4.03842,8.71108 8.95833,8.71108c4.93783,0 8.95833,-3.92017 8.95833,-8.71108v-25.53125c0,-4.78017 -4.0205,-8.69675 -8.95833,-8.69675c-4.91992,0 -8.95833,3.91658 -8.95833,8.69675z" fill="#ffcc80"></path><path d="M136.16667,131.04967c0,4.79092 4.03842,8.7075 8.95833,8.7075c4.93783,0 8.95833,-3.91658 8.95833,-8.7075v-22.02317c0,-4.77658 -4.0205,-8.69317 -8.95833,-8.69317c-4.91992,0 -8.95833,3.91658 -8.95833,8.69675z" fill="#ffcc80"></path><path d="M86,73.73783c0.03583,-2.79858 2.45817,-5.04533 5.43233,-5.0095c2.96342,0.02867 5.34633,2.32917 5.31767,5.117c-0.043,2.80575 -10.78225,2.69108 -10.75,-0.1075" fill="#ffebee"></path><path d="M75.16758,116.32575c3.53317,-2.89892 7.24908,-5.24242 7.24908,-5.24242v22.145z" fill="#f2a25a"></path></g></g></svg>

      &nbsp;
      &nbsp;
      <router-link to="/" class="not-for-home">
      <h3 class="d-none d-sm-none d-md-block d-lg-block">Metodos numericos</h3>
      </router-link>
      <v-spacer/>

      <drop-down-menu-nabar class="d-inline-block" :items="items"></drop-down-menu-nabar>
      <v-divider
          class="d-none d-sm-none d-md-block d-lg-block"
          vertical></v-divider>

      <v-btn
          icon
          @click="changeTheme"
          class=" ml-2 d-sm-none d-md-block d-lg-block"
      >
        <v-icon
            v-if="showButtonTheme"
        >{{!$vuetify.theme.dark ? 'mdi-weather-night ' : 'mdi-weather-sunny'}}</v-icon>
      </v-btn>
    </v-app-bar>


    <v-main class="mt-15">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import DropDownMenuNabar from "./components/navbar/DropDownMenuNavbar";
export default {
  components: {DropDownMenuNabar},
  data() {
    return {
      drawer:false,
      showButtonTheme:true,
      items:[
        {
          title:"INICIO",
          icon:"mdi-home",
          path:"/"
        },
        {
          title:"EULER",
          icon:"mdi-chart-timeline-variant-shimmer",
          path:"euler"
        },
        {
          title:"DIFERENCIACIÓN NUMERICA",
          icon:"mdi-chart-bell-curve-cumulative",
          path:"dnumeric"
        },
        {
          title:"NEWTON-COTES",
          icon:"mdi-chart-areaspline",
          path: "newton"
        },
        {
          title: "Cramer",
          icon:"mdi-counter",
          path:"https://g14wx.github.io/metodos_numericos_cramer_simple_solution/Cramer.html",
        },
        {
          title: "Newton Raphson",
          icon:"mdi-counter",
          path:"https://metodos-numericos-newton-raphson.vercel.app/",
        },
        {
          title:"Matriz Inversa",
          icon:"mdi-arrange-send-to-back",
          path: "matriz"
        },
        {
          title:"ACERCA DE",
          icon:"mdi-help",
          path: "about"
        }
      ]
    }
  },
  methods:{
    showNavigationDrawer(){
      this.drawer = !this.drawer;
    },
    updatePath(path){
      if (path === '/' && '/'===this.$router.currentRoute.path){
        return;
      }
      if (`/${path}` !== this.$router.currentRoute.path){
        this.$router.push(path);
      }
    },
    changeTheme(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.showButtonTheme=false;
      setTimeout(()=>this.showButtonTheme=true,10);
    }
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  mounted() {
    document.getElementsByClassName("v-main__wrap")[0].classList.add("d-flex");
    document.getElementsByClassName("v-main__wrap")[0].classList.add("justify-center");
    document.getElementsByClassName("v-main__wrap")[0].classList.add("allign-center");
  }

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.not-for-home{
  text-decoration: none;
  color:white !important;
}
</style>
