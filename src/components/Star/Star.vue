<template>
  <div class="star">
    <span
      v-for="(itemClass, index) in itemClasses"
      class="star-item"
      :class="itemClass"
      :key="index"
    ></span>
  </div>
</template>

<script>
const LENGTH = 5;

const CLS_ON = "on";

const CLS_HALF = " half";

const CLS_OFF = "off";

export default {
  props: {
    score: {
      type: Number,
    },
  },
  computed: {
    itemClasses() {
      const length = Math.floor(this.score);
      const result = new Array(length).fill(CLS_ON);
      //對分數進行處理 向下取0.5的倍數
      const score = Math.floor(this.score * 2) / 2;

      let hasDecimal = score % 1 !== 0;
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      if (result.length < LENGTH) {
        return result.concat(new Array(LENGTH - result.length).fill(CLS_OFF));
      }
      return result;
    },
  },
};
</script>


<style>
.star {
  font-size: 0;
}
.star .star-item {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-size: 10px;
}
.star .star-item:last-child {
  margin-right: 0;
}
/* 三种图片类型*/
.star .on {
  background-image: url(img/star24_on@2x.png);
}
.star .half {
  background-image: url(img/star24_half@2x.png);
}
.star .off {
  background-image: url(img/star24_off@2x.png);
}
</style>          
