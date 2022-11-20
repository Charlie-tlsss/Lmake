<template>
  <ul>
    <li v-for="item in 10" :key="item">
      <div class="remark-user">
        <div class="remark-user-pic">
          <img
            src="https://userglobal-vivofs.vivo.com.cn/useravatar/20210130223427/e2b96d9eae2e45288dbaba619a7d9ef2.jpg"
            alt=""
          />
        </div>
        <div class="remark-user-name">Charlie</div>
      </div>
      <div class="remark-content">
        <div class="remark-content-star">
          <i v-for="item in 5" :key="item" class="iconfont icon-xingxing"></i>
        </div>
        <div class="remark-content-text">
          <p>很好，敏感肌也能用</p>
        </div>
        <div class="remark-content-img">
          <ul>
            <li v-for="item in 5" :key="item">
              <img
                src="https://file05.c.hihonor.com/rms/comment/image/U0044/3C20DAF18DB5F861D3C8F08E0089D265E4082C5D5A69824AA16C985ADF38F81B/100/138ede4dd41b56eaf409883e.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div class="remark-content-time">
          <div>2022-05-19 14:56:33</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
    name:'RemarkDetail'
};
</script>

<style lang="less" scoped>
 ul {
      li {
        border-bottom: 1px solid #ddd;
        display: flex;
        .remark-user {
          width: 150px;
          height: 230px;
          display: flex;

          .remark-user-pic {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background-color: orange;
            overflow: hidden;
            text-align: center;
            img {
              width: 100%;
            }
          }
          .remark-user-name {
            font-size: 15px;
            color: #999;
            margin-left: 23px;
            margin-top: 17px;
          }
        }
        .remark-content {
          width: 1050px;
          padding-top: 15px;
          .remark-content-star {
            i {
              color: rgb(255, 216, 62);
              font-size: 18px;
            }
          }
          .remark-content-text {
            width: 100%;
            padding-top: 17px;
            line-height: 30px;
            color: #333;
            font-size: 18px;
          }
          .remark-content-img {
            width: 100%;
            margin-top: 15px;
            ul {
                display: flex;
              li {
                border: 0;
                img {
                  width: 80px;
                  height: 80px;
                  margin-right: 15px;
                }
              }
            }
          }
          .remark-content-time {
            font-size: 13px;
            line-height: 24px;
            color: #a9a9a9;
            margin-top: 20px;
          }
        }
      }
    }
</style>