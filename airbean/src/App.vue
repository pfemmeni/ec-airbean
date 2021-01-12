<template>
  <div id="app">
    <Navigation v-show="$store.state.showNav"> </Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation";
export default {
  components: { Navigation },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  min-height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
