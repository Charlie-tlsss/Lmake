<template>
  <div class="trade">
    <!-- 遮罩层 -->
    <div :class="{ mask: isShowAddAddress }"></div>
    <div class="trade-warp">
      <!-- 标题 -->
      <div class="trade-title">核对订单信息</div>
      <!-- 地址 -->
      <div class="trade-address">
        <div class="trade-address-title">收货人信息</div>
        <div class="trade-address-list" :class="{ 'show-more': isShowMore }">
          <ul>
            <li
              v-for="address in addressMessage"
              :key="address.id"
              class="address-item address-checked"
            >
              <div class="item-top">
                <span>{{ address.addressName }}</span>
                <span>{{ address.addressPhone }}</span>
              </div>
              <div class="item-text">
                {{ address.addressText }}
              </div>
              <div class="item-delete">删除</div>
            </li>
            <li @click="addAddress" class="new-address">
              <i class="iconfont icon-jia"></i>
              <div>添加收货地址</div>
            </li>
          </ul>
        </div>
        <div @click="showMore" class="more">
          <i v-if="isShowUp" class="iconfont icon-xiangxia"></i>
          <i v-if="isShowMore" class="iconfont icon-xiangshang"></i>
        </div>
      </div>
      <!-- 新建地址 -->
      <div class="trade-new-address" v-if="isShowAddAddress">
        <i @click="isShowAddAddress = false" class="iconfont icon-guanbi"></i>
        <div class="new-address-title">新建收货地址</div>
        <div class="new-address-warp">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="收货人">
              <el-input class="form-width" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input class="form-width" v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="收获区域">
              <el-cascader
                class="form-width"
                :options="options"
                v-model="form.address"
                @change="addressChoose"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input
                class="form-width"
                v-model="form.addressText"
              ></el-input>
            </el-form-item>
            <el-form-item prop="delivery">
              <el-switch v-model="form.isDefaultAddress"></el-switch>
              设为默认地址
            </el-form-item>
            <el-form-item>
              <el-button
                class="btn-submit"
                type="primary"
                @click="submitAddress"
                >保存</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="trade-product-info">
        <div class="trade-product-title">确认商品</div>
        <div class="trade-product-header">
          <div class="goods-name">商品名称</div>
          <div class="goods-price">价格(元)</div>
          <div class="goods-num">数量</div>
          <div class="goods-sum">小记(元)</div>
          <div class="is-have">剩余</div>
        </div>
        <div class="trade-producr-list">
          <ul v-for="item in 3" :key="item">
            <li class="good-img">
              <img
                src="https://shopstatic.vivo.com.cn/vivoshop/commodity/47/10007647_1659421288189_250x250.png"
                alt=""
              />
            </li>
            <li class="good-name">
              <span>vivo Y32t 4G版 8GB+128GB 午夜黑</span>
            </li>
            <li class="good-price">1099.00</li>
            <li class="good-num">1</li>
            <li class="good-sum">1099</li>
            <li class="good-is-have">有货</li>
          </ul>
        </div>
      </div>
      <!-- 订单结算 -->
      <div class="trade-bottom">
        <div class="trade-bottom-content">
          <div class="trade-bottom-price">应付总额：<span>¥2498.00</span></div>
          <div class="trade-bottom-address">
            <div class="row">
              <span>收件人：</span> <span>陈家梁 18698917982</span>
            </div>
            <div class="row">
              <span>配送地址：</span> <span>福建省龙岩市上杭县a</span>
            </div>
          </div>
          <div class="trade-bottom-submit">
            <input @click="goPay()" type="button" value="提交订单" class="submit-trade">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { regionDataPlus, CodeToText } from "element-china-area-data";

export default {
  name: "Trade",
  data() {
    return {
      //是否显示更多地址
      isShowMore: false,
      //是否显示添加地址
      isShowAddAddress: false,
      // 省市区级联
      options: regionDataPlus,
      selectedOptions: [],
      addressMessage: [
        {
          id: 1,
          addressName: "陈家梁",
          addressPhone: "18698917982",
          addressText: "辽宁省 葫芦岛市 绥中县 大施宝村小施宝屯",
        },
      ],
      //提交表单数据
      form: {
        name: "",
        phone: "",
        address: [],
        addressText: "",
        allAddress: "",
        isDefaultAddress: "",
      },
    };
  },
  methods: {
    //显示添加新地址盒子
    addAddress() {
      this.isShowAddAddress = true;
    },
    addressChoose(value) {
      this.form.allAddress =
        CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]];
      console.log(this.form.allAddress);
    },
    //展示更多地址
    showMore() {
      this.isShowMore = !this.isShowMore;
    },
    //提交新地址
    submitAddress() {
      const { form } = this;
      let newAddress = {};
      newAddress.addressName = form.name;
      newAddress.addressPhone = form.phone;
      newAddress.addressText = form.allAddress + form.addressText;
      newAddress.isDefaultAddress = form.isDefaultAddress;
      this.addressMessage.push(newAddress);
      console.log(this.addressMessage);

      this.isShowAddAddress = false;
    },
    goPay(){
      this.$router.push({
        path:'/pay'
      })
    }
  },
  computed: {
    isShowUp() {
      return this.addressMessage.length >= 4 && this.isShowMore == false;
    },
  },
};
</script>

