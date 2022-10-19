<template>
  <div>
    <div class="content" v-for="item in 3" :key="item">
      <div class="content-warp">
        <div class="one-name">荣耀70系列</div>
        <div class="one-title">美，焦点在我</div>
        <div class="one-text">最高12期免息丨晒单限量赠99元耳机</div>
        <div class="one-button">
          <div class="one-button-buy">
            <input type="button" value="购买" />
          </div>
          <div class="one-button-more">
            <a href=""
              >了解更多 <i class="iconfont icon-xiangyoujiantou"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="content-img">
        <img src="./images/honor 70.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  height: 752px;
  background-color: #f9f9f9;
  padding-top: 60px;
  .content-warp {
    margin: 0 auto;
    width: 760px;
    height: 177px;
    .one-name {
      font-size: 40px;
      text-align: center;
      font-weight: 700;
    }
    .one-title {
      margin-top: 10px;
      height: 34px;
      font-size: 26px;
      color: #00000066;
      text-align: center;
    }
    .one-text {
      margin-top: 14px;
      height: 24px;
      color: #256fff;
      font-size: 16px;
      text-align: center;
    }
    .one-button {
      height: 40px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .one-button-buy {
        input {
          background-color: #256fff;
          width: 70px;
          height: 40px;
          color: #fff;
          border: 0;
          border-radius: 20px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .one-button-more {
        line-height: 40px;
        color: #000;
      }
    }
  }
  .content-img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 1020px;
    height: 460px;
    margin: 0 auto;
    text-align: center;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>