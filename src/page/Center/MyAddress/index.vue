<template>
  <div class="myaddress">
    <div class="myaddress-item">
      <div class="address-item-user">
        <div class="user-desc">
          <span v-if="1" class="defaultaddress" style="margin-left:0">默认</span>
          <span>陈家梁</span>
          <span>18698917982</span>
        </div>
        <div class="user-btn">
          <span>编辑</span>
          <span>删除</span>
        </div>
      </div>
      <div class="address-item-desc">
        <span>北京市北京市大兴区北臧村镇</span>
        <span style="margin-left:10px">满斗村109号</span>
      </div>
    </div>
    <div class="myaddress-item add-new">
        <i class="iconfont icon-jia"></i>
        添加新地址
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAddress",
};
</script>

<style lang="less" scoped>
.myaddress {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
  .myaddress-item {
    width: 440px;
    height: 90px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid rgba(142, 142, 142, 0.7);
    margin-bottom: 10px;
    padding: 16px 20px;
    .address-item-user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user-desc {
        span {
          margin-left: 10px;
          font-size: 16px;
        }
      }
      .user-btn{
        span{
            font-size: 12px;
            margin-left: 10px;
            cursor: pointer;
            &:hover{
                color: #268af0;
            }
        }
    
      }


      .defaultaddress {
        border-radius: 2px;
        color: #268af0;
        background-color: #c7e8ff;
        padding: 2px 6px;
        font-size: 10px;
      }
    }
    .address-item-desc{
        margin-top: 10px;
        span{
            font-size: 10px;
        }
    }
  }
  .add-new {
    cursor: pointer;
    border: 1px solid #268af0;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#268af0 ;
    i{
        font-size: 24px;
    }
  }
}
</style>