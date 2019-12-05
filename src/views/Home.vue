<template>
  <div class="home">
    <Navigation />
    <img
      alt="Kiosco logo"
      src="https://clientdata.mx/wp-content/uploads/2018/11/kiosko1.png"
    />
    <Control />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Control from "@/components/Control.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Control
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
