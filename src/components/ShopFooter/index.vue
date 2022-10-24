<template>
  <div class="shop-footer">
    <div class="footer-warp">
        <div class="footer-slogan">
            <ul>
                <li><i class="iconfont icon-"></i>官方正品 品质保障</li>
                <li><i class="iconfont icon-"></i>7天退货 15天换货</li>
                <li><i class="iconfont icon-"></i>全场包邮</li>
                <li><i class="iconfont icon-"></i>500+服务店铺 全国联保</li>
            </ul>
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
  width: 100%;
  height: 500px;
  .footer-warp{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: skyblue;
    .footer-slogan{
        width: 100%;
        height: 90px;
        padding: 25px 0;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
                font-size: 18px;
                line-height: 40px;
            }
        }
    }
  }
}
</style>