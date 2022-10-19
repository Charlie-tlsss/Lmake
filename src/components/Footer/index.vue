<template>
  <!-- 仅两种状态 >1200(lg):4 -->
  <div class="footer-box">
    <div class="footer-box-warp">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fbw-one">返回顶部<i></i></div>
        </el-col>
      </el-row>
      <el-row>
        <!-- <el-col :md="24" :lg="4"> -->
        <div class="fbw-two">
          <div class="fbw-two-left"></div>
          <div class="fbw-two-content">
            <div class="fbw-two-content-list"></div>
            <div class="fbw-two-content-list"></div>
            <div class="fbw-two-content-list"></div>
            <div class="fbw-two-content-list"></div>
          </div>
        </div>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fbw-three">
            <div class="fbw-three-left">
              <i class="iconfont icon-weibo"></i>
              <i class="iconfont icon-weixin"></i>
              <i class="iconfont icon-weibo"></i>
              <i class="iconfont icon-weixin"></i>
            </div>
            <div class="fbw-three-right">
              <i class="iconfont icon-diqiu"></i>
              <span>China(简体中文)</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="grid-content bg-purple fbw-four">
          <el-col :md="24" :lg="12">
            <ul>
              <li>网站地图</li>
              <li>隐私政策</li>
              <li>使用条款</li>
              <li>关于cookie</li>
              <li>法律信息</li>
              <li>除名查询</li>
            </ul>
          </el-col>
          <el-col :md="24" :lg="12"
            ><div>
              版权所有 © 梁造终端有限公司 2020-2022 保留一切权利. 粤公网安备
              888888888888号
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer-box {
  width: 100%;
  padding: 30px 20px 40px;
  background-color: #000;
}
.footer-box-warp {
  max-width: 1400px;
  height: 100%;
  background-color: skyblue;
  margin: 0 auto;
  .fbw-one {
    font-size: 12px;
    text-align: right;
    padding-right: 50px;
  }
  .fbw-two {
    height: 384px;
    margin: 50px 0 100px;
  }
  .fbw-three {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #535353;
    .fbw-three-left {
      i {
        font-size: 28px;
      }
    }
    .fbw-three-right {
    }
  }
  .fbw-four {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      width: 50%;
    }
    div {
    }
  }
}
.el-row {
  z-index: 0;
}
.el-col {
  border-radius: 4px;
  z-index: -99;
}
</style>