<template>
  <div class="shop-footer">
    <div class="footer-warp">
      <div class="footer-slogan">
        <ul>
          <li><img src="./images/footer_1.png" /> 官方正品 品质保障</li>
          <li><img src="./images/footer_2.png" />7天退货 15天换货</li>
          <li><img src="./images/footer_3.png" />全场包邮</li>
          <li><img src="./images/footer_4.png" />500+服务店铺 全国联保</li>
        </ul>
      </div>
      <div class="footer-service">
        <dd>
          <dl>推荐产品</dl>
          <dl>手机</dl>
          <dl>笔记本</dl>
          <dl>平板</dl>
          <dl>智慧屏</dl>
          <dl>智能穿戴</dl>
          <dl>智能家居</dl>
          <dl>配件</dl>
        </dd>
        <dd>
          <dl>品牌</dl>
          <dl>关于梁造</dl>
          <dl>新闻</dl>
          <dl>活动</dl>
          <dl>视频</dl>
          <dl>加入我们</dl>
        </dd>
        <dd>
          <dl>购物相关</dl>
          <dl>退换货政策</dl>
          <dl>配送方式</dl>
          <dl>支付方式</dl>
          <dl>常见问题</dl>
        </dd>
        <dd>
          <dl>服务支持</dl>
          <dl>增值服务</dl>
          <dl>保修政策</dl>
          <dl>备件价格查询</dl>
          <dl>备件价格查询</dl>
          <dl>会员服务规则</dl>
          <dl>价格保护规则</dl>
        </dd>
        <dd>
          <dl>快速链接</dl>
          <dl>泽选商城</dl>
          <dl>宁品汇</dl>
        </dd>
        <div>
          <p>商城服务热线</p>
          <p>400-820-8820</p>
          <button>在线客服(没有)</button>
          <br>关注梁造<br>
          <img src="./images/my.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopFooter",
};
</script>

<style lang="less" scoped>
.shop-footer {
  background-color: #f9f9f9;
  width: 100%;
  height: 380px;
  .footer-warp {
    width: 1200px;
    height: 380px;
    margin: 0 auto;
    .footer-slogan {
      width: 100%;
      height: 90px;
      padding: 25px 0;
      border-bottom: 1px solid #333;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          font-size: 18px;
          line-height: 40px;

          img {
            width: 40px;
            vertical-align: middle;
          }
        }
      }
    }
    .footer-service {
      width: 100%;
      height: 285px;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      dl:first-child {
        display: block;
        font-size: 14px;
        color: #101010;
        line-height: 24px;
        margin-bottom: 10px;
        font-weight: 500;
      }
      dl{
        font-size: 12px;
        color:#777;
        line-height: 23px;
        cursor: pointer;
      }
      div{
        p:nth-child(2){
          margin-top: 10px;
          font-size: 28px;
          font-weight: 600;
        }
        button{
          width: 140px;
          height: 40px;
          background-color: #000;
          color: #fff;
          border-radius: 50px;
          border: 0;
          cursor: pointer;
          margin: 10px 0;
          margin-left: -5px;
        }
        img{
          width: 80px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>