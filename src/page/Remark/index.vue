<template>
  <div class="remark">
    <div class="remark-warp">
      <div v-if="isRemarked" class="remark-title">评价详情</div>
      <div v-else class="remark-title">评价晒单</div>
      <div class="remark-content">
        <div class="remark-content-product">
          <div class="product-img">
            <img
              src="https://img10.360buyimg.com/n7/jfs/t1/7169/20/17985/33829/63241b3aE7dcfd261/efb35507276509cd.jpg"
              alt=""
            />
          </div>
          <div class="product-name">荣耀X40 120Hz OLED硬核曲屏</div>
          <div class="product-price">￥1699.00</div>
        </div>
        <div v-if="isRemarked" class="remark-detail remark-left">
          <RemarkDetail />
        </div>
        <div v-else class="remark-content-desc remark-left">
          <div class="rd-title">感觉怎么样?跟大家分享一下吧~</div>
          <div class="rd-star">
            评价:
            <el-rate
              :colors="colors"
              style="margin-left: 10px"
              v-model="value1"
            ></el-rate>
          </div>
          <div class="rd-text">
            <textarea
              placeholder="感觉怎么样?跟大家分享一下吧~"
              cols="70"
              rows="5"
            ></textarea>
          </div>
          <div class="rd-img-list">
            <div class="rd-img-list-img" v-for="item in 3" :key="item">
              <div class="close">
                <i class="iconfont icon-guanbi"></i>
              </div>
              <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.ac814d062b9a4276e9c6ec6040c3aeff?rik=utB8Y1ZIIAsuJw&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f16%2f12%2f01%2f35828cdb4a61c42ca21802f6dd852b8b.jpg&ehk=GCKd9UCJKeb0uheR0oKMBWbQPNwVOK7Oqy9gttwfLGg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                alt=""
              />
            </div>
            <div class="rd-img-list-add">
              <i class="iconfont icon-jia"></i>
            </div>
          </div>
          <div class="rd-btn">
            <input type="button" value="提交" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Remark",
  data() {
    return {
      isRemarked: true,
      value1: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
};
</script>

<style lang="less" scoped>
.remark-left {
  width: 900px;
  padding: 40px 20px;
  border-left: 1px solid #a8a8a852;
  min-height: 600px;
}
.remark {
  background-color: #f7f7fa;
  padding-top: 15px;
  .remark-warp {
    width: 1200px;
    margin: 0 auto;
    .remark-title {
      height: 60px;
      width: 100%;
      background-color: #fff;
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
    }
    .remark-content {
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
      display: flex;
      .remark-content-product {
        padding-top: 20px;
        height: 300px;
        width: 300px;
        text-align: center;
        img {
          width: 200px;
          height: 200px;
        }
        .product-name {
          font-size: 18px;
          font-weight: 500;
          margin-top: 20px;
        }
        .product-price {
          margin-top: 15px;
          font-size: 16px;
          color: rgb(255, 0, 0);
        }
      }
      .remark-content-desc {
        .rd-title {
          font-size: 18px;
          font-weight: 600;
        }
        .rd-star {
          font-size: 16px;
          margin-top: 20px;
          display: flex;
        }
        .rd-text {
          margin-top: 20px;
          textarea {
            border: 1px solid #a8a8a852;
            outline: none;
            line-height: 2;
          }
        }
        .rd-img-list {
          margin-top: 20px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          div {
            width: 150px;
            height: 150px;
            margin-bottom: 10px;
            margin-right: 10px;
          }
          .rd-img-list-img {
            &:hover .close {
              display: block;
            }
            .close {
              i {
                font-size: 10px;
              }
              color: #fff;
              display: none;
              cursor: pointer;
              position: absolute;
              margin: 0;
              top: -10px;
              right: -10px;
              background-color: red;
              border-radius: 100px;
              height: 20px;
              width: 20px;
              text-align: center;
            }
            position: relative;
            border-radius: 5px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
          .rd-img-list-add {
            background-color: rgba(197, 197, 197, 0.418);
            cursor: pointer;
            text-align: center;
            line-height: 150px;
            border: 1px dashed rgba(110, 110, 110, 0.753);
            border-radius: 5px;
            i {
              font-size: 48px;
            }
          }
        }
        .rd-btn {
          margin-top: 20px;
          input {
            width: 120px;
            height: 40px;
            border-radius: 40px;
            background-color: rgb(255, 27, 27);
            color: #fff;
            border: 0;
            cursor: pointer;
          }
        }
      }
      .remark-detail {
      }
    }
  }
}
</style>