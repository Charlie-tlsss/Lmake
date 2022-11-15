<template>
  <div class="orderlist">
    <div class="orderlist-item-header">
      <div>订单号: OE221114192308137236</div>
      <div class="state">已取消</div>
    </div>
    <div class="orderlist-item-main">
        <div class="main-img">
            <img src="https://dsfs.oppo.com/archives/202011/202011060711075fa53563a8c68.png" alt="">
        </div>
        <div class="main-title">OnePlus 银耳 2T 耳机 黑色</div>
        <div class="main-price">¥89</div>
        <div class="main-num">X1</div>
    </div>
    <div class="orderlist-item-footer">
      <span>交易时间:2022-11-14 19:38:49</span>
      <div>
        <span>共2件商品 待付款</span>
        <span class="price">¥2998</span>
        <button>立即支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
};
</script>

<style lang="less" scoped>
.orderlist {
  width: 100%;
  background-color: #fff;
  height: 278px;
  margin: 12px 0;
  .orderlist-item-header {
    width: 100%;
    height: 67px;
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    font-size: 16px;
    color: #333;
    .state {
      color: orangered;
    }
  }
  .orderlist-item-main {
    display: flex;
    height: 122px;
    border-bottom: 1px solid #eaeaea;
    padding: 16px 32px 16px 16px;
    align-items: center;
    font-weight: 400;
    .main-img{
        margin-left: 50px;
        img{
            width: 90px;
            height: 90px;
        }
    }
    .main-title{
        margin-left: 40px;
        width: 400px;
        height: 32px;
        padding: 0 20px;
        color: rgba(0,0,0,.87);
        font-weight: 400;
    }
    .main-price{
        font-size: 20px;
    }   
    .main-num{
        margin-left: 120px;
        font-size: 14px;
    }
  }
  .orderlist-item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 89px;
    padding: 20px 32px;
    span {
      font-size: 14px;
      color: #333;
      opacity: 0.5;
    }
    div{
        span{

        }
        .price{
            margin: 0 12px;
            color: #f44336;
            font-size: 18px;
            opacity: 1;
        }
        button{
            cursor: pointer;
            width: 110px;
            height: 48px;
            border-radius: 50px;
            border: 0;
            color: #fff;
            background-color:#f44336;
        }
    }
  }
}
</style>