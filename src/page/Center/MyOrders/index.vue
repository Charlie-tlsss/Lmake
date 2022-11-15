<template>
  <div class="my-orders">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in labels"
        :key="index"
        :label="item"
        :name="activeNames[index]"
      >
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </el-tab-pane>
    </el-tabs>
    <el-pagination :hide-on-single-page="pageNum/10 == '1'"  background layout="prev, pager, next" :total=pageNum>
    </el-pagination>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="ToBepayment">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="待发货" name="ToBedeliverGoods">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="已发货" name="fourth">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="待评价" name="ToBeEvaluate">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="退款/售后" name="AfterSales">
        <OrderList />
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script>
import OrderList from "./OrderList";
export default {
  name: "MyOrders",
  components: {
    OrderList,
  },
  data() {
    return {
      pageNum:100,
      activeName: "all",
      labels: ["全部", "待付款", "待发货", "已发货", "待评价", "退款/售后"],
      activeNames: [
        "all",
        "ToBepayment",
        "ToBedeliverGoods",
        "deliverGoods",
        "ToBeEvaluate",
        "AfterSales",
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep .el-tabs__header {
  padding-left: 80px !important;
  background-color: #fff;
  margin: 0;
}
::v-deep .el-tabs__nav-wrap::after {
  height: 0;
}
::v-deep .el-tabs__item {
  height: 48px;
  line-height: 48px;
  padding: 0 40px;
  font-weight: 400;
}

.el-pagination {
  text-align: center;
}

.my-orders {
  width: 100%;
}
</style>