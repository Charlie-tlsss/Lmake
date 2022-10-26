<template>
  <div>
    <!-- 轮播图区域 -->
    <div class="shop-swiper">
      <el-carousel trigger="click" height="550px">
        <el-carousel-item>
          <img src="./images/swiper1.webp" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./images/swiper2.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./images/swiper3.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./images/swiper5.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="shop-content">
      <div class="shop-warp">
        <!-- 二级联动 -->
        <Category />
        <!-- newProduct -->
        <h2 class="title">新品热销</h2>
        <div class="new-product">
          <div class="new-product-bigimg">
            <img
              src="https://hshop.honorfile.com/pimages//pages/picImages/84986429666612468948.jpg"
              alt=""
            />
          </div>
          <ul>
            <li v-for="item in 4" :key="item">
              <img
                src="https://hshop.honorfile.com/pimages//pages/picImages/05618892566619881650.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <!-- 限时购 -->
        <h2 class="title">限时购</h2>
        <div class="gird">
          <!-- <ul :style="'left' + a + 'px'"> -->
          <ul :style="'left:' + OffsteValue + 'px'">
            <li v-for="item in 10" :key="item">
              <img
                class="gird-img"
                src="https://hshop.honorfile.com/pimages/product/6936520804870/428_428_2ED41DE27B733824B45A4B96C07F60E669E62F163B09F454mp.png"
              />
              <div class="gird-title">荣耀Earbuds 3 Pro {{ item }}</div>
              <div class="gird-desc">到手价749元</div>
              <p class="gird-price">¥849</p>
            </li>
          </ul>
        </div>
        <div class="gird-btnbox">
          <div class="gird-btn gbf" @click="goLeft">
            <i class="iconfont icon-xiangzuojiantou"></i>
          </div>
          <div class="gird-btn gbr" @click="goRight">
            <i class="iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <!-- 热销单品 -->
        <h2 class="title">热销单品</h2>
        <div class="hot-goods">
          <div class="hot-goods-bigimg">
            <img
              class="borders"
              src="https://hshop.honorfile.com/pimages/frontLocation/content/01118480516618481110.png"
            />
          </div>
          <ul class="hot-goods-list">
            <li class="borders" v-for="item in 6" :key="item">
              <img
                class="hot-goods-img"
                src="https://hshop.honorfile.com/pimages/product/6936520807086/428_428_FC0A0EDDABE502109371CA4743CBB3F118EB646C89B4F13Bmp.png"
              />
              <div class="hot-goods-title">荣耀Magic4 至臻版</div>
              <div class="hot-goods-desc">享受24期免息</div>
              <p class="hot-goods-price">¥7849</p>
            </li>
          </ul>
        </div>
        <!-- 精品推荐 -->
        <h2 class="title">精品推荐</h2>
        <div class="goods-recommend">
          <ul>
            <li v-for="item in 3" :key="item">
              <div class="goods-recommend-img">
                <img
                  src="https://hshop.honorfile.com/pimages/product/6936520809332/428_428_95B882BD0DA023DBA1BB71B0C9ED33ECD8748AE09EC01EE9mp.png"
                  alt=""
                />
              </div>
              <div class="goods-recommend-text-content">
                <div class="goods-recommend-title">荣耀智慧屏X3i</div>
                <div class="goods-recommend-desc">最高享6期免息</div>
                <div class="goods-recommend-price">¥1599</div>
                <div class="goods-recommend-button">立即购买</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 商品展示 -->
        <GoodsBox />
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category";
import GoodsBox from "./GoodsBox";
export default {
  name: "Shop",
  components: {
    Category,
    GoodsBox
  },
  data() {
    return {
      // 抢购的列表偏移值
      OffsteValue: 0,
    };
  },
  methods: {
    goLeft() {
      if (this.OffsteValue >= 0) return;
      this.OffsteValue += 305;
      console.log(this.OffsteValue);
    },
    goRight() {
      if (this.OffsteValue <= -1830) return;
      this.OffsteValue -= 305;
      console.log(2);
    },
  },
};
</script>

