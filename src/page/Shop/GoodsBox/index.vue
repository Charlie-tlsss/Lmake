<template>
  <div>
    <div class="goods-box" v-for="item in 6" :key="item">
      <div class="goods-box-title">手机 <span>查看更多></span></div>
      <div class="goods-box-img">
        <img
          src="https://hshop.honorfile.com/pimages/frontLocation/content/02133366426616333120.jpg"
          alt=""
        />
      </div>
      <div class="goods-box-list">
        <ul>
          <li v-for="item in 10" :key="item">
            <div class="goods-box-list-img">
              <img
                src="https://hshop.honorfile.com/pimages//product/6973316857085/428_428_A5FF6B8B70EBD73C5EF29E5BD982F1F46DD6E69BB43B0AF9mp.png"
                alt=""
              />
            </div>
            <div class="goods-box-list-title">荣耀Magic3 Pro</div>
            <div class="goods-box-list-desc">享24期免息</div>
            <div class="goods-box-list-price">¥5999</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsBox",
};
</script>

<style lang="less" scoped>
.goods-box {
  padding-bottom: 20px;
  width: 100%;
  .goods-box-title {
    height: 76px;
    padding: 20px 0;
    font-size: 26px;
    line-height: 36px;
    span {
      color: #999;
      font-size: 16px;
      float: right;
      line-height: 56px;
      cursor: pointer;
      &:hover {
        color: #256fff;
      }
    }
  }
  .goods-box-img img {
    max-width: 1200px;
  }
  .goods-box-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      li:nth-child(5n) {
        margin-right: 0;
      }
      li {
        background-color: #fff;
        margin-top: 20px;
        width: 224px;
        height: 290px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .goods-box-list-img img {
          margin-top: 30px;
          height: 120px;
          width: 120px;
        }
        .goods-box-list-title {
          color: #000;
          font-size: 16px;
          font-weight: 400;
          margin-top: 30px;
        }
        .goods-box-list-desc {
          color: #999;
          line-height: 16px;
          height: 16px;
          margin: 4px 30px 0;
          font-size: 12px;
          font-weight: 400;
        }
        .goods-box-list-price {
          color: #000;
          line-height: 24px;
          height: 24px;
          font-size: 16px;
          font-weight: 600;
          padding-top: 20px;
          font-family: Avenir Next;
        }
      }
    }
  }
}
</style>