<template>
  <div class="container" :class="{ 'sign-up-mode': isRegister }">
    <div class="forms-container">
      <div class="signin-signup">
        <el-form class="sign-in-form demo-ruleForm">
          <h2 class="title">登录</h2>
          <el-form-item>
            <el-input v-model.trim="loginForm.username" placeholder="用户名">
              <i slot="prefix" class="iconfont icon-yonghuming"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="密码"
            >
              <i slot="prefix" class="iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-button @click.prevent="login" class="btn">登录 </el-button>
        </el-form>
        <el-form
          :rules="rules"
          class="sign-up-form demo-ruleForm"
          ref="ruleForm"
          :model="userForm"
        >
          <h2 class="title">注册</h2>
          <el-form-item prop="username">
            <el-input
              @input="isUsernameOccupy(userForm.username)"
              v-model.trim="userForm.username"
              placeholder="用户名"
            >
              <i slot="prefix" class="iconfont icon-yonghuming"></i>
            </el-input>
            <i
              v-if="usernameStatus === 1"
              class="iconfont icon-chenggong1 isUsernameOccupy"
              >用户名可用</i
            >
            <i
              v-if="usernameStatus === 0"
              style="color: red"
              class="iconfont icon-shibai isUsernameOccupy"
              >用户已经被占用</i
            >
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model.trim="userForm.email" placeholder="邮箱">
              <i slot="prefix" class="iconfont icon-icon-mail"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="codeKey">
            <el-input
              type="number"
              v-model.trim="userForm.codeKey"
              class="code"
              placeholder="验证码"
            >
              <i slot="prefix" class="iconfont icon-yanzhengma"></i>
            </el-input>
            <input
              :disabled="codeStatus != '获取验证码'"
              @click="getCode"
              :class="{ doNotClick: codeStatus != '获取验证码' }"
              class="get-code"
              :value="codeStatus"
              type="button"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model.trim="userForm.password"
              placeholder="密码"
            >
              <i slot="prefix" class="iconfont icon-mima"></i>
            </el-input>
          </el-form-item>

          <el-button
            @click.prevent="submitForm"
            type="submit"
            class="btn"
            value="立即注册"
            >立即注册
          </el-button>
        </el-form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>加入我们</h3>
          <p>加入Lmake,成为本站的一份子。</p>
          <button class="btn transparent" @click="changeState()">去注册</button>
        </div>
        <img src="./images/log.svg" class="image" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已有帐号？</h3>
          <p>立即登录已有帐号，享受独家权益。</p>
          <button class="btn transparent" @click="changeState()">去登录</button>
        </div>
        <img src="./images/register.svg" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      userForm: {
        username: "",
        email: "",
        codeKey: "",
        password: "",
      },
      //表单验证规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 16, message: "用户名过短", trigger: "blur" },
        ],
        codeKey: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 6, max: 6, message: "验证码必须为6位", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
      isRegister: false,
      usernameStatus: null,
      codeStatus: "获取验证码",
    };
  },
  methods: {
    changeState() {
      this.isRegister = !this.isRegister;
    },
    //用户名是否被占用
    isUsernameOccupy: _.throttle(async function (username) {
      let params = {
        username: username,
      };
      if (username.length <= 3) return (this.usernameStatus = null);
      let res = await this.$API.reqisUsernameOccupy(params);
      res.code == 200 ? (this.usernameStatus = 1) : (this.usernameStatus = 0);
    }, 2000),
    //获取验证码
    async getCode() {
      if (!this.userForm.email)
        return this.$notify({
          title: "错误",
          message: "邮箱不可为空",
          type: "error",
          position: "top-left",
        });
      this.codeStatus = 60;
      let timer = setInterval(() => {
        this.codeStatus -= 1;
        if (this.codeStatus <= 0) {
          this.codeStatus = "获取验证码";
          clearInterval(timer);
        }
      }, 1000);
      let res = await this.$API.reqGetCode({ email: this.userForm.email });
      if (res.code == 200) {
        this.$notify({
          title: "成功",
          message: "验证码已发送到您的邮箱中，请注意查收",
          type: "success",
          position: "top-left",
        });
      }
    },
    //提交注册
    async submitForm() {
      for (let item in this.userForm) {
        if (!this.userForm[item])
          return this.$notify({
            title: "错误",
            message: "输入有误,请重新提交",
            type: "error",
            position: "top-left",
          });
      }
      let res = await this.$API.reqReguser(this.userForm);
      if (res.code == 200) {
        this.$notify({
          title: "成功",
          message: "恭喜您，注册成功",
          type: "success",
          position: "top-left",
        });
        setTimeout(() => {
          this.isRegister = false;
        }, 1000);
      } else {
        this.$notify({
          title: "错误",
          message: res.message,
          type: "error",
          position: "top-left",
        });
      }
    },
    //登录
    login() {
      if (!this.loginForm.username || !this.loginForm.password)
        return this.$notify({
          title: "错误",
          message: "用户名或密码不可为空",
          type: "error",
          position: "top-right",
        });
      let res = this.$store.dispatch("login", this.loginForm);
      if(res){
        this.$notify({
          title: "成功",
          message: "登陆成功！",
          type: "success",
          position: "top-right",
        });
        this.$router.push('/shop')
      }
    },
  },
};
</script>

<style lang="less" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.el-item {
}
.isUsernameOccupy {
  position: absolute;
  right: 20px;
  color: #67c23a;
  top: 50%;
  transform: translateY(-50%);
}
.doNotClick {
  cursor: not-allowed !important;
}
.el-input {
  width: 350px;
  height: 55px;
  border-radius: 55px;
  i {
    line-height: 55px;
    margin-left: 20px;
    font-size: 18px;
    color: #686767c7;
  }
}
::v-deep .el-input__inner {
  font-size: 18px;
  font-weight: 600;
  height: 55px;
  border-radius: 55px;
  background-color: #f0f0f0;
  border: none;
  padding-left: 60px;
  &::placeholder {
    color: #686767c7;
    font-size: 18px;
    font-weight: 600;
  }
}
::v-deep .el-form-item__error {
  margin-left: 50px;
  font-family: 14px;
  font-weight: 700;
}
.code {
  width: 225px;
}
.get-code {
  width: 125px;
  height: 55px;
  border-radius: 55px;
  background-color: #f0f0f0;
  color: #686767c7;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border: 0;
}
input {
  font-family: "Poppins", sans-serif;
}
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: flex;
  align-items: center;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  margin-left: 20px;
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  margin-left: 18px;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}
</style>