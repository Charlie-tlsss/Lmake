<template>
  <div class="cart">
    <div class="cart-warp">
      <!-- 购物车头部 -->
      <div class="cart-title">
        <ul>
          <li>
            <label class="checkbox">
              <input type="checkbox" />
              <label> 全选 </label>
            </label>
          </li>
          <li class="li-pro">商品</li>
          <li>单价</li>
          <li>数量</li>
          <li>小记</li>
          <li>操作</li>
        </ul>
      </div>
      <!-- 购物车主体部分 -->
      <div class="cart-content">
        <div class="cart-list" v-for="item in 3" :key="item">
          <input type="checkbox" />
          <div class="cart-list-main">
            <img
              src="https://hshopb.honorfile.com/pimages/product/6936520801701/428_428_75497877E30552A9B774E37B5A868A56717B43A353057A1Fmp.png"
            />
            <ul>
              <li>
                <p class="price-name">
                  全新荣耀MagicBook X 16 2022 16英寸笔记本电脑 i5-1235U Windows
                  11 家庭版 16GB 512GB 冰河银
                </p>
                <p class="price-info">
                  冰河银 Windows 11 家庭版 i5-1235U|16GB|512GB 官方标配
                </p>
              </li>
              <li class="price">¥ 4399.00</li>
              <li>
                <el-input-number size="mini" v-model="num"></el-input-number>
              </li>
              <li class="price-total">¥ 4399.00</li>
              <li class="remove-cart">删除</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 购物车底部 -->
      <div class="cart-total">
        <div class="cart-total-control">
          <label class="checkbox">
            <input type="checkbox" />
            <label> 全选 </label>
          </label>
          <a href="">删除</a>
        </div>
        <div class="cart-total-btn" @click="goTrade">立即结算</div>
        <div class="cart-total-price">
          <p>总计:<span>¥2345.00</span></p>
          <div>已选择<span>1</span>件商品</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      num: 1,
    };
  },
  methods:{
    goTrade(){
      this.$router.push({
        path:'/trade'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.checkbox {
  width: 150px;
  input {
    vertical-align: text-bottom;
    padding-top: 10px;
    margin-right: 10px;
  }
}
.cart {
  background-color: #f5f5f5;
  padding-top: 20px;
}
.cart-warp {
  width: 1200px;
  margin: 0 auto;
  .cart-title {
    background-color: #fff;
    padding-left: 40px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    ul {
      display: flex;
      .li-pro {
        width: 450px;
      }
      li:first-child {
        margin: 0;
        width: 150px;
      }
      li {
        margin-left: 30px;
        width: 100px;
        margin-left: 30px;
        font-size: 12px;
        color: #a4a4a4;
      }
    }
  }
  .cart-content {
    width: 100%;
    .cart-list {
      background-color: #fff;
      width: 1200px;
      height: 140px;
      padding-left: 40px;
      margin-top: 10px;
      padding-top: 20px;
      input {
        margin: 43px 3px 0 0px;
        float: left;
      }
    }
    .cart-list-main {
      width: 1130px;
      height: 100px;
      float: left;
      img {
        float: left;
        width: 100px;
        height: 100px;
        margin-right: 20px;
      }
      ul {
        float: left;
        li:first-child {
          margin-left: 0;
          width: 450px;
          text-align: left;
        }
        li {
          text-align: center;
          float: left;
          width: 140px;
          margin-right: -20px;
          margin-left: 12px;
        }
        .price-name {
          font-size: 12px;
          line-height: 20px;
        }
        .price-info {
          color: #666666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 17px;
          font-size: 12px;
        }
        .price {
          font-size: 14px;
          color: #3a3a3a;
          margin-left: 34px;
          margin-top: 5px;
        }
        .price-total {
          font-size: 12px;
          color: #ca141d;
          font-weight: bold;
          margin-left: 10px;
          margin-top: 5px;
        }
        .remove-cart {
          font-size: 12px;
          color: #a4a4a4;
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }
  }
  .cart-total {
    padding-left: 40px;
    width: 100%;
    height: 60px;
    margin-top: 10px;
    background-color: #fff;
    line-height: 60px;
    color: #3a3a3a;
    .cart-total-control {
      width: 200px;
      float: left;
      font-size: 12px;
      height: 100%;
      a {
        margin-left: 20px;
      }
    }
    .cart-total-price {
      margin-right: 10px;
      line-height: 1;
      height: 45px;
      float: right;
      margin-top: 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 14px;
        span {
          font-size: 18px;
          color: #ca151e;
          font-weight: 600;
          margin-left: 5px;
        }
      }
      div {
        font-size: 12px;
        color: #a4a4a4;
        span {
          color: #ca151e;
        }
      }
    }
    .cart-total-btn {
      height: 60px;
      width: 180px;
      text-align: center;
      background-color: #ca151e;
      color: #fff;
      font-size: 18px;
      float: right;
      cursor: pointer;
    }
  }
}
</style>