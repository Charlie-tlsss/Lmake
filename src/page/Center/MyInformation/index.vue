<template>
  <div class="information">
    <div class="information-content">
      <div class="title">个人信息</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item class="pic">
          <div class="user-pic">
            <img src="https://upfile-drcn.platform.hihonorcloud.com/FileServer/image/b.8550086500035894820.20221115172124.6wmaoZH0VdnJgK33fc2SBV8n68eVZ7I5.1000.C5C95E2AEC0B435D607BE22AE52A81AD2EE056A587D73723B43DBB6682A36A7E.png" alt="">
            <span>头像</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </div>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.region" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button style="text-align:center" type="primary" @click="onSubmit">保存修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInformation",
  data() {
    return {
      
      form: {
        date: "",
        name: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
.el-form {
  padding-right: 30px;
  margin-top: 20px;
}
.el-form-item{
  margin-bottom: 40px;
}
::v-deep .el-input__inner {
  background: rgba(0, 0, 0, 0.05);
}
.el-select ,.el-input {
  width: 350px;
}
.pic{
  width:100%;
}
.information {
  width: 100%;
  background-color: #fff;
  .information-content {
    width: 900px;
    height: 710px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    .title {
      font-size: 32px;
      font-weight: 350;
      margin-bottom: 40px;
    }
  }
  .user-pic {
    width: 405px;
    padding-right: 10px;
    border-bottom: 1px solid rgba(141, 141, 141, 0.411);
    height: 100%;
    display: flex;
    margin-left: -55px;
    overflow: hidden;
    position: relative;
    padding-bottom: 30px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
    span{
      margin-left: 10px;
    }
    i{
      margin-right: 0;
      position: absolute;
      right: 0;
    }
  }
}
</style>