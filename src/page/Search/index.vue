<template>
  <div class="search-box">
    <router-link to="home" class="close"><i class="iconfont icon-guanbi"></i></router-link>
    <div class="search-content">
      <div class="search-input">
        <input type="text" placeholder="在此输入您要搜索的关键字" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="search-hotSearch">
        <p class="box-title">热门搜索</p>
        <ul>
          <li v-for="item in 3" :key="item">
            <a href="" class="hs-img">
              <img src="./images/s1.png" alt="" />
            </a>
            <div>荣耀畅玩40 Plus</div>
          </li>
        </ul>
      </div>
      <div class="quick-view">
        <p class="box-title">快速查看</p>
        <ul>
          <li>手机</li>
          <li>笔记本</li>
          <li>平板</li>
          <li>穿戴</li>
          <li>智慧屏</li>
          <li>路由</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
.box-title {
  font-size: 14px;
  color: #858383;
  margin-bottom: 12px;
}
.search-box {
  position: relative;
  width: 100%;
  height: calc(~"100vh - 65px");
  overflow: hidden;
  .search-content {
    width: 630px;
    height: 500px;
    margin: 120px auto;
    .search-input {
      width: 100%;
      height: 66px;
      border-radius: 30px;
      border: 1px solid #00000040;
      input {
        margin-top: 7px;
        margin-left: 20px;
        height: 50px;
        width: 80%;
        line-height: 66px;
        border: none;
        outline: none;
        color: #000000d4;
        font-size: 20px;
      }
      i {
        float: right;
        line-height: 66px;
        font-size: 28px;
        color: #00000084;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .search-hotSearch {
      margin-top: 46px;
      width: 630px;
      height: 236px;
      ul {
        display: flex;
        justify-content: space-between;
      }
      li {
        width: 186px;
        height: 160px;
        .hs-img {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          &:hover img{
              transform: scale(1.15);
            };
          &:hover +div{
              color:#256fff;
            }
          img {
            display: inline-block;
            width: 111px;
            line-height: 186px;
            transition: all .5s;
          }
        }

        div {
          margin-top: 16px;
          font-weight: bold;
        }
      }
    }
    .quick-view {
      margin-top: 46px;
      width: 100%;
      height: 104px;
      ul{
        display: flex;
        flex-wrap: wrap;
      }
      li{
        width: 198px;
        margin-bottom: 10px;
        margin-right: 12px;
      }
    }
  }
  .close{
    position: absolute;
    right: 60px;
    top: 20px;
    i{
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>