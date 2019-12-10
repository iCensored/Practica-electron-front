<template>
  <div class="home">
    <Navigation />
    <div id="img">
      <b-img
        alt="Kiosco logo"
        src="https://clientdata.mx/wp-content/uploads/2018/11/kiosko1.png"
        fluid
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Navigation
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#img {
  text-align: center;
}
</style>
