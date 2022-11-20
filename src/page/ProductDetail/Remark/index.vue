<template>
  <div class="remark">
    <div class="remark-warp">
      <div class="remark-header">好评度 <span>99%</span></div>
      <div class="remark-content-list">
        <RemarkDetail />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Remark",
  components:{
  }
};
</script>

<style lang="less" scoped>
.remark-warp {
    border-top: 1px solid #000;
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
  overflow: auto;
  .remark-header {
    padding-top: 20px;
    width: 100%;
    height: 100px;
    color: rgb(142, 142, 142);
    span {
      margin-left: 10px;
      font-size: 28px;
      color: black;
    }
  }
  .remark-content-list {
    width: 100%;
    height: 340px;
    padding: 50px 0 60px;
   
  }
}
</style>