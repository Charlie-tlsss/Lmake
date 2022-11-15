<template>
  <div class="center">
    <div class="center-warp">
      <div class="center-menu-bar">
        <div class="user-info">
          <div class="user-pic">
            <img
              src="https://userglobal-vivofs.vivo.com.cn/RnRBscqz28sppmra/defaultimage/20201014150909/07b04f7c72183ccdb48966a5061e7d63b.png"
              alt=""
            />
          </div>
          <div class="user-name">Charlie</div>
          <div class="user-phone">18698917982</div>
        </div>
        <div class="menu-list">
          <ul ref="menuList" @click="changeList($event)">
            <li style="color: #409eff">我的订单</li>
            <li>我的评价</li>
            <li>我的积分</li>
            <li>我的优惠券</li>
            <li>我的购物卡</li>
            <li>回收单</li>
            <li>回收代金券</li>
            <li>领券中心</li>
            <li>发票抬头</li>
            <li>积分抵现</li>
            <li>收货地址</li>
            <li>账号管理</li>
          </ul>
        </div>
      </div>
      <div class="center-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
  methods: {
    changeList(e) {
      const list = {
        我的订单: "/center/myorders",
        收货地址: "/center/myaddress",
        我的评价: "/center/myremarks",
        账号管理: "/center/myinformation",
      };
      this.$refs.menuList.childNodes.forEach((item) => {
        item.style.color = "#00000080";
        item.innerHTML == e.target.innerHTML
          ? (item.style.color = "#409EFF")
          : "";
      });
      for (let item in list) {
        if (item == e.target.innerHTML) {
          this.$router.replace(list[item]);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.center {
  background-color: #f7f7fa;
  .center-warp {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0 15px;
    width: 1200px;
    margin: 0 auto;
    .center-menu-bar {
      margin-right: 12px;
      height: 815px;
      background-color: #fff;
      width: 251px;
      box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
      .user-info {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-around;
        width: 251px;
        height: 227px;
        padding: 28px;
        font-weight: 400;
        border-bottom: 1px solid rgba(161, 161, 161, 0.351);
        .user-pic {
          img {
            width: 80px;
            height: 80px;
            border-radius: 80px;
          }
        }
        .user-name {
          font-size: 16px;
        }
        .user-phone {
          font-size: 14px;
          color: #82828282;
        }
      }
      .menu-list {
        padding: 12px 0;
        ul {
          li {
            height: 47px;
            line-height: 47px;
            padding: 0 16px 0 30px;
            font-size: 15px;
            color: rgba(0, 0, 0, 0.54);
            cursor: pointer;
          }
        }
      }
    }
    .center-content {
      width: 937px;
      float: left;
    }
  }
}
</style>