<template>
  <div>
    <div class="goods-box" v-for="list in shopList.slice(0,6)" :key="list.id">
      <div class="goods-box-title">{{list.category}}<span>查看更多></span></div>
      <div class="goods-box-img">
        <img
          :src="list.categoryImg"
          alt=""
        />
      </div>
      <div class="goods-box-list">
        <ul>
          <li v-for="listItem in list.list.slice(0,10)" :key="listItem.skuId">
            <div class="goods-box-list-img">
              <img
                :src="listItem.skuImg"
              />
            </div>
            <div class="goods-box-list-title">{{listItem.skuName}}</div>
            <div class="goods-box-list-desc">{{listItem.skuDesc}}</div>
            <div class="goods-box-list-price">¥{{listItem.skuPrice}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsBox",
  props:['shopList']
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
    width: 1200px;
    height: 343px;
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