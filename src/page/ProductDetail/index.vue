<template>
  <div>
    <div class="detail-warp">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 16px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>手机</el-breadcrumb-item>
        <el-breadcrumb-item
          >荣耀70 8GB+256GB 墨玉青 双卡 全网通版</el-breadcrumb-item
        >
      </el-breadcrumb>
      <!-- 详情页主体 -->
      <div class="detail-content">
        <div class="detail-content-left">
          <div
            class="left-content"
            :class="{ startSticky: isStartStickyed, endSticky: isEndStickyed }"
          >
            <Zoom
              ref="zoom"
              :imgList="productDetail.img_list"
              :imgIndex="imgIndex"
            />
            <div class="dcl-img-list">
              <div @click="imgListGoLeft" class="img-list-l">
                <i class="iconfont icon-xiangzuojiantou"></i>
              </div>
              <div class="img-list-content">
                <ul ref="listUl" :style="'left:' + offSet + 'px'">
                  <li
                    :class="{ imgListActive: imgIndex == index }"
                    v-for="(img, index) in productDetail.img_list"
                    :key="index"
                    @click="changeImg(index)"
                  >
                    <img :src="img" alt="" />
                  </li>
                </ul>
              </div>
              <div @click="imgListGoRight" class="img-list-r">
                <i class="iconfont icon-xiangyoujiantou"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-content-right">
          <h1 class="sku-name">{{productDetail.goods.skuName}}</h1>
          <h1 class="sku-desc">{{productDetail.goods.skuDesc}}</h1>
          <div class="sku-summary">
            <div class="sku-summary-price">¥ {{productDetail.goods.skuPrice}}</div>
            <div class="sku-summary-active">
              <p>一站式服务</p>
              <p>满2000减0.01</p>
              <p>下单即赠180帅气室友微信</p>
            </div>
          </div>
          <div class="sku-specs">
            <div class="title">版本</div>
            <ul>
              <li :class="{actived:index == attributeIndex}" v-for="(item,index) in productDetail.goods_attribute" :key="index" @click="changeAttribute(index)">{{item}}</li>
            </ul>
          </div>
          <div class="sku-specs">
            <div class="title">颜色</div>
            <ul>
              <li :class="{actived: index== colorIndex }" v-for="(item,index) in productDetail.goods_color" :key="index" @click="changeColor(index)">{{item}}</li>
            </ul>
          </div>
          <div class="sku-number">
            <h1 class="title">数量</h1>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="settle">
            <div class="settle-title">
              <div class="title-price">¥ {{endPrice}}</div>
              <div class="title-info">已选:{{endAttribute}} {{num}}件</div>
            </div>
            <div class="settle-button">
              <div class="settle-button-buy">立即购买</div>
              <div class="settle-button-addcart" @click="addCart">
                加入购物车
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下方导航栏 -->
    <div ref="detailTab" class="detail-tab">
      <ul>
        <li
          @click="jump(detailShowTop)"
          :class="{
            detailTabActive: isDetailShowActive,
          }"
        >
          商品详情
        </li>
        <li
          @click="jump(ParameterTop)"
          :class="{ detailTabActive: isParameterActive }"
        >
          规格参数
        </li>
        <li
          @click="jump(RemarkTop)"
          :class="{ detailTabActive: isRemarkActive }"
        >
          用户评价（100条）
        </li>
      </ul>
    </div>
    <!-- 图片展示区 -->
    <div ref="detailShow" class="detail-show">
      <img src="./images/show.png" />
    </div>
    <!-- 商品参数 -->
    <Parameter ref="Parameter" />
    <!-- 评论 -->
    <Remark ref="Remark" />
  </div>
</template>

<script>
import _ from "lodash";
import Remark from "./Remark";
import Parameter from "./Parameter";
import Zoom from "./Zoom";
export default {
  name: "ProductDetail",
  components: {
    Parameter,
    Remark,
    Zoom,
  },
  data() {
    return {
      //小图片列表偏移
      offSet: 0,
      //页面滚轮位置
      top: "",
      //商品数量
      num: 1,
      detailShowTop: "",
      ParameterTop: "",
      RemarkTop: "",
      productDetail: {
        img_list: [],
        goods:{},
        goods_attribute:[],
        goods_color:[]
      },
      imgIndex: 0,
      attributeIndex:0,
      colorIndex:0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    setTimeout(() => {
      this.detailShowTop = this.$refs.detailShow.offsetTop;
      this.ParameterTop = this.$refs.Parameter.$el.offsetTop;
      this.RemarkTop = this.$refs.Remark.$el.offsetTop;
      console.log(this.$refs.zoom.$el.offsetTop);
    }, 1000);
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$API.reqGetProductDetail(this.$route.query.skuId);
      if (res.code == 200) {
        this.productDetail = res.data;
      }
    },
    //Element计数器
    handleChange(value) {
      console.log(value);
    },
    //防治滚轮滚动过快抖动
    handleScroll: _.debounce(function () {
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageYOffset
      );
      this.top = top;
    }, 16),
    //小轮播图列表左右按钮
    imgListGoLeft() {
      if (this.offSet < 0) {
        this.offSet += 93;
        this.imgIndex --
      }
    },
    imgListGoRight() {
      if (this.offSet > this.maxOffSet) {
        this.offSet += -93;
        this.imgIndex ++
      }
    },
    jump(top) {
      window.scrollTo({
        top: top - 50,
        behavior: "smooth",
      });
    },
    addCart() {
      this.$message.success("添加购物车成功！");
    },
    changeImg(index) {
      this.imgIndex = index;
    },
    changeAttribute(index){
      this.attributeIndex = index
    },
    changeColor(index){
      this.colorIndex = index
    },
  },
  computed: {
    isStartStickyed() {
      return this.top > 145 && this.top < 500;
    },
    isEndStickyed() {
      return this.top >= 500;
    },
    //小图片列表的最大偏移量
    maxOffSet() {
      return -(this.$refs.listUl.childElementCount - 4) * 93;
    },
    isDetailShowActive() {
      return (
        this.top >= this.detailShowTop - 50 && this.top < this.ParameterTop - 50
      );
    },
    isParameterActive() {
      return (
        this.top >= this.ParameterTop - 50 && this.top < this.RemarkTop - 50
      );
    },
    isRemarkActive() {
      return this.top >= this.RemarkTop - 50;
    },
    endPrice(){
      return this.productDetail.goods.skuPrice * this.num
    },
    endAttribute(){
      let endAttributes = ''
      this.productDetail.goods_attribute.forEach((item,index) => {
        if(index == this.attributeIndex){
          endAttributes += item +' '
        }
      });
      this.productDetail.goods_color.forEach((item,index) => {
        if(index == this.colorIndex){
          endAttributes += item
        }
      });
      return endAttributes
    }
  },
}; 
</script>

