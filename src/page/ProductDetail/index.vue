<template>
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
        <div class="dcl-bigimg">
          <img
            src="https://shopstatic.vivo.com.cn/vivoshop/commodity/63/10007363_1651219649045_750x750.png.webp"
            alt=""
          />
        </div>
        <div class="dcl-img-list"></div>
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
            <li :class="{isActive}" v-for="item in 4" :key="item">8+128</li>
          </ul>
        </div>
        <div class="sku-specs">
          <div class="title">颜色</div>
          <ul>
            <li :class="{isActive}" v-for="item in 3" :key="item">黑色</li>
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
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
.isActive{
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
  height: 1000vh;
  margin: 0 auto;
  .detail-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .detail-content-left {
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
        background-color: red;
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
        height: 136px;
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
</style>