<template>
  <div class="remark-list">
    <div class="remark-list-title">
      <div class="title-desc">商品详情</div>
      <div class="title-btn">操作</div>
    </div>
    <div class="remark-list-item">
      <div class="list-item-img">
        <img
          src="https://img10.360buyimg.com/pop/s380x300_jfs/t1/90162/23/31249/63765/63172194E28a12de6/91dd9acca89f2fd1.png.webp"
          alt=""
        />
      </div>
      <div class="list-item-title">HUAWEI Mate 50 RS 512GB 胭紫瓷</div>
      <div class="list-item-btn">
        <input v-if="isRemarked" type="button" value="评价晒单" />
        <input v-else type="button" value="查看评价" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemarkLsit",
  data(){
    return {
        isRemarked:true
    }
  }
};
</script>

<style lang="less" scoped>
.remark-list {
  width: 100%;
  height: 100px;
  background-color: #fff;
  .remark-list-title {
    height: 50px;
    width: 100%;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .remark-list-item {
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
    width: 100%;
    height: 150px;
    background-color: #fff;
    display: flex;
    align-items: center;
    .list-item-img {
        margin-left: 83px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .list-item-title{
        margin-left: 35px;
    }
    .list-item-btn{
        margin-left: 290px;
        input{
            width: 100px;height: 40px;
            border-radius: 40px;
            border: 0;
            background-color: #409eff;
            color: #fff;
            cursor: pointer;
        }
    }
  }
}
</style>