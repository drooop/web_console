<template>
  <el-container class="home-container">
    <!-- header -->
    <el-header>
      <div>
        <img src="../assets/yhl.png">
        <span>云海流CPS工业互联网平台</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- side bar -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div
            class="toggle-button"
            @click="toggleCollapse"
          >
            |||
        </div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          >

          <!-- menu first layer -->
          <el-submenu :index="item.id+''" v-for="item of menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>

            <!-- menu second layer -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem of item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
        </el-submenu>
        </el-menu>
      </el-aside>
      <!-- main -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    created() {
      this.getMenuList()
    },
    data(){
      return {
        menuList: [],
        iconsObj: {
          1: 'el-icon-s-platform',
          2: 'el-icon-loading'
        },
        isCollapse: false
      }
    },
    methods: {
      logout(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList(){
      const {data:res} = await this.$http.get('http://localhost:81/api/menus')
      if (res.meta.status !== 200) return this.$message.error('res.meta.msg')
      this.menuList = res.data
      console.log(res.data)
    },
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    }
    },
  }
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  // width:100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items:center;
  color: #fff;
  font-size: 20px;
  > div {
    display:flex;
    align-items:center;
    span {
      margin-left: 20px;
    }
    > img {
        width: 13%;
        height: 10%;
        border-radius: 50%;
      }
    }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: .2rem;
  cursor: pointer;
}
</style>