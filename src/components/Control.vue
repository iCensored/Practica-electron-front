<template>
  <div class="control">
    <b-button :pressed.sync="buttonState" pill variant="success"
      >Mostrar tabla</b-button
    >
    <p>
      Estado del botón: <strong>{{ buttonState }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      buttonState: false
    };
  }
};
</script>

<style></style>
