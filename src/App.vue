<template>
  <div id="app">
    <Header :poiInfo="poiInfo" />
    <Nav />
    <router-view></router-view>
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
  data() {
    return {
      poiInfo: {},
    };
  },
  created() {
    const that = this;
    this.$axios
      .get("/api/goods")
      .then((resp) => {
        const dataSource = resp.data;
        if (dataSource.code === 0) {
          that.poiInfo = dataSource.data.poi_info;
        }
      })
      .console.error((err) => console.log({ err }));
  },
};
</script>

<style>
</style>
