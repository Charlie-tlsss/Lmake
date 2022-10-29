<template>
  <div>
    <div class="pc-header">
      <a class="logo-home" href="">
        <img src="@/assets/logo.png" />
      </a>
      <div class="nav-lists">
        <ul>
          <li
            v-for="headerList in homeHeaderList"
            :key="headerList.id"
            @mouseenter="changeMask"
            @mouseleave="changeMask"
          >
            <a href="">{{ headerList.categoty }}</a>
            <div class="nav-hover">
              <div class="nav-hover-content">
                <div
                  class="item"
                  v-for="headerListItem in headerList.list"
                  :key="headerListItem.id"
                >
                  <img :src=headerListItem.skuImg alt="" />
                  <div class="goods-name">{{headerListItem.skuName}}</div>
                </div>
              </div>
            </div>
            <div class="shade"></div>
          </li>
        </ul>
      </div>
      <div class="user-Info">
        <router-link to="/search"
          ><i class="search iconfont icon-sousuo"></i
        ></router-link>
        <a href=""><i class="center iconfont icon-wo"></i></a>
        <router-link to="/shop" class="Lmake-shop">梁造商城</router-link>
      </div>
    </div>
    <div id="box1" style="height: 65px; width: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["homeHeaderList"],
  data() {
    return {};
  },
  methods: {
    changeMask() {
      this.$bus.$emit("changeMask");
    },
  },
};
</script>

<style lang="less" scoped>
.shade {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(58, 58, 58);
}
.pc-header {
  z-index: 999;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 65px;
  .logo-home {
    // margin-left: 2%;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 65px;
    img {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100px;
    }
  }
  .nav-lists ul {
    overflow: hidden;
    font-weight: 400;
    // margin-left: 2%;
    height: 65px;
    width: 650px;
    display: flex;
    font-size: 14px;
    justify-content: space-around;
    li {
      display: inline-block;
      height: 100%;
      line-height: 65px;
      transition: all 0.3s;
      &:hover {
        border-bottom: 1px solid #000;
        .nav-hover {
          height: 430px;
        }
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
      }
    }
  }
  .user-Info {
    // margin-right: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 188px;
    font-size: 24px;
    .search {
      font-size: 24px;
    }
    .center {
      font-size: 24px;
    }
    .Lmake-shop {
      width: 100px;
      height: 30px;
      border: 1px solid #000;
      border-radius: 50px;
      font-size: 14px;
      text-align: center;
      line-height: 30px;
    }
    a {
      text-decoration: none;
    }
  }
}

.nav-hover {
  position: absolute;
  background-color: #fff;
  top: 65px;
  left: 0;
  height: 0px;
  width: 100%;
  transition: all 0.6s;
  overflow: hidden;
  .nav-hover-content {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 745px;
    height: 230px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 175px;
      height: 230px;
      background-color: #ececec44;
      img {
        margin-top: 10px;
        width: 106px;
        height: 106px;
      }
    }
  }
}
</style>