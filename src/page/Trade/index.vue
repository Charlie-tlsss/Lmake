<template>
  <div class="trade">
    <div class="trade-warp">
      <div class="trade-title">核对订单信息</div>
      <div class="trade-address">
        <div class="trade-address-title">收货人信息</div>
        <div class="trade-address-list" :class="{ 'show-more': isShowMore }">
          <ul>
            <li
              v-for="address in addressMessage"
              :key="address.id"
              class="address-item address-checked"
            >
              <div class="item-top">
                <span>{{ address.addressName }}</span>
                <span>{{ address.addressPhone }}</span>
              </div>
              <div class="item-text">
                {{ address.addressText }}
              </div>
              <div class="item-delete">删除</div>
            </li>
            <li @click="addAddress" class="new-address">
              <i class="iconfont icon-jia"></i>
              <div>添加收货地址</div>
            </li>
          </ul>
        </div>
        <div @click="showMore" class="more">
          <i v-if="" class="iconfont icon-xiangxia"></i>
          <i v-else="" class="iconfont icon-xiangshang"></i>
        </div>
      </div>
      <!-- <div style="width: 460px">
        <el-cascader
          style="width: 100%"
          :options="options"
          v-model="selectedOptions"
          @change="addressChoose"
        ></el-cascader>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode,
} from "element-china-area-data";

export default {
  name: "Trade",
  data() {
    return {
      //是否显示更多地址
      isShowMore: false,
      // 省市区级联
      options: regionDataPlus,
      selectedOptions: [],
      addressMessage: [
        {
          id: 1,
          addressName: "陈家梁",
          addressPhone: "18698917982",
          addressText: "辽宁省 葫芦岛市 绥中县 大施宝村小施宝屯",
        },
        {
          id: 2,
          addressName: "陈家梁",
          addressPhone: "18698917982",
          addressText: "辽宁省 葫芦岛市 绥中县 大施宝村小施宝屯",
        },
        {
          id: 3,
          addressName: "陈家梁",
          addressPhone: "18698917982",
          addressText: "辽宁省 葫芦岛市 绥中县 大施宝村小施宝屯",
        },
        {
          id: 4,
          addressName: "陈家梁",
          addressPhone: "18698917982",
          addressText: "辽宁省 葫芦岛市 绥中县 大施宝村小施宝屯",
        },
      ],
    };
  },
  methods: {
    addAddress() {
      console.log("123");
    },
    addressChoose(value) {
      console.log(
        "省市区：",
        CodeToText[value[0]],
        CodeToText[value[1]],
        CodeToText[value[2]]
      );
    },
    //展示更多地址
    showMore() {
      this.isShowMore = !this.isShowMore;
    },
  },
};
</script>

<style lang="less" scoped>
.show-more{
  max-height: 500px !important;
}
.address-checked {
  background: url(./images/border.png);
}
.trade {
  padding-top: 20px;
  background-color: #f5f5f5;
  .trade-warp {
    width: 1200px;
    margin: 0 auto;
    .trade-title {
      width: 100%;
      height: 66px;
      line-height: 66px;
      text-align: center;
      background-color: #fff;
      color: #333;
      font-size: 20px;
      font-weight: 400;
    }
    .trade-address {
      position: relative;
      width: 100%;
      margin-top: 20px;
      padding: 35px;
      background-color: #fff;
      .more {
        position: relative;
        left: 50%;
        width: 24px;
        bottom: 1px;
        transform: translateX(-50%);
        i {
          font-size: 24px;
        }
      }
      .trade-address-title {
        line-height: 30px;
        color: #333;
        font-size: 20px;
        margin: 0;
        padding: 5px 0;
      }
      .trade-address-list {
        overflow: hidden;
        max-height: 177px;
        transition: all 0.5s;
        ul {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
          transition: max-height 1s;
          .address-item {
            position: relative;
            width: 271px;
            height: 157px;
            margin-right: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 3px;
            overflow: hidden;
            &:hover .item-delete {
              display: block;
            }
            .item-top {
              margin: 30px 22px 15px;
              overflow: hidden;
              span:last-child {
                float: right;
              }
            }
            .item-text {
              margin: 0 22px 0;
            }
            .item-delete {
              display: none;
              position: absolute;
              bottom: 5px;
              margin: 0 22px 0;
              font-size: 14px;
              color: rgb(0, 51, 255);
            }
          }
          .new-address {
            cursor: pointer;
            display: flex;
            width: 269px;
            height: 155px;
            margin-right: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 3px;
            overflow: hidden;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i {
              margin-top: 10px;
              font-size: 32px;
            }
          }
          li:nth-child(4n) {
            margin-right: 0;
          }
          li {
          }
        }
      }
    }
  }
}
</style>