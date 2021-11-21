<template>
  <v-menu
      transition="slide-y-transition"
      bottom
      open-on-hover
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          text
          class="font-nunito"
          v-bind="attrs"
          v-on="on"
          style="font-size: 13px !important;"
      >
        <v-icon
            left
            dark
        >{{ selectedRoute.icon }}
        </v-icon>

        {{ selectedRoute.title }}
        <v-icon left class="ml-1">mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="updatePath(item.path)"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title class="font-montserrat" style="font-size: 13px !important;">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-action v-if="item.path.match(/http/)"><v-icon>mdi-export-variant</v-icon></v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props:{
    items:{
      type:Array,
      required:true
    }
  },
  name: "drop_down_menu_navbar",
  methods:{
    updatePath(path){
      if (path.match(/http/)!==null){
        window.open(path);
        return;
      }
      if (path === '/' && '/'===this.$router.currentRoute.path){
        return;
      }
      if (`/${path}` !== this.$router.currentRoute.path){
        this.$router.replace(path);
      }
    },
  },
  computed: {
    selectedRoute() {
      if (this.$route.path ==="/"){
        return this.items[0];
      }
      let itemFound= this.items.find((item) => `/${item.path}` === this.$route.path);
      if (itemFound){
        return itemFound;
      }else{
        this.updatePath("not-found");
        return{
          "icon":"mdi-help",
          "title":"Not Found"
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
