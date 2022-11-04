<template>
  <div class="spec-preview">
    <img src='../images/show1.jpg' />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img src='../images/show1.jpg' ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
    };
  },
  // props: ["skuImgList", "imgIndex"],
  computed: {
    // imgObj() {
    //   return this.skuImgList[this.imgIndex] || {};
    // },
  },
  methods: {
    handler(e) {
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = e.offsetX - mask.offsetWidth / 2;
      let top = e.offsetY - mask.offsetHeight / 2;
      //修改属性值
      if (left < 0) left = 0;
      if (left > mask.offsetWidth) left = mask.offsetWidth;
      if (top < 0) top = 0;
      if (top > 200) top = 200;
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.spec-preview {
  position: relative;
  width: 515px;
  height: 515px;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
    overflow: hidden;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(159, 159, 159, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>