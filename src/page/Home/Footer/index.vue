<template>
  <div class="footer-box-warp">
    <div class="footer-box">
      <el-row>
        <el-col :span="24">
          <div class="footer-box-one">
            回到顶部<i class="iconfont icon-xiangshang"></i>
          </div>
        </el-col>
      </el-row>
      <div class="footer-box-two">
        <!-- <div class="footer-two-left"></div>
        <div class="footer-two-content"></div> -->
        <el-row :gutter="20">
          <el-col :md="24" :lg="4"
            ><div class="footer-box-two-left">
              <p>
                消费者热线电话
                <i class="iconfont icon-24gl-phoneLoudspeaker"></i>
              </p>
              <p class="tel">消费者服务热线 95030</p>
              <a href="">在线客服</a>
            </div></el-col
          >
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item hidden-md-and-down"></div
          ></el-col>
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item">
              <ul>
                <li>推荐产品</li>
                <li>手机</li>
                <li>笔记本</li>
                <li>平板</li>
                <li>穿戴</li>
                <li>智慧屏</li>
                <li>路由</li>
                <li>音频</li>
                <li>配件</li>
                <li>精选生态</li>
              </ul>
            </div></el-col
          >
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item">
              <ul>
                <li>服务与支持</li>
                <li>保修政策</li>
                <li>保修状态查询</li>
                <li>维修备件价格</li>
                <li>维修进度查询</li>
                <li>联系我们</li>
                <li>寄修服务</li>
                <li>服务店查询</li>
                <li>推荐服务隐私声明</li>
                <li>推荐服务用户协议</li>
              </ul>
            </div></el-col
          >
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item">
              <ul>
                <li>荣耀ESG</li>
                <li>领导力</li>
                <li>绿色环保</li>
                <li>隐私安全</li>
                <li>青年赋能</li>
                <li>行为准则</li>
                <li>廉洁声明</li>
                <li>合规基调</li>
                <li>安全公告</li>
              </ul>
            </div></el-col
          >
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item">
              <ul>
                <li>软件应用</li>
                <li>Magic UI 6.0</li>
                <li>我的荣耀</li>
                <li>荣耀帐号</li>
                <li>荣耀互联</li>
                <li>手机助理</li>
                <li>换机克隆</li>
                <li>荣耀分享</li>
                <li>预置应用公示</li>
                <li>驱动下载</li>
              </ul>
            </div></el-col
          >
          <el-col :md="24" :lg="3"
            ><div class="footer-box-two-item" style="height: 0">
              <ul>
                <li>友情链接</li>
                <li>宁品汇</li>
                <li>泽选商城</li>
              </ul>
            </div></el-col
          >
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :md="24" :lg="4"
            ><div class="footer-box-two-item"></div
          ></el-col>
        </el-row> -->
      </div>
      <div class="footer-box-three">
        <div class="footer-share">
          <a href=""><i class="iconfont icon-weibo"></i></a>
          <a href=""><i class="iconfont icon-weixin"></i></a>
          <a href=""><i class="iconfont icon-weibo"></i></a>
          <a href=""><i class="iconfont icon-weixin"></i></a>
        </div>
        <div class="footer-language">
          <i class="iconfont icon-diqiu"></i>
          <span>China(简体中文)</span>
        </div>
      </div>
      <div class="footer-box-four">
        <div class="four-left">
          <a href="">网站地图</a>
          <a href="">隐私政策</a>
          <a href="">使用条款</a>
          <a href="">关于cookies</a>
          <a href="">法律信息</a>
          <a href="">联系我们</a>
        </div>
        <div class="four-right">
          版权所有 © 梁造优品有限公司 2020-2022 保留一切权利.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer-box-warp {
  max-width: 100%;
  background-color: #000;
  .footer-box {
    background-color: #000;
    margin: 0 auto;
    max-width: 1400px;
    padding: 10px 20px 40px;
    .footer-box-one {
      font-size: 14px;
      color: #ffffff66;
      text-align: right;
    }
    .footer-box-two {
      margin: 50px 0 100px;
      width: 100%;
      .footer-box-two-left {
        font-size: 18px;
        color: #fff;
        .tel {
          margin-top: 15px;
          font-size: 16px;
          color: #ffffff66;
        }
        a {
          display: inline-block;
          font-size: 16px;
          margin-top: 15px;
          margin-bottom: 30px;
        }
        i {
          font-size: 20px;
        }
      }
      .footer-box-two-item {
        height: 300px;
        @media only screen and (max-width: 1200px) {
          ul {
            border-top: 1px solid #ddd;
          }
        }
        li:first-child {
          font-size: 16px;
          color: #fff;
          opacity: 1;
        }
        li {
          font-size: 12px;
          font-weight: 500;
          margin-top: 10px;
          color: #fff;
          opacity: 0.4;
          cursor: pointer;
        }
      }
    }
    .footer-box-three {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #535353;
      display: flex;
      justify-content: space-between;
      .footer-share {
        a {
          text-decoration: none;
          display: inline-block;
          font-size: 28px;
          line-height: 50px;
          margin-left: 12px;
        }
        a:first-child {
          margin-left: 0;
        }
        i {
          font-size: 28px;
          // line-height: 50px;
          // margin-left: 12px;
        }
      }
      .footer-language {
        color: #fff;
        line-height: 50px;
        i {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
    .footer-box-four {
      margin-top: 30px;
      width: 100%;
      height: 25px;
      display: flex;
      justify-content: space-between;
      .four-left {
        width: 50%;
        a:first-child {
          margin-left: 0;
        }
        a {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          line-height: 25px;
          margin-left: 12px;
        }
      }
      .four-right {
        font-size: 12px;
        color: rgba(134, 134, 134, 0.404);
      }
    }
  }
}
</style>
