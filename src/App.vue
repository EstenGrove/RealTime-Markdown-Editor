<template>
  <div id="app">
    <h2 class="main-title">Real-Time Markdown Editor</h2>
    <p class="text">Type in basic markdown and the app will convert it to HTML for you.</p>
    <Interface></Interface>
  </div>
</template>

<script>
import Interface from "../src/components/Interface";

export default {
  name: "app",
  components: {
    Interface
  },
  data() {
    return {
      msg: "Real-Time Markdown Editor in Vue.js"
    };
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}

.main-title,
.text {
  text-align: center;
  font-family: "Avenir";
  font-weight: normal;
  color: #2c3e50;
  margin-bottom: 1rem;
}
.text {
  font-family: "Raleway";
  font-weight: 100;
  color: #2c3e50;
}
</style>
