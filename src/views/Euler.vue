<template>

  <page-container-skeleton
      :title="title"
      :items="items"
      :headers="headers"
      v-model="showResultados"
  >
    <template v-slot:ilustration>
    <v-img src="/ilustrations/pi.svg"></v-img>
    </template>
    <template v-slot:form>
      <v-container v-animate-css="'fadeInRight'">
        <v-row>
          <v-col cols="12">
            <v-text-field
                v-animate-css="animationFirstTextInput"
                label="Derivada"
                prepend-inner-icon="mdi-function-variant"
                v-model="derivada"
                :rules="rules"
                :clearable="true"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                type="number"
                v-animate-css="animationFirstTextInput"
                label="Limite Inferior"
                prepend-inner-icon="mdi-arrow-bottom-left-thick "
                :rules="rules"
                v-model="linferior"
                :clearable="true"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                type="number"
                v-animate-css="animationFirstTextInput"
                label="Limite Superior"
                prepend-inner-icon="mdi-arrow-top-right-thick "
                :rules="rules"
                v-model="lsuperior"
                :clearable="true"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                type="number"
                v-animate-css="animationFirstTextInput"
                label="H"
                prepend-inner-icon="mdi-alpha-h-box-outline "
                :rules="rules"
                v-model="hvalue"
                :clearable="true"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <v-text-field
                type="number"
                v-animate-css="animationFirstTextInput"
                label="Xf"
                v-model="xfvalue"
                prepend-inner-icon="mdi-alpha-x-box-outline"
                :rules="rules"
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
            <notifications position="bottom right" group="foo"/>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </page-container-skeleton>

</template>

<script>
import * as math from 'mathjs';
import PageContainerSkeleton from "../layouts/PageContainerSkeleton";

export default {
  name: "Euler.vue",
  data() {
    return {
      title: "Metodo de Euler",
      loadButton:false,
      headers: [
        {
          text: 'iteración',
          align: 'start',
          sortable: false,
          value: 'iteracion',
        },
        {text: 'Xn', value: 'xn'},
        {text: 'Yn', value: 'yn'},
        {text: '(Yn+1)*', value: 'funcvalue'},
        {text: 'Xn+1', value: 'xnvalue'},
        {text: 'Yn+1', value: 'ynvalue'},
      ],
      animationFirstTextInput: {
        classes: 'bounce',
        delay: 20,
        duration: 1000
      },
      rules: [
        v => !!v || 'Este campo es necesario',
      ],
      linferior: 1,
      lsuperior: 1,
      derivada: "1 * x * y",
      hvalue: 0.1,
      xfvalue: 0.5,
      showResultados: false,
      Ynplus1asterisk: 0,
      Xnplus1: 0,
      fXnplus1: null,
      Ynplus1: 0.0,
      i: 0,
      Xn: 0,
      Yn: 0,
      items: []
    };
  },
  methods: {
    calcular() {
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
      this.Xn = this.linferior;
      this.Yn = this.lsuperior;

      this.i = 0;
      var fXn = parseFloat(math.evaluate(this.derivada, this.scope));
      this.Ynplus1asterisk = this.Yn + this.hvalue * fXn;
      this.Xnplus1 = this.Xn + this.hvalue;

      this.fXnplus1 = parseFloat(math.evaluate(this.derivada, this.scope2));
      this.Ynplus1 = this.Yn + (this.hvalue / 2) * (fXn + this.fXnplus1);
      //attach first row result
      this.items.push({
        "iteracion": this.i,
        "xn": parseFloat(this.Xn).toFixed(2),
        "yn": parseFloat(this.Yn).toFixed(2),
        "funcvalue": parseFloat(this.Ynplus1asterisk).toFixed(2),
        "xnvalue": parseFloat(this.Xnplus1).toFixed(2),
        "ynvalue": parseFloat(this.Ynplus1).toFixed(2)
      });

      do {
        this.i += 1;
        this.Xn = this.Xnplus1;

        this.Yn = this.Ynplus1;
        var fXn2 = parseFloat(math.evaluate(this.derivada, this.scope));
        this.Ynplus1asterisk = this.Yn + this.hvalue * fXn2;
        this.Xnplus1 = this.Xn + this.hvalue;

        this.fXnplus1 = parseFloat(math.evaluate(this.derivada, this.scope2));
        this.Ynplus1 = this.Yn + ((this.hvalue / 2) * (fXn2 + this.fXnplus1))


        // attach to items array
        this.items.push({
          "iteracion": this.i,
          "xn": parseFloat(this.Xn).toFixed(2),
          "yn": parseFloat(this.Yn).toFixed(2),
          "funcvalue": parseFloat(this.Ynplus1asterisk).toFixed(2),
          "xnvalue": parseFloat(this.Xnplus1).toFixed(2),
          "ynvalue": parseFloat(this.Ynplus1).toFixed(2)
        });
      } while (this.Xn <= this.xfvalue)
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
  computed: {
    scope() {
      return {
        'x': this.Xn,
        'y': this.Yn,
      };
    },
    scope2() {
      return {
        'x': this.Xnplus1,
        'y': this.Ynplus1asterisk
      }
    }
  },
  components: {
    PageContainerSkeleton,
  },
  mounted() {
    document.getElementsByClassName("v-main__wrap")[0].classList.add("d-flex");
    document.getElementsByClassName("v-main__wrap")[0].classList.add("justify-center");
    document.getElementsByClassName("v-main__wrap")[0].classList.add("allign-center");
  }
}
</script>

<style scoped>
.stylus-v-card {
  border: 1px solid black;
  padding: 10px;
}
</style>
