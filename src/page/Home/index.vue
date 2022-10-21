<template>
  <div>
    <div class="mask" :class="{doMask :isShowMask}"></div>
    <One></One>
    <!-- 首页list区 -->
    <el-row style="margin: 0; padding: 0" :gutter="24">
      <!-- 首页list区 -->
      <el-col :sx="24" :lg="12" v-for="item in 6" :key="item">
        <div class="product-List">
          <div class="product-list-content">
            <div class="product-list-content-top">
              <div class="plc-name">荣耀MagicBook V 14</div>
              <div class="plc-title">智慧感知 时刻从容</div>
              <div class="plc-text">预订优惠200元</div>
              <div class="plc-btn">
                <div class="plc-btn-buy">
                  <button>购买</button>
                </div>
                <div class="plc-btn-more">
                  <a href=""
                    >了解更多 <i class="iconfont icon-xiangyoujiantou"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="product-list-content-img">
              <img src="./images/mac.png" />
            </div>
          </div>
        </div>
      </el-col>
      <!-- 首页宣传曲区 -->
      <!-- <div class="more-container">
        <div class="more-warp">
          <img src="./images/m1.jpg" alt="" />
          <div class="home-propaganda-title"></div>
          <div class="home-propaganda-desc"></div>
          <div class="home-propaganda-more"></div>
          <el-col :sx="24" :lg="12"> </el-col>
        </div>
      </div> -->
    </el-row>
  </div>
</template>

<script>
import One from "./One";
export default {
  name: "Home",
  data(){
    return {
      isShowMask:false
    }
  },
  components: {
    One,
  },
  mounted(){
    this.$bus.$on('changeMask',() => {
      this.isShowMask = !this.isShowMask
      console.log(this.isShowMask)
    })
  }
};
</script >

<style lang="less" scoped>
.mask{
  z-index: 1;
  width: 100%;
  height: 0px;
  position: absolute;
  background-color: #000000;
  opacity: 0;
  transition:opacity .6s ;
}
.doMask{
  opacity: .4;
  height: 4377px;
}
.product-List {
  width: 100%;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  .product-list-content {
    padding: 40px 0 20px;
    height: 682px;
    width: 100%;
    .product-list-content-top {
      text-align: center;
      margin: 0 auto;
      width: 600px;
      height: 172px;
      .plc-name {
        font-size: 38px;
        font-weight: 700;
      }
      .plc-title {
        margin-top: 15px;
        font-size: 16px;
        color: #00000066;
      }
      .plc-text {
        margin-top: 15px;
        font-size: 14px;
        color: #256fff;
      }
      .plc-btn {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        .plc-btn-buy {
          button {
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
        .plc-btn-more {
          line-height: 40px;
        }
      }
    }
    .product-list-content-img {
      margin-top: 30px;
      text-align: center;
      img {
        width: 540px;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
.more-container {
  width: 100%;
  background-color: #000;
  overflow: hidden;
  .more-warp {
    width: 1400px;
    margin: 0 auto;
  }
}
</style>