<template>
  <div>
    <div class="short-cut">
      <div class="s-warp">
        <div class="s-sub">
          <ul>
            <li>关于梁造</li>
            <li>新闻</li>
            <li>梁造官网</li>
            <li>会员</li>
            <li>企业购</li>
          </ul>
        </div>
        <div class="s-main">
          <ul>
            <li>
              <div v-if="isLogin">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    {{ username }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的商城</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div v-else>
                <router-link to="/login">登录</router-link> |
                <router-link to="/register">注册</router-link>
              </div>
            </li>
            <li><router-link to="/center">我的订单</router-link></li>
            <li><router-link to="/cart">购物车(0)</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header-warp">
        <router-link to="/" class="header-logo">
          <img src="@/assets/logo.png" />
        </router-link>
        <div class="header-list">
          <ul @click="getSearchList($event)">
            <li>手机</li>
            <li>笔记本</li>
            <li>平板</li>
            <li>穿戴</li>
            <li>智慧屏</li>
          </ul>
        </div>
        <div class="header-search">
          <router-link to="/search" class="iconfont icon-sousuo"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShopNav",
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    let res = this.$store.dispatch("getUserInfo");
    if (res.code == 200) this.isLogin = true;
  },
  methods: {
    getSearchList(e) {
      this.$router.push({
        path: "/searchlist",
        query: {
          keyWord: e.target.innerText,
        },
      });
    },
  },
  computed: {
    ...mapState({
      username: (state) => state.user.userInfo.username,
    }),
  },
};
</script>

<style lang="less" scoped>
.el-dropdown {
  color: #fff;
}
.short-cut {
  width: 100%;
  height: 36px;
  background-color: #000;
  .s-warp {
    width: 1200px;
    height: 36px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    li:last-child {
      margin: 0;
    }
    ul {
      opacity: 0.8;
      a {
        color: #fff;
      }
    }
    li {
      margin-right: 30px;
      float: left;
      color: #fff;
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
}
.header {
  width: 100%;
  box-shadow: 0 1px 20px rgba(137, 137, 137, 0.375);
  .header-warp {
    width: 1200px;
    height: 65px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo {
      img {
        width: 105px;
        cursor: pointer;
      }
    }
    .header-list {
      ul {
        display: flex;
        margin-right: 78px;
        li {
          width: 100px;
          text-align: center;
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
    .header-search {
      i {
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>>

