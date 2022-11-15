<template>
  <div class="pay">
    <div class="pay-warp">
      <div class="pay-title">Lmake收银台</div>
      <div class="paying" v-if="paySuccess">
        <div class="pay-content">
          <div class="pay-content-desc">
            <i class="iconfont icon-dingdanyichenggong"></i>
            <div class="trade-message">
              <div class="trade-message-top">
                订单已提交,等待付款
                <span>¥999.00</span>
              </div>
              <div class="trade-message-bottom">
                30分钟内未付款将自动取消订单
              </div>
            </div>
          </div>
          <div class="pay-trade-message">
            <ul>
              <li>订单详情</li>
              <li>订单号：221108182303830715</li>
              <li>商品名称：OPPO Pad Air 4GB+64GB 雾灰</li>
              <li>收货信息：陈家梁 18698917982 北京市 北京市 大兴区 123</li>
              <li>交易时间：2022-11-08 18:23:40</li>
            </ul>
          </div>
        </div>
        <div class="pay-method">
          <div class="pay-methods-item">
            <div
              class="weixin"
              :class="{ isActive: isPayByWixin }"
              @click="isPayByWixin = true"
            >
              <i class="iconfont icon-weixinzhifu"></i>
              <span>微信支付</span>
            </div>
            <div
              class="alipay"
              :class="{ isActive: isPayByWixin == false }"
              @click="isPayByWixin = false"
            >
              <i style="color: #007aff" class="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
            </div>
          </div>
          <div v-if="isPayByWixin" class="pay-code">
            <img src="./images/weixinpay.jpg" alt="" />
          </div>
          <div v-else class="pay-code">
            <img src="./images/alipay.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="paysuccess" v-else>
        <div class="pay-stop">
          <div class="pay-stop-left">
            <i class="iconfont icon-chenggong"></i>
          </div>
          <div class="pay-stop-right">
            <p>支付成功,我们会尽快为您发货!</p>
            <div>订单号:221108182303830715,可进入我的订单查询实时物流信息</div>
          </div>
          <div class="pay-stop-button">
            <input @click="goShop" type="button" value="继续逛逛" />
            <input
              style="background-color: #3a8ee6; color: #fff; border: 0"
              type="button"
              value="查看我的订单"
              @click="goCenter"
            />
          </div>
        </div>
        <div class="pay-sbottom">
          <i class="iconfont icon-jinggao"></i>
          重要提示,梁造商城不会以任何订单异常,系统升级为由要求您点击任何链接进行退款
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      isPayByWixin: true,
      paySuccess: false,
    };
  },
  methods:{
    goShop(){
      this.$router.push('/shop')
    },
    goCenter(){
      this.$router.push('/center')
    }
  }
};
</script>

<style lang="less" scoped>
.isActive {
  border: 1px solid orangered !important;
}
.pay {
  background-color: #f5f5f5;
  .pay-warp {
    padding-top: 10px;
    width: 1200px;
    padding-bottom: 10px;
    margin: 0 auto;
    .pay-title {
      height: 72px;
      text-align: center;
      background-color: #fff;
      line-height: 72px;
      color: rgb(101, 101, 101);
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 8px;
    }
    .pay-content {
      width: 1200px;
      height: 340px;
      margin-top: 10px;
      background-color: #fff;
      .pay-content-desc {
        padding: 30px;
        padding-bottom: 20px;
        height: 130px;
        display: flex;
        border-bottom: 1px solid #ddd;
        align-items: center;

        i {
          font-size: 72px;
          color: #3fc048;
        }

        .trade-message {
          margin-left: 10px;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .trade-message-top {
            height: 24px;
            font-size: 16px;
            span {
              color: orangered;
            }
          }
          .trade-message-bottom {
            font-size: 14px;
            opacity: 0.5;
          }
        }
      }
      .pay-trade-message {
        width: 100%;
        height: 208px;
        padding: 30px 0 20px 32px;
        ul {
          li:first-child {
            margin-top: 0;
            font-size: 14px;
          }
          li {
            margin-top: 12px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 0.499);
            line-height: 22px;
          }
        }
      }
    }
    .pay-method {
      padding: 20px 200px;
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .pay-methods-item {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          cursor: pointer;
          border: 1px solid;
          width: 250px;
          height: 75px;
          border-radius: 10px;
          border: 1px solid rgba(151, 151, 151, 0.358);
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: #3fc048;
            margin-right: 20px;
            font-size: 32px;
          }
        }
      }
      .pay-code {
        width: 300px;
        height: 300px;
        border: 1px solid rgba(51, 51, 51, 0.358);
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .paysuccess {
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      padding: 18px 40px 0;
      .pay-stop {
        overflow: hidden;
        display: flex;
        height: 120px;
        align-items: center;
        border-bottom: 2px solid rgba(150, 150, 150, 0.26);
        .pay-stop-left {
          height: auto;
          i {
            font-size: 72px;
            color: #3fc048;
          }
        }
        .pay-stop-right {
          margin-top: 40px;
          height: 100%;
          margin-left: 32px;
          color: #000000ac;
          p {
            font-size: 28px;
            color: #000000;
            margin-bottom: 15px;
          }
        }
        .pay-stop-button {
          margin-left: 40px;
          input {
            margin-left: 40px;
            width: 200px;
            height: 50px;
            border: 1px solid rgba(151, 151, 151, 0.358);
            border-radius: 50px;
            cursor: pointer;
          }
        }
      }
      .pay-sbottom {
        display: flex;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        color: rgba(131, 131, 131, 0.536);
        i {
          color: rgba(255, 0, 0, 0.763);
        }
      }
    }
  }
}
</style>