<style lang="less" scoped>
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: #000 !important;
  opacity: 0.5;
  z-index: 1;
}
.el-form-item {
  margin-bottom: 30px;
}
.btn-submit {
  margin-left: 29%;
}
.form-width {
  width: 420px;
}
.show-more {
  max-height: 500px !important;
}
.address-checked {
  background: url(./images/border.png);
}
.trade {
  padding-top: 10px;
  background-color: #f5f5f5;
  .trade-warp {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 10px;
    .trade-title {
      width: 100%;
      height: 66px;
      line-height: 66px;
      text-align: center;
      background-color: #fff;
      color: #333;
      font-size: 20px;
      font-weight: 400;
    }
    .trade-address {
      position: relative;
      width: 100%;
      margin-top: 10px;
      padding: 35px;
      background-color: #fff;
      .more {
        position: relative;
        left: 50%;
        width: 24px;
        bottom: 1px;
        transform: translateX(-50%);
        i {
          font-size: 24px;
          cursor: pointer;
        }
      }
      .trade-address-title {
        line-height: 30px;
        color: #333;
        font-size: 20px;
        margin: 0;
        padding: 5px 0;
      }
      .trade-address-list {
        overflow: hidden;
        max-height: 177px;
        transition: all 0.5s;
        ul {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
          transition: max-height 1s;
          .address-item {
            position: relative;
            width: 271px;
            height: 157px;
            margin-right: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 3px;
            overflow: hidden;
            &:hover .item-delete {
              display: block;
            }
            .item-top {
              margin: 30px 22px 15px;
              overflow: hidden;
              span:last-child {
                float: right;
              }
            }
            .item-text {
              margin: 0 22px 0;
            }
            .item-delete {
              display: none;
              position: absolute;
              bottom: 5px;
              margin: 0 22px 0;
              font-size: 14px;
              color: rgb(0, 51, 255);
            }
          }
          .new-address {
            cursor: pointer;
            display: flex;
            width: 269px;
            height: 155px;
            margin-right: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 3px;
            overflow: hidden;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i {
              margin-top: 10px;
              font-size: 32px;
            }
          }
          li:nth-child(4n) {
            margin-right: 0;
          }
          li {
          }
        }
      }
    }
    .trade-new-address {
      width: 740px;
      height: 540px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      padding: 35px 5px;
      z-index: 2;
      i {
        font-size: 18px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
      .new-address-title {
        margin: 10px;
        font-size: 21px;
        color: #333;
        text-align: center;
      }
      .new-address-warp {
        margin-left: 90px;
        margin-top: 25px;
      }
    }
    .trade-product-info {
      background-color: #fff;
      width: 100%;
      padding-top: 25px;
      margin-top: 10px;
      .trade-product-title {
        background-color: #fff;
        height: 30px;
        line-height: 30px;
        color: #333;
        font-size: 20px;
        margin: 0;
        padding: 5px 35px 5px 34px !important;
      }
      .trade-product-header {
        background-color: #fff;
        padding: 0 70px 0 40px;
        border-top: 2px solid #f7f7f5;
        margin-top: 20px;
        display: flex;
        height: 64px;
        -webkit-box-align: center;
        align-items: center;
        div {
          width: 123px;
          text-align: center;
          font-size: 14px;
        }
        .goods-name {
          width: 430px;
        }
        .goods-price {
          width: 168px;
        }
      }
      .trade-producr-list {
        ul {
          border-top: 2px solid #f7f7f5;
          padding: 0 70px 0 40px;
          height: 153px;
          height: 152px;
          display: flex;
          .good-img {
            width: 142px;
          }
          .good-name {
            width: 282px;
            span {
              width: 100%;
            }
          }
          .good-price {
            width: 168px;
            margin-left: 5px;
          }
          .good-num {
            width: 124px;
          }
          .good-sum {
            width: 122px;
            color: orangered;
          }
          .good-is-have {
            width: 130px;
          }
          li {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            img {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
    .trade-bottom {
      padding: 35px;
      margin-top: 10px;
      width: 100%;
      height: 230px;
      background-color: #fff;
      .trade-bottom-content {
        float: right;
        .trade-bottom-price {
          color: #666;
          font-size: 18px;
          span{
            font-size: 32px;
            color: #f04141;
            text-align: right;
          }
        }
        .trade-bottom-address{
          font-size: 14px;
          color: #666;
          float: right;
          .row{
            margin-top: 10px;
            text-align: right;
          }
        }
        .trade-bottom-submit{
          .submit-trade{
            margin-top: 15px;
            float: right;
            width: 170px;
            height: 46px;
            border-radius: 46px;
            border: 0;
            cursor: pointer;
            background-color: #f04141;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>