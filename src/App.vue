<template>
  <div id="app">
    <Header />
    <Nav></Nav>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
};
</script>

<style>
</style>
