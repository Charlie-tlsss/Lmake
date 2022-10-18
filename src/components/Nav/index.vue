<template>
  <div>
    <div class="pc-header">
      <a class="logo-home" href="">
        <img src="./images/logo.png" />
      </a>
      <div class="nav-lists">
        <ul>
          <li>
            <a href="">手机</a>
            <div class="nav-hover">
              <div class="nav-hover-content">
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
              </div>
            </div>
            <div class="shade"></div>
          </li>
          <li>
            <a href=""> 笔记本 </a>
            <div class="nav-hover">
              <div class="nav-hover-content">
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
                <div class="item">
                  <img src="./images/goods.png" alt="" />
                  <div class="goods-name">荣耀70 pro+</div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">平板</a>
            <div class="nav-hover">笔记本</div>
          </li>
          <li>
            <a href="">穿戴</a>
            <div class="nav-hover">笔记本</div>
          </li>
          <li>
            <a href="">智慧屏</a>
            <div class="nav-hover">笔记本</div>
          </li>
          <li>
            <a href="">更多产品</a>
            <div class="nav-hover">笔记本</div>
          </li>
        </ul>
      </div>
      <div class="user-Info">
        <a href=""><i class="search iconfont icon-sousuo"></i></a>
        <a href=""><i class="center iconfont icon-wo"></i></a>
        <a href=""><div class="Lmake-shop">梁造商城</div></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.shade{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(58, 58, 58);
}
.pc-header {
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
    a{
      text-decoration: none;
    }
  }
}

.nav-hover {
  border: 1px solid #ddd;
  position: absolute;
  top: 66px;
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
      goods-name {
      }
    }
  }
}
</style>