<style lang="less" scoped>
.imgListActive{
  border-bottom: 3px solid rgba(0, 0, 0, 0.521);
}
.actived{
  color: #f51200 !important;
  border:1px solid #f51200 !important;
}
.detailTabActive {
  color: #f51200;
}
.startSticky {
  position: fixed !important;
  top: 0;
}
.endSticky {
  position: absolute;
  bottom: 86px;
}
.isActive {
  border: #f51200;
  color: #f51200;
}
.title {
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}
.detail-warp {
  width: 1200px;
  margin: 0 auto;
  .detail-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .detail-content-left {
      position: relative;
      width: 515px;
      .dcl-bigimg {
        img {
          width: 515px;
        }
      }
      .dcl-img-list {
        width: 515px;
        height: 87px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          color: rgb(149, 149, 149);
        }
        .img-list-l {
          height: 40px;
          width: 40px;
          border-radius: 50px;
          border: 1px solid rgb(149, 149, 149);
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }
        .img-list-content {
          position: relative;
          width: 364px;
          height: 93px;
          overflow: hidden;
          ul {
            position: absolute;
            display: flex;
            transition: all 0.5s;
            li:first-child {
              margin-left: 0;
            }
            li {
              margin-left: 8px;
              cursor: pointer;
              img {
                width: 85px;
              }
            }
          }
        }
        .img-list-r {
          height: 40px;
          width: 40px;
          border-radius: 50px;
          border: 1px solid #ddd;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }
      }
    }
    .detail-content-right {
      width: 510px;
      .sku-name {
        font-size: 34px;
        line-height: 1.2;
        margin-top: 10px;
        font-weight: 400;
      }
      .sku-desc {
        font-size: 14px;
        margin-top: 8px;
        font-weight: 400;
      }
      .sku-summary {
        display: flex;
        align-items: center;
        width: 100%;
        height: 138px;
        padding: 40px 0;
        margin-top: 36px;
        margin-bottom: 15px;
        border: solid #e4e4e4;
        border-width: 1px 0;
        .sku-summary-price {
          width: 230px;
          font-size: 40px;
          color: #f51200;
          line-height: 55px;
          border-right: 1px solid #e4e4e4;
        }
        .sku-summary-active {
          height: 55px;
          p {
            font-size: 12px;
            color: rgb(115, 111, 111);
            margin-left: 10px;
            margin-bottom: 5px;
          }
        }
      }
      .sku-specs {
        ul {
          display: flex;
          flex-wrap: wrap;
          height: 134px;
          justify-content: space-between;
          li {
            cursor: pointer;
            width: 245px;
            height: 57px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 10px;
            font-size: 16px;
            color: #777;
            text-align: center;
            line-height: 57px;
          }
        }
        width: 100%;
      }
      .settle {
        width: 100%;
        margin-top: 50px;
        padding: 58px 0 86px;
        border-top: 1px solid #e5e5e5;
        .settle-title {
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          .title-price {
            padding-right: 18px;
            border-right: 1px solid #e5e5e5;
            font-size: 25px;
            color: #f51200;
          }
          .title-info {
            margin-left: 20px;
            font-size: 14px;
            color: #777;
          }
        }
        .settle-button {
          width: 100%;
          height: 46px;
          margin-top: 58px;
          display: flex;
          .settle-button-buy {
            width: 170px;
            height: 46px;
            border-radius: 50px;
            background-color: #ff0c53;
            line-height: 46px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
          .settle-button-addcart {
            margin-left: 20px;
            width: 170px;
            height: 46px;
            background-color: #444;
            border-radius: 50px;
            line-height: 46px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.detail-tab {
  background-color: #fff;
  border-top: 1px solid #a4a4a4;
  border-bottom: 1px solid #a4a4a4;
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0px;
  ul {
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #a4a4a4;
    align-items: center;
    line-height: 50px;
    li:first-child {
      margin-left: 0;
    }
    li {
      margin-left: 50px;
      cursor: pointer;
    }
  }
}
.detail-show {
  img {
    width: 100%;
  }
}
</style>