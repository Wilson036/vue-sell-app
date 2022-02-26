<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div>
      <form class="search-wrapper">
        <span class="search-icon"></span>
        <input type="text" class="search-bar" placeholder="搜索店內商品" />
      </form>
      <div class="more-wrapper">
        <a href="" class="spelling-bt">拼單</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="icon" :style="head_bg"></div>
      <div class="name">
        <h3>{{ poiInfo.name }}</h3>
      </div>
      <div class="collect">
        <img src="../../../resource/img/star.png" alt="" />
        <span>收藏</span>
      </div>
    </div>
    <div class="bulletin-wrapper" v-if="poiInfo.discounts2[0]">
      <img :src="poiInfo.discounts2[0].icon_url" alt="" class="icon" />
      <span class="text">{{ poiInfo.discounts2[0].info }}</span>
      <div class="detail" @click="toggleIsShow">
        {{ poiInfo.discounts2.length }}個活動
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bg-wrapper" :style="content_bg"></div>
    <transition name="bulletin-detail">
      <div class="bulletin-detail" v-show="isDetailShow">
        <div class="detail-wrapper">
          <div class="main-wrapper" :style="detail_bg">
            <div class="icon" :style="head_bg"></div>
            <h3 class="name">{{ poiInfo.name }}</h3>
            <div class="score">
              <Star :score="0.5"></Star>
              <span>{{ poiInfo.wm_poi_score }}</span>
            </div>
            <p class="tip">
              {{ poiInfo.min_price_tip }} <i></i> {{ poiInfo.shipping_fee_tip }}
              <i></i>
              {{ poiInfo.delivery_time_tip }}
            </p>
            <p class="time">配送時間:{{ poiInfo.shopping_time }}</p>
            <div class="discounts" v-if="poiInfo.discounts2[0]">
              <p>
                <img :src="poiInfo.discounts2[0].icon_url" alt="" />
                <span>{{ poiInfo.discounts2[0].info }}</span>
              </p>
            </div>
          </div>
          <div class="close-wrapper">
            <div class="icon-close" @click="toggleIsShow"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import Star from "components/Star/Star";

export default {
  data() {
    return {
      isDetailShow: false,
    };
  },
  props: {
    poiInfo: {
      type: Object,
      default: {},
    },
  },
  components: {
    Star,
  },
  computed: {
    content_bg() {
      return `background-image: url(${this.poiInfo.head_pic_url})`;
    },
    head_bg() {
      return `background-image: url(${this.poiInfo.pic_url})`;
    },
    detail_bg() {
      return `background-image: url(${this.poiInfo.poi_back_pic_url})`;
    },
  },
  methods: {
    toggleIsShow() {
      this.isDetailShow = !this.isDetailShow;
    },
  },
};
</script>


<style>
@import "../common/styles/icon.css";
@import "Header.css";
</style>