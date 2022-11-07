<template>
  <div class="trade">
    <div class="trade-warp">
      <div class="trade-title">核对订单信息</div>
      <div class="trade-address">
        <div class="trade-address-title">收货人信息</div>
        <div class="trade-address-list">
          <ul>
            <li class="address-item address-checked">
              <div class="item-top">
                <span>陈家梁</span>
                <span>18698917982</span>
              </div>
              <div class="item-text">
                 辽宁省 葫芦岛市 绥中县 12312345yretfwdeqrfegbtfrfw 
              </div>
              <div class="item-delete">
                删除
              </div>
            </li>

            <li class="address-item"></li>
            <li @click="addAddress" class="new-address">
              <i class="iconfont icon-jia"></i>
              <div>添加收货地址</div>
            </li>
          </ul>
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
      // 省市区级联
      options: regionDataPlus,
      selectedOptions: [],
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
  },
};
</script>

<style lang="less" scoped>
.address-checked{
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
      width: 100%;
      margin-top: 20px;
      padding: 35px;
      background-color: #fff;
      .trade-address-title {
        line-height: 30px;
        color: #333;
        font-size: 20px;
        margin: 0;
        padding: 5px 0;
      }
      .trade-address-list {
        ul {
          display: flex;
          flex-wrap: wrap;
          .address-item {
            position: relative;
            width: 271px;
            height: 157px;
            margin-right: 18px;
            margin-bottom: 20px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 3px;
            overflow: hidden;
            &:hover .item-delete{
                display: block;
            }
            .item-top {
              margin: 30px 22px 15px;
              overflow: hidden;
              span:last-child{
                float: right;
              }
            }
            .item-text{
                margin: 0 22px 0;
            }
            .item-delete{
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