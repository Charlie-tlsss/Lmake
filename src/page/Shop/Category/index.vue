<template>
  <div>
    <ul class="shop-category">
      <li v-for="item in 8" :key="item">
        <a href="category-name">
          手机
          <i class="iconfont icon-xiangyoujiantou"></i>
        </a>
        <div class="category-box">
          <div class="category-box-top">
            <div class="category-box-top-title">
              <div class="cbtt-l">手机</div>
              <div class="cbtt-r">
                全部手机<i class="iconfont icon-xiangyoujiantou"></i>
              </div>
            </div>
            <ul>
              <li v-for="item in 8" :key="item">
                <span>vivo X</span>
                <img src="./images/1.webp" alt="" />
              </li>
            </ul>
          </div>
          <div class="category-box-bottom">
            <ul>
              <li v-for="item in 9" :key="item">
                <img src="./images/1.webp" alt="" />
                <span>vivo X</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style lang="less" scoped>
.shop-category {
  transform: translateY(-107%);
  position: absolute;
  width: 200px;
  height: 480px;
  background: hsla(0, 0%, 100%, 0.65);
  z-index: 11;
  li {
    width: 200px;
    height: 60px;
    padding-left: 42px;
    padding-right: 20px;
    line-height: 60px;
    .category-box {
      display: none;
      position: absolute;
      background-clip: padding-box;
      top: 0;
      transform: translateX(19%);
      border-left: 24px solid transparent;
      height: 480px;
      width: 750px;
      background-color: #fff;
      padding: 30px 40px;
      line-height: 1;
      .category-box-top {
        border-bottom: 1px solid #e5e5e5;
        .category-box-top-title {
          width: 100%;
          height: 30px;
          .cbtt-l {
            float: left;
          }
          .cbtt-r {
            float: right;
            font-size: 12px;
            color: #cacaca;
            i {
              font-size: 12px;
            }
          }
        }
        li {
          position: relative;
          display: inline-block;
          width: 154px;
          height: 50px;
          background-color: #cdcdcd8a;
          border-radius: 5px;
          margin-right: 10px;
          margin-bottom: 12px;
          padding: 0 35px;
          line-height: 50px;
          img {
            position: absolute;
            width: 40px;
            vertical-align: middle;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        li:nth-child(4n) {
          margin-right: 0;
        }
      }
      .category-box-bottom {
        margin-top: 20px;
        width: 100%;
        height: 235px;
        ul {
          li {
            display: inline-block;
            width: 215px;
            height: 36px;
            margin-bottom: 20px;
            line-height: 36px;
            img{
                width: 36px;
                vertical-align: middle;
                margin-right: 10px;
            }
          }
        }
      }
    }
    &:hover .category-box {
      display: block;
    }
    &:hover {
      background-color: #fff;
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: #333;
      i {
        float: right;
      }
    }
  }
}
</style>