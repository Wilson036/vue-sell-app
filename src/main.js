// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import Goods from "./components/Goods/Goods";
import Seller from "./components/Seller/Seller";
import Ratings from "./components/Ratings/Ratings";

Vue.config.productionTip = false;

const routes = [
  { path: "/", redirect: "/goods" },
  { path: "/goods", component: Goods },
  { path: "/seller", component: Seller },
  { path: "/ratings", component: Ratings }
];

const router = new VueRouter({ routes, linkActiveClass: "active" });
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
