<template>
  <div class="control">
    <b-button @click="addProducto" pill variant="success"
      >Enviar datos</b-button
    >
    <b-button
      :pressed.sync="buttonState"
      @click="getProductos"
      pill
      variant="success"
      >Mostrar Tabla</b-button
    >
    <div v-if="buttonState">
      <p>
        {{ productos }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Control",
  data() {
    return {
      buttonState: false,
      productos: []
    };
  },
  methods: {
    getProductos() {
      console.log("get fue presionado");
      axios
        .get("api/productos")
        .then(res => (this.productos = res.data))
        .catch(err => console.log(err));
    },
    addProducto() {
      console.log("post fue presionado");
      axios
        .post("api/productos/add", {
          titulo: "Mama te amo"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
