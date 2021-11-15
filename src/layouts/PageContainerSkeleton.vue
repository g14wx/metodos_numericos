<template>
  <v-container class="d-flex justify-center align-center">
    <v-row>
      <v-col cols="12">
        <v-card
            v-animate-css="'fadeInDown'"
            class="stylus-v-card"
            elevation="0"
        >
          <v-card-title v-animate-css="animationTitle">{{title}}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col v-animate-css="animateFromDown" cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 pa-15">
                  <slot name="ilustration"></slot>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <v-card>
                    <v-card-title
                        v-animate-css="animateTextRight"
                    >Datos
                    </v-card-title>
                    <v-card-text>
                      <slot name="form"></slot>
                      <v-btn color="green" class="mt-5" v-if="showResultados" @click="$vuetify.goTo('.v-data-table__wrapper', {
                        duration:1000,
                        offset:-129,
                        easing:'easeInQuad',
                      })">
                        <v-icon>mdi-arrow-down-left-bold </v-icon>
                        ir a ver los resultados</v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-divider v-if="showResultados" class="mt-15 mb-10"></v-divider>
              <v-row v-animate-css="'fadeInDown'" v-if="showResultados">
                <v-col>
                  <v-card>
                    <v-card-title>Resultados</v-card-title>
                    <v-card-text>

                      <table-component
                          :items="items"
                          :headers="headers"
                      ></table-component>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>


            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TableComponent from "../components/TableComponent";

export default {
  props:{
    value:{
      required:true,
      type:Boolean
    },
    title:{
      required:true,
      type:String
    },
    headers:{
      required:true,
      type:Array
    },
    items:{
      required:true,
      type:Array
    }
  },
  name: "PageContainerSkeleton",
  data(){
    return{
      animationTitle: {
        classes: 'fadeInLeft',
        delay: 10,
        duration: 1000
      },
      animateFromDown: {
        classes: 'fadeInUp',
        delay: 400,
        duration: 1000
      },
      animateTextRight: {
        classes: 'fadeInRight',
        delay: 100,
        duration: 1000
      },
    }
  },
  computed:{
    showResultados:{
      get(){
          // eslint-disable-next-line vue/no-async-in-computed-properties
          setTimeout(()=>{
            try{
              let n = document.getElementsByTagName("tbody")[0].children.length;
              document.getElementsByTagName("tbody")[0].children[n-1].style.backgroundColor="green";
            }catch (e) {
              console.warn(e);
            }
          },1000);
        return this.value;
      },
    }
  },
  components:{
    TableComponent
  }
}
</script>

<style scoped>

</style>