<style lang="less" scoped>
.borders {
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  }
}
.title {
  height: 76px;
  padding: 20px 0;
  font-size: 26px;
  line-height: 36px;
}
/deep/ .el-carousel__button {
  // 默认按钮的颜色大小等
  width: 36px;
  height: 6px;
  border: none;
  border-radius: 20px;
  background: #ffffff;
  opacity: 1;
}
/deep/ .is-active .el-carousel__button {
  // 选中图片的颜色
  background: #60606043;
  opacity: 1;
}
.shop-swiper {
  width: 100%;
  img {
    object-fit: cover;
    height: 550px;
    max-width: 100%;
  }
}
.shop-content {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  .shop-warp {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    // newProduct
    .new-product {
      width: 100%;
      height: 610px;
      img {
        width: 100%;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
      .new-product-bigimg {
        float: left;
        height: 590px;
        width: 590px;
        overflow: hidden;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-left: 20px;
          margin-bottom: 20px;
          width: 285px;
          height: 285px;
          overflow: hidden;
        }
      }
    }
    // 限时购
    .gird {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
      ul {
        position: absolute;
        display: flex;
        transition: all 0.5s;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          height: 380px;
          width: 285px;
          margin-right: 20px;
          margin-bottom: 20px;
          transition: all 0.5s;
          cursor: pointer;
          &:hover {
            box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
          }
          .gird-img {
            width: 120px;
            padding: 80px 0 43px;
          }
          .gird-title {
            height: 24px;
            margin-top: 9px;
            line-height: 24px;
            font-size: 16px;
          }
          .gird-desc {
            padding-top: 4px;
            height: 20px;
            font-size: 12px;
            line-height: 16px;
            color: #999;
          }
          .gird-price {
            height: 24px;
            padding: 30px 0;
            font-weight: 600;
          }
        }
      }
    }
    .gird-btnbox {
      position: relative;
      .gird-btn {
        position: absolute;
        width: 72px;
        height: 72px;
        background-color: rgba(183, 183, 183, 0.28);
        z-index: 50;
        border-radius: 50%;
        text-align: center;
        line-height: 72px;
        cursor: pointer;
        &:hover {
          background-color: rgba(183, 183, 183, 0.8);
        }
        top: -250px;
      }
      .gbf {
        left: -100px;
      }
      .gbr {
        right: -100px;
      }
    }
    // 热销单品
    .hot-goods {
      display: flex;
      width: 100%;
      height: 636px;
      .hot-goods-bigimg img {
        width: 468px;
        height: 616px;
      }
      .hot-goods-list {
        display: flex;
        flex-wrap: wrap;
        li {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 224px;
          height: 298px;
          margin-left: 20px;
          .hot-goods-img {
            margin-top: 30px;
            height: 120px;
            width: 120px;
          }
          .hot-goods-title {
            color: #000;
            font-size: 16px;
            font-weight: 400;
            margin-top: 30px;
          }
          .hot-goods-desc {
            color: #999;
            line-height: 16px;
            height: 16px;
            margin: 4px 30px 0;
            font-size: 12px;
            font-weight: 400;
          }
          .hot-goods-price {
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
    // 精品推荐
    .goods-recommend {
      height: 953px;
      ul {
        li:first-child {
          width: 1200px;
          height: 343px;
          margin-bottom: 20px;
          display: flex;
          .goods-recommend-img {
            padding: 66px 297px 0 175px;
          }
          .goods-recommend-text-content {
            margin: 0px;
            .goods-recommend-title {
              padding-top: 80px;
              font-size: 26px;
            }
          }
        }
        li:last-child {
          margin-left: 20px;
        }
        li {
          float: left;
          height: 590px;
          width: 590px;
          background-color: #fff;
          .goods-recommend-img {
            padding-top: 50px;
            text-align: center;
            img {
              width: 240px;
              height: 240px;
            }
          }
          .goods-recommend-text-content {
            margin-left: 175px;
            .goods-recommend-title {
              padding-top: 58px;
              font-size: 26px;
            }
            .goods-recommend-desc {
              padding-top: 8px;
              font-size: 18px;
              color: #000;
              opacity: 0.4;
              font-weight: 300;
            }
            .goods-recommend-price {
              margin-top: 20px;
              font-size: 26px;
              color: #000;
            }
            .goods-recommend-button {
              color: #fff;
              margin-top: 20px;
              width: 104px;
              height: 40px;
              background-color: #000;
              border-radius: 50px;
              text-align: center;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>