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

        <!-- 精品推荐 -->

        <!-- 分类产品 -->
        
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category";
export default {
  name: "Shop",
  components: {
    Category,
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
          transition: all .5s;
          cursor: pointer;
          &:hover{
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
      &:hover{
       background-color: rgba(183, 183, 183, 0.8);
      }
    }
    .gbf {
      top: 78%;
      left: -100px;
    }
    .gbr {
      top: 78%;
      right: -100px;
    }
  }
}
</style>