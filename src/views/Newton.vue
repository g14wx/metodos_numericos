<template>
  <page-container-skeleton
      :title="title"
      :items="items"
      :headers="headers"
      v-model="showResultados"
  >
    <template v-slot:ilustration>
      <div v-if="showResultadosGraph" class="plot-container plotly"></div>
      <v-img v-else src="/ilustrations/graphs.svg"></v-img>
    </template>
    <template v-slot:form>
      <v-form ref="form">
        <v-container v-animate-css="'fadeInRight'">
          <v-row>
            <v-col cols="12">
              <v-text-field
                  label="Función"
                  prepend-inner-icon="mdi-function-variant"
                  v-model="expresion"
                  :rules="rules"
                  :clearable="true"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <v-text-field
                  type="number"
                  label="Limite Inferior"
                  prepend-inner-icon="mdi-arrow-bottom-left-thick "
                  :rules="rules"
                  v-model="xi"
                  :clearable="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <v-text-field
                  type="number"
                  label="Limite Superior"
                  prepend-inner-icon="mdi-arrow-top-right-thick "
                  :rules="rules"
                  v-model="xs"
                  :clearable="true"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <v-text-field
                  type="number"
                  label="N de triangulos"
                  prepend-inner-icon="mdi-alpha-h-box-outline "
                  :rules="rules"
                  v-model="ntrapecios"
                  :clearable="true"
              ></v-text-field>
            </v-col>

          </v-row>
          <v-row>
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
      </v-form>
    </template>
  </page-container-skeleton>
</template>

<script>
import PageContainerSkeleton from "../layouts/PageContainerSkeleton";
import * as math from 'mathjs';
import Plotly from "plotly.js";

export default {
  name: "Newton",
  data() {
    return {
      showResultadosGraph:false,
      showResultados:false,
      canDeploy:false,
      items:[],
      headers:[
        {text: 'Iteración', value: 'i'},
        {text: 'x', value: 'x'},
        {text: 'f(x)', value: 'f'},
      ],
      loadButton:false,
      title: "Método de Newton-Cotes",
      expresion:"2 * 2 * 1",
      xi:1,
      xs:3,
      ntrapecios:10,
      rules: [
        v => !!v || 'Este campo es necesario',
      ],

    }
  },
  methods:{
    calcular(){
      if ( !this.$refs.form.validate()){
        this.$notify({
          group:"foo",
          title:"Espera!, algunos datos faltan!",
          text:"Rellena los campos faltantes!",
          type:"warning"
        });
        return;
      }
      this.drawGraph();

      if (!this.canDeploy){
        this.$notify({
          group: 'foo',
          title: 'Error',
          text: 'Por favor Ingrese una expresión valida!',
          type:"error",
          position:'top left'
        });
      }

      this.showResultadosGraph=false;
      this.$notify({
        group: 'foo',
        title: 'Analizando',
        text: 'Por favor espere...',
        type:"info",
        position:'top left'
      });
      this.loadButton=true;
      this.showResultados = false;
      this.items = [];


      //Obteniendo variables
      var Xi = parseFloat(this.xi);
      var Xs = parseFloat(this.xs);
      var n =  parseFloat(this.ntrapecios);
      var expression = this.expresion;


      //Para ver en donde se van a meter las tablas
      //Inicio iteración
      let i = 0;

      //Calculando (b-a)
      let h = (Xs - Xi)/n;

      //Trapecio
      let trapecio = Xi;

      //Calculado funcion en F(Xi)
      var scope = {
        x: Xi,
      };

      var fXi = parseFloat(math.evaluate(expression, scope));

      //Calcular funcion en F'(Xi) derivado
      scope = {
        x: Xi,
      };

      this.items.push({
        "i":i,
        "x":parseFloat(Xi).toFixed(6),
        "f":parseFloat(fXi).toFixed(6)
      });
      //contando iteraciones
      i += 1;

      let arrfXi = [];

      //DO
      do {
        //Nuvo trapecio
        trapecio += h;

        //Calculado funcion en F(Xi)
        scope = {
          x: trapecio,
        };
        let fXiNuevo = parseFloat(math.evaluate(expression, scope));
        arrfXi.push(fXiNuevo);

        //Añadiento rows

        this.items.push({
          "i":i,
          "x":parseFloat(trapecio).toFixed(6),
          "f":parseFloat(fXiNuevo).toFixed(6)
        });
        //contando iteraciones
        i += 1;
      } while (i<=n);
      arrfXi.pop();
      let sumafXi=0;
      if (arrfXi.length>=2)
        sumafXi = arrfXi.reduce( (e,t) => (t+=e));

      let totalIntegral = (Xs - Xi) * ((Xi + (2 * sumafXi) + Xs)/ (2 * n));

      //Total intngral

      this.items.push({
        "x":"Integral",
        "f":parseFloat(totalIntegral).toFixed(6)
      });

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
    },
    drawGraph(){
      this.showResultadosGraph=false;
      try {
        // compile the expression once
        const expression =this.expresion;
        const expr = math.compile(expression)

        // evaluate the expression repeatedly for different values of x
        const xValues = math.range(-10, 10, 0.5).toArray()
        const yValues = xValues.map(function (x) {
          return expr.evaluate({x: x})
        })

        // render the plot using plotly
        const trace1 = {
          x: xValues,
          y: yValues,
          type: 'scatter'
        }
        const data = [trace1]
        Plotly.newPlot('plot', data);
        this.showResultadosGraph=true;
        this.canDeploy=true;
      }
      catch (err) {
        this.canDeploy=false;
        this.$notify({
          group: 'foo',
          title: 'Error',
          text: 'Por favor Ingrese una expresión valida! [0]',
          type:"error",
          position:'top left'
        });
      }
    }
},
  components: {
    PageContainerSkeleton
  }
}
</script>

<style scoped>

</style>
