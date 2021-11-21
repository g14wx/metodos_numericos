<template>
  <page-container-skeleton
      :title="title"
      :items="items"
      :headers="headers"
      v-model="showResultados"
  >
    <template v-slot:ilustration>
      <v-img src="/ilustrations/calculator.svg"></v-img>
    </template>
    <template v-slot:form>
      <v-container v-animate-css="'fadeInRight'">
        <v-row>
          <v-col cols="12">
            <v-autocomplete
                v-model="opcion"
                :items="opciones"
                item-text="title"
                prepend-inner-icon="mdi-function-variant"
                item-value="id"
                filled
                label="Tipo de derivada"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                label="valores en X (separados por comas)"
                placeholder="(separados por comas)"
                prepend-inner-icon="mdi-alpha-x-box-outline"
                :rules="rules"
                v-model="xvalues"
                :clearable="true"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                label="valores en Y (separados por comas)"
                placeholder="(separados por comas)"
                prepend-inner-icon="mdi-alpha-y-box-outline"
                :rules="rules"
                v-model="yvalues"
                :clearable="true"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-progress-circular
                v-if="loadButton"
                indeterminate
                color="purple"
            ></v-progress-circular>
            <v-btn @click="calcular" v-else color="primary">
              <v-icon>mdi-check</v-icon>
              Calcular
            </v-btn>
            <notifications position="top right" group="foo"/>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </page-container-skeleton>
</template>

<script>
import PageContainerSkeleton from "../layouts/PageContainerSkeleton";

export default {
  name: "Dnumeric",
  data() {
    return {
      showResultados:false,
      items:[],
      headers:[
        {text: 'N', value: 'n'},
        {text: 'X', value: 'x'},
        {text: 'Y', value: 'y'},
      ],
      loadButton:false,
      title: "Diferenciación Numerica",
      opcion:1,
      opciones:[
        {
          title:"Progresiva",
          id:1
        },
        {
          title:"Regresiva",
          id:2
        },
        {
          title:"Centrada",
          id:3
        }
      ],
      rules: [
        v => !!v || 'Este campo es necesario',
      ],
      xvalues:"0,0.25,0.5,0.75,1",
      yvalues:"1.2,1.10352,0.925,0.63633,0.2"
    }
  },
  methods:{
    calcular(){
      const regex = /,/g;

      this.items=[];
      this.showResultados=false;
      this.$notify({
        group: 'foo',
        title: 'Analizando',
        text: 'Por favor espere...',
        type:"info",
        position:'top left'
      });


      let arrX = this.xvalues.split(regex);
      let arrY = this.yvalues.split(regex);

      if(arrX.length == 5 && arrY.length == 5){

        let i = -2, k = 1;

        this.items.push({
          "n":i,
          "x":parseFloat(arrX[0]).toFixed(6),
          "y":parseFloat(arrY[0]).toFixed(6)
        });
        i += 1;

        do {

          this.items.push({
            "n":i,
            "x":parseFloat(arrX[k]).toFixed(6),
            "y":parseFloat(arrY[k]).toFixed(6)
          });
          k++;

          i += 1;
        } while (k<arrY.length);

        let fXim2 = parseFloat(arrY[0]);
        let fXim1 = parseFloat(arrY[1]);
        let fXi   = parseFloat(arrY[2]);
        let fXi1  = parseFloat(arrY[3]);
        let fXi2  = parseFloat(arrY[4]);

        let Xi   = parseFloat(arrX[2]);
        let Xi1  = parseFloat(arrX[3]);

        let integral = 0
        let  h = Xi1 - Xi;

        if (this.opcion == 1){
          integral = (((-fXi2) + (4*fXi1) - (3*fXi))/ (2*h));
        }else if (this.opcion == 2){
          integral = (((3 * fXi) - (4*fXim1) + (fXim2))/ (2*h));
        }else if (this.opcion == 3){
          integral = (((-fXi2) + (8*fXi1) - (8*fXim1) + (fXim2))/ (12*h));
        }else{
          this.$notify({
            group: 'foo',
            title: 'Hey!',
            text: 'Seleccione una opcion de derivada!',
            type:"warning",
            position:'bottom right'
          });
        }

        this.items.push({
          "x":`Derivada ${this.opciones[this.opcion-1].title}`,
          "y":parseFloat(integral).toFixed(6)
        });

      }else{
        this.$notify({
          group: 'foo',
          title: 'Hey!',
          text: 'Ingrese correctamente los 5 valores necesarios para continuar!',
          type:"warning",
          position:'bottom right'
        });
      }


      setTimeout(() => {
        this.$notify({
          group: 'foo',
          title: 'Hecho!',
          text: 'Finalizado!',
          type:"success",
          position:'bottom right'
        });
        this.showResultados = true;
        this.loadButton=false;
      }, 1000);

    }
  },
  components: {
    PageContainerSkeleton
  }
}
</script>

<style scoped>

</style>
