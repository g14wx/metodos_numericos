<template>
  <page-container-skeleton
      :title="title"
      :items="items"
      :headers="headers"
      v-model="showResultados"
      :showIlustration.sync="notShowTableMatriz"
  >
    <template v-slot:ilustration>
      <v-img src="/ilustrations/matriz.svg"></v-img>
    </template>
    <template v-slot:form>
      <v-form ref="form">
        <v-container v-animate-css="'fadeInRight'" v-if="!showTableMatriz">
          <v-row>
            <v-col>
              <v-text-field
                  type="number"
                  step="0.1"
                  :label="'Numero de columnas de la matriz'"
                  prepend-inner-icon="mdi-table-column"
                  v-model="cols"
                  :rules="rules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  type="number"
                  step="0.1"
                  :label="'Numero de filas de la matriz'"
                  prepend-inner-icon="mdi-table-row"
                  v-model="rows"
                  :rules="rules"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                  @click="crearTablaParaMatriz"
              >
                Crear tabla
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-animate-css="'fadeInRight'" v-if="showTableMatriz">
          <v-row>
            <v-col>
              <v-progress-circular
                  indeterminate
                  color="purple"
                  v-if="!showtableupdate"></v-progress-circular>
              <v-simple-table v-if="showtableupdate">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th v-for="(index) in cols" :key="`colsfor-${index}`" class="text-left">
                      {{ index }}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="(index) in rows"
                      :key="`$rowsfor-${index}`"
                  >
                    <td v-for="(index2) in cols" :key="`coltextfor-${index2}`">
                      <v-text-field
                          :label="`Campo ${index2}`"
                          :rules="rules"
                          v-model="matriz[index-1][index2-1]"
                          :readonly="showResult"
                      ></v-text-field>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-progress-circular
                  v-if="loadButton"
                  indeterminate
                  color="purple"
              ></v-progress-circular>
              <div v-else>
                <v-btn v-if="!showResult" @click="calcular" color="primary">
                  <v-icon>mdi-check</v-icon>
                  Calcular
                </v-btn>
                &nbsp;
                &nbsp;
                <v-btn v-if="!showResult" @click="randomData" color="green">
                  <v-icon>mdi-book-information-variant</v-icon>
                  Llenar datos aleatorios
                </v-btn>
                &nbsp;
                &nbsp;
                <v-btn
                    color="blue"
                    @click="refreshThis"
                >
                  <v-icon>mdi-refresh</v-icon>
                  Reiniciar
                </v-btn>
              </div>
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
import matrixInverse from "matrix-inverse";

export default {
  name: "Matriz.vue",
  components: {PageContainerSkeleton},
  data() {
    return {
      showtableupdate: true,
      showResult: false,
      title: "Matriz Inversa",
      loadButton: false,
      cols: 10,
      matriz: [],
      rows: 10,
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
      items: [],
      showResultados: false,
      showTableMatriz: false,
      notShowTableMatriz: true,
    };
  },
  methods: {
    refreshThis() {
      this.showtableupdate = true
      this.showResult = false
      this.loadButton = false
      this.cols = 10
      this.matriz = []
      this.rows = 10
      this.showResultados = false
      this.showTableMatriz = false
      this.notShowTableMatriz = true
    },
    crearTablaParaMatriz() {
      if (!this.$refs.form.validate()) {
        this.$notify({
          group: "foo",
          title: "Espera!, algunos datos faltan!",
          text: "Rellena los campos faltantes!",
          type: "warning"
        });
        return;
      }
      // inicializando matriz
      for (let i = 0; i < this.rows; i++) {
        this.matriz[i] = [];
        for (let j = 0; j < this.cols; j++) {
          this.matriz[i][j] = 0;
        }
      }
      console.log(this.matriz);
      this.showTableMatriz = true;
      this.notShowTableMatriz = false;
    },
    calcular() {
      if (!this.$refs.form.validate()) {
        this.$notify({
          group: "foo",
          title: "Espera!, algunos datos faltan!",
          text: "Rellena los campos faltantes!",
          type: "warning"
        });
        return;
      }
      this.$notify({
        group: 'foo',
        title: 'Analizando',
        text: 'Por favor espere...',
        type: "info",
        position: 'top left'
      });
      this.loadButton = true;
      let matrixInverses = matrixInverse(this.matriz);
      console.table(matrixInverses);
      setTimeout(() => {
        this.showResult = true;
        this.matriz = matrixInverses;
        this.loadButton = false;

        this.$notify({
          group: 'foo',
          title: 'Hecho!',
          text: 'Finalizado!',
          type: "success",
          position: 'bottom right'
        });
      }, 500);
    },
    randomData() {
      this.showtableupdate = false;
      for (let i = 0; i < this.rows; i++) {
        this.matriz[i] = [];
        for (let j = 0; j < this.cols; j++) {
          let randomNumb = Math.floor(Math.random() * 10);
          while (randomNumb == 0) {
            randomNumb = Math.floor(Math.random() * 10);
          }
          this.matriz[i][j] = randomNumb;
        }
      }
      setTimeout(() => {

        this.showtableupdate = true;
      }, 1000);
    }
  }
}
</script>

<style scoped>

</style>
