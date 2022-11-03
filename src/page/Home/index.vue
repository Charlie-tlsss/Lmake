<template>
  <div>
    <Nav :homeHeaderList=homeHeaderList />
    <div class="mask" :class="{ doMask: isShowMask }"></div>
    <One></One>
    <!-- 首页list区 -->
    <el-row style="margin: 0; padding: 0" :gutter="24">
      <!-- 首页list区 -->
      <el-col :xs="24" :lg="12" v-for="listItem in homeList" :key="listItem.id">
        <div class="product-List">
          <div class="product-list-content">
            <div class="product-list-content-top">
              <div class="plc-name">{{listItem.skuName}}</div>
              <div class="plc-title">{{listItem.skuDesc}}</div>
              <div class="plc-text">{{listItem.skuTitle}}</div>
              <div class="plc-btn">
                <div class="plc-btn-buy">
                  <button @click="goDetail(listItem.skuId)" >购买</button>
                </div>
                <div class="plc-btn-more">
                  <a href=""
                    >了解更多 <i class="iconfont icon-xiangyoujiantou"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="product-list-content-img">
              <img :src=listItem.skuImg />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 首页宣传区 -->
    <div class="more-container">
      <div class="more-row">
        <el-row>
          <el-col :span="24">
            <div class="more-item">
              <img src="./images/m1.jpg" alt="" />
              <div class="more-item-text">
                <div class="mit-text">LMake Talents</div>
                <div class="mit-title">2022全球设计大赛</div>
                <div class="mit-link">
                  了解更多<i class="iconfont icon-xiangyoujiantou"></i>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :lg="12">
            <div class="more-item cb">
              <div class="moreMask"></div>
              <img src="./images/m2.jpg" alt="" />
              <div class="more-item-text">
                <div class="mit-text">Lmake MAGIC MOMENTSAWARDS 2022</div>
                <div class="mit-title">影像计划</div>
                <div class="mit-link">
                  了解更多<i class="iconfont icon-xiangyoujiantou"></i>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :lg="12">
            <div class="more-item cb">
              <div class="moreMask"></div>
              <img src="./images/m3.jpg" alt="" />
              <div class="more-item-text">
                <div class="mit-text">以科技丰富文化未来遗产</div>
                <div class="mit-title">通往未来的门户</div>
                <div class="mit-link">
                  了解更多<i class="iconfont icon-xiangyoujiantou"></i>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import One from "./One";
import Nav from "./Nav";
import  { goDetailMixin }  from "@/mixin/mixins";
import { mapState } from 'vuex';
export default {
  mixins:[goDetailMixin],
  name: "Home",
  data() {
    return {
      isShowMask: false,
    };
  },
  components: {
    One,
    Footer,
    Nav,
  },
  mounted() {
    this.$bus.$on("changeMask", () => {
      this.isShowMask = !this.isShowMask;
    });
    this.$store.dispatch('getHomeBigItem')
    this.$store.dispatch('getHomeList')
    this.$store.dispatch('getHomeHeaderList')
  },
  computed:{
    ...mapState({
      homeList:(state) => state.home.homeList,
      homeHeaderList:(state) => state.home.homeHeaderList
    }),
  }
  
};
</script >

<style lang="less" scoped>
.mask {
  z-index: 1;
  width: 100%;
  height: 0px;
  position: absolute;
  background-color: #000000;
  opacity: 0;
  transition: opacity 0.6s;
}
.doMask {
  opacity: 0.4;
  height: 4377px;
}
.product-List {
  width: 100%;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  .product-list-content {
    padding: 40px 0 20px;
    height: 682px;
    width: 100%;
    .product-list-content-top {
      text-align: center;
      margin: 0 auto;
      width: 600px;
      height: 172px;
      .plc-name {
        font-size: 38px;
        font-weight: 700;
      }
      .plc-title {
        margin-top: 15px;
        font-size: 16px;
        color: #00000066;
      }
      .plc-text {
        margin-top: 15px;
        font-size: 14px;
        color: #256fff;
      }
      .plc-btn {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        .plc-btn-buy {
          button {
            background-color: #256fff;
            width: 70px;
            height: 40px;
            color: #fff;
            border: 0;
            border-radius: 20px;
            margin-right: 20px;
            cursor: pointer;
          }
        }
        .plc-btn-more {
          line-height: 40px;
        }
      }
    }
    .product-list-content-img {
      margin-top: 30px;
      text-align: center;
      overflow: hidden;
      img {
        max-width: 540px;
        max-height: 400px;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
.more-container {
  .el-row--flex {
    flex-wrap: warp !important;
  }
  width: 100%;
  background-color: #000;
  overflow: hidden;
  padding: 30px;
  .more-row {
    max-width: 1400px;
    margin: 80px auto;
  }
  .more-item {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    height: 500px;
    padding: 10px;
    overflow: hidden;
    .moreMask {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      content: " ";
      width: 100%;
      height: 500px;
      background-color: #000;
      opacity: 0;
      transition: all 0.6s;
    }
    img {
      width: 100%;
      height: 500px;
    }
    .more-item-text {
      top: 390px;
      left: 50px;
      position: absolute;
      z-index: 10;
      transition: all 0.6s;
      .mit-text {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .mit-title {
        font-size: 40px;
        margin-bottom: 25px;
      }
      .mit-link {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
  .cb {
    color: #fff;
  }
}
.more-item:hover .more-item-text {
  top: 330px;
}
.more-item:hover .moreMask {
  opacity: 0.4;
}
</style>