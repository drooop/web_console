<template>
  <div id="app" class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/yhl.png" alt="">
      </div>
      <el-form
      ref="loginFormRef"
      :model="login_form"
      :rules="loginFormRules"
      label-width="0px"
      class="login_form"
      >
        <!-- userName  -->
        <el-form-item prop="username">
          <el-input
            v-model="login_form.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input
            v-model="login_form.password"
            prefix-icon="el-icon-lock"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- button area -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_form: {
        username: 'yhlUser',
        password: 'TQcps123'
      },
      loginFormRules: {
        username: [
          {required: true, message: "please input username", trigger: "blur"},
          {min: 3, max: 10, message: "length of username between 3-10", trigger: "blur"}
        ],
        password: [
          {required: true, message: "please input password", trigger: "blur"},
          {min: 6, max: 15, message: "length of username between 6-15", trigger: "blur"}
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const {data: res} = await this.$http.post('login', this.login_form)
        // console.log(res)
        if(res.meta.status!=200)return this.$message.error('login failed')
        this.$message.success('login success')

        // save token in SessionStorage
        window.sessionStorage.setItem("token", res.data.token)

        // push jump to '/home'
        this.$router.push("/home")

      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container{
    background-color: #2b4b6b;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }.avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #dddddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
  }img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
      }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
</style>
