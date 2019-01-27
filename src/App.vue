<template>
  <div id="app">
    <!-- <Login v-if="login === 'login'"></Login> -->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app"
  // data() {
  //   return {
  //     login: "login"
  //   };
  // },
  // components: {
  //   // HelloWorld,
  //   Login,
  //   UserPage
  // }
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
