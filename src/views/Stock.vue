<template>
  <div class="stock">
    <Navigation />
    <div>
      <b-container fluid>
        <b-row id="menu" algin-v="start">
          <b-row>
            <b-col>
              <label for="input-none">Ingrese código del producto</label>
            </b-col>
            <b-col>
              <b-form-input
                v-model="text"
                placeholder="Ej: 1113514815648"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="row">
            <b-col>
              <label for="input-none">No State:</label>
            </b-col>
            <b-col>
              <b-form-input
                v-model="text"
                placeholder="Ingrese el código del producto"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-row>
        <b-row> </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "stock",
  components: {
    Navigation
  }
};
</script>

<style>
#menu {
  background-color: rgb(162, 255, 158);
}
</style>
