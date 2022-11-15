<template>
  <div class="remarks">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待评价" name="first">
        <div class="tobe-remark default">
          <RemarkList />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已评价" name="second">
        <div class="remarked default">已评价</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import RemarkList from "./RemaekList";
export default {
  components: {
    RemarkList,
  },
  name: "MyRemarks",
  data() {
    return {
      activeName: "first",
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
.default {
  margin-top: 10px;
  width: 100%;
  height: 100vh;
}
.remarks {
  width: 100%;

}
</style>