<template>
  <div>
    <div class="detail-warp">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 16px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>手机</el-breadcrumb-item>
        <el-breadcrumb-item
          >荣耀70 8GB+256GB 墨玉青 双卡 全网通版</el-breadcrumb-item
        >
      </el-breadcrumb>
      <!-- 详情页主体 -->
      <div class="detail-content">
        <div class="detail-content-left">
          <div
            class="left-content"
            :class="{ startSticky: isStartStickyed, endSticky: isEndStickyed }"
          >
            <div class="dcl-bigimg">
              <img
                src="https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219649045_750x750.png.webp"
                alt=""
              />
            </div>
            <div class="dcl-img-list">
              <div class="img-list-l"></div>
              <div class="img-list-content">
                <ul :style="'left:'+offSet+'px'">
                  <li>
                    <img src="./images/show1.jpg" alt="">
                  </li>
                  <li>
                    <img src="./images/show2.jpg" alt="">
                  </li>
                  <li>
                    <img src="./images/show3.jpg" alt="">
                  </li>
                  <li>
                    <img src="./images/show4.jpg" alt="">
                  </li>
                  <li>
                    <img src="./images/show5.jpg" alt="">
                  </li>
                </ul>
              </div>
              <div @click="" class="img-list-r"></div>
            </div>
          </div>
        </div>
        <div class="detail-content-right">
          <h1 class="sku-name">iQOO Neo6 SE 12GB+256GB 星际</h1>
          <h1 class="sku-desc">iQOO Neo6 SE 12GB+256GB 星际</h1>
          <div class="sku-summary">
            <div class="sku-summary-price">¥ 1299.00</div>
            <div class="sku-summary-active">
              <p>一站式服务</p>
              <p>满2000减0.01</p>
              <p>下单即赠180帅气室友微信</p>
            </div>
          </div>
          <div class="sku-specs">
            <div class="title">版本</div>
            <ul>
              <li :class="{}" v-for="item in 4" :key="item">8+128</li>
            </ul>
          </div>
          <div class="sku-specs">
            <div class="title">颜色</div>
            <ul>
              <li :class="{}" v-for="item in 3" :key="item">黑色</li>
            </ul>
          </div>
          <div class="sku-number">
            <h1 class="title">数量</h1>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="settle">
            <div class="settle-title">
              <div class="title-price">¥ 1999</div>
              <div class="title-info">已选: 6GB+128GB 晴海蓝 官方标配 1件</div>
            </div>
            <div class="settle-button">
              <div class="settle-button-buy">立即购买</div>
              <div class="settle-button-addcart">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-tab">
      <ul>
        <li>商品详情</li>
        <li>规格参数</li>
        <li>包装与售后</li>
        <li>用户评价（100条）</li>
      </ul>
    </div>
    <div class="detail-show">
      <img src="./images/show.png" >
      
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "ProductDetail",
  data() {
    return {
      offSet:0,
      top: "",
      num: 1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //防治滚轮滚动过快抖动
    handleScroll: _.debounce(function () {
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageYOffset
      );
      console.log(top);
      this.top = top;
    }),
  },
  computed: {
    isStartStickyed() {
      return this.top > 145 && this.top < 500;
    },
    isEndStickyed() {
      return this.top >= 500;
    },
  },
};
</script>

<style lang="less" scoped>
.startSticky {
  position: fixed;
  top: 0;
}
.endSticky {
  position: absolute;
  bottom: 86px;
}
.isActive {
  border: #f51200;
  color: #f51200;
}
.title {
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}
.detail-warp {
  width: 1200px;
  margin: 0 auto;
  .detail-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .detail-content-left {
      position: relative;
      width: 515px;
      overflow: hidden;
      .dcl-bigimg {
        img {
          width: 515px;
        }
      }
      .dcl-img-list {
        width: 515px;
        height: 87px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-list-l{
          height: 40px;
          width: 40px;
          background-color: skyblue;
          border-radius: 50px;
          border: 1px solid #ddd;
        }
        .img-list-content{
          position: relative;
          width: 364px;
          background-color: orange;
          height: 100%;
          overflow: hidden;
          ul{
            position: absolute;
            display: flex;
            transition: all .5s;
            li:first-child{
              margin-left: 0;
            }
            li{
              margin-left: 8px;
              img{
                width: 85px;
              }
            }
          }
        }
        .img-list-r{
          height: 40px;
          width: 40px;
          background-color: skyblue;
          border-radius: 50px;
          border: 1px solid #ddd;
        }
      }
    }
    .detail-content-right {
      width: 510px;
      .sku-name {
        font-size: 34px;
        line-height: 1.2;
        margin-top: 10px;
        font-weight: 400;
      }
      .sku-desc {
        font-size: 14px;
        margin-top: 8px;
        font-weight: 400;
      }
      .sku-summary {
        display: flex;
        align-items: center;
        width: 100%;
        height: 138px;
        padding: 40px 0;
        margin-top: 36px;
        margin-bottom: 15px;
        border: solid #e4e4e4;
        border-width: 1px 0;
        .sku-summary-price {
          width: 230px;
          font-size: 40px;
          color: #f51200;
          line-height: 55px;
          border-right: 1px solid #e4e4e4;
        }
        .sku-summary-active {
          height: 55px;
          p {
            font-size: 12px;
            color: rgb(115, 111, 111);
            margin-left: 10px;
            margin-bottom: 5px;
          }
        }
      }
      .sku-specs {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 245px;
            height: 57px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 10px;
            font-size: 16px;
            color: #777;
            text-align: center;
            line-height: 57px;
          }
        }
        width: 100%;
      }
      .settle {
        width: 100%;
        margin-top: 50px;
        padding: 58px 0 86px;
        border-top: 1px solid #e5e5e5;
        .settle-title {
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          .title-price {
            padding-right: 18px;
            border-right: 1px solid #e5e5e5;
            font-size: 25px;
            color: #f51200;
          }
          .title-info {
            margin-left: 20px;
            font-size: 14px;
            color: #777;
          }
        }
        .settle-button {
          width: 100%;
          height: 46px;
          margin-top: 58px;
          display: flex;
          .settle-button-buy {
            width: 170px;
            height: 46px;
            border-radius: 50px;
            background-color: #ff0c53;
            line-height: 46px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
          .settle-button-addcart {
            margin-left: 20px;
            width: 170px;
            height: 46px;
            background-color: #444;
            border-radius: 50px;
            line-height: 46px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.detail-tab {
  border-top: 1px solid #a4a4a4;
  border-bottom: 1px solid #a4a4a4;
  width: 100%;
  height: 50px;
  ul {
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #a4a4a4;
    align-items: center;
    line-height: 50px;
    li:first-child {
      margin-left: 0;
    }
    li {
      margin-left: 50px;
      cursor: pointer;
    }
  }
}
.detail-show {
  img {
    width: 100%;
  }
}
</style>