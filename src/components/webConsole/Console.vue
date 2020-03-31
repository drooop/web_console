<template>
  <div>
    <h3>虚拟工位控制台 转发</h3>
    <el-form
      ref="generateCMDFormRef"
      :model="cmd_form"
      :rules="generateCMDFormRules"
      label-width="0px"
    >
      <!-- url -->
      <el-form-item prop="virtualStationUrl">
        <el-input
          placeholder="请输入虚拟工位微服务地址"
          v-model="cmd_form.virtualStationUrl"
          clearable
        >
          <template slot="prepend">URL</template>
        </el-input>
      </el-form-item>
      <!-- cmd -->
      <el-form-item prop="virtualStationCMD">
        <el-input
          placeholder="请输入微服务的可执行命令代码"
          v-model="cmd_form.virtualStationCMD"
          clearable
        >
          <template slot="prepend">命令</template>
        </el-input>
      </el-form-item>
      <!-- Get/Post -->
      <el-form-item prop="cmdMethod">
        <el-radio v-model="cmd_form.cmdMethod" label="get">get</el-radio>
        <el-radio v-model="cmd_form.cmdMethod" label="post">post</el-radio>
      </el-form-item>
      <!-- repeat? -->
      <el-form-item prop="trigger_sendCMD">
        <el-radio v-model="cmd_form.trigger_sendCMD" label="once">
          单次发送
        </el-radio>
        <el-radio v-model="cmd_form.trigger_sendCMD" label="repeat">
          重复发送
        </el-radio>
      </el-form-item>
      <!-- Interval? -->
      <el-form-item prop="CMDIntervalTime">
        <el-input
          v-show="cmd_form.trigger_sendCMD === 'repeat'"
          placeholder="请输入重复发送命令时的时间间隔"
          v-model="cmd_form.CMDIntervalTime"
          clearable
        >
          <template slot="append">秒</template>
        </el-input>
      </el-form-item>
      <!-- button send -->
      <el-form-item>
        <el-button type="primary" @click="sendCMD">发送命令</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
      <!-- result -->
      <el-form-item prop="cmdResponse">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 15 }"
          placeholder="请输入内容"
          v-model="cmd_form.cmdResponse"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmd_form: {
        // virtualStationUrl: 'https://app1.sys.yhlcps.com/s1',
        virtualStationUrl: 'http://172.16.14.20:30333/testa',
        virtualStationCMD: 'start',
        trigger_sendCMD: 'once',
        CMDIntervalTime: 3,
        cmdResponse: '',
        cmdMethod: 'get'
      },
      generateCMDFormRules: {
        virtualStationUrl: [
          { required: false, message: 'please input url', trigger: 'blur' }
          // {min: 3, max: 10, message: "length of username between 3-10", trigger: "blur"}
        ],
        virtualStationCMD: [
          { required: false, message: 'please input cmd', trigger: 'blur' }
          // {min: 6, max: 15, message: "length of username between 6-15", trigger: "blur"}
        ],
        CMDIntervalTime: [
          {
            min: 1,
            max: 15,
            message: 'intervalTime must in [1s, 15s]',
            trigger: 'blur'
          }
        ],
        trigger_sendCMD: [],
        cmdResponse: [],
        cmdMethod: []
      },
      timerId: null
    }
  },
  methods: {
    async sendCMD() {
      const temp = {
        url: this.cmd_form.virtualStationUrl,
        cmd: this.cmd_form.virtualStationCMD,
        method: this.cmd_form.cmdMethod
      }
      if (this.cmd_form.trigger_sendCMD === 'once') {
        const {data: res} = await this.$http.post('http://localhost:81/api/cmd', temp)
        if(res.meta.status!=200)return this.$message.error('login failed')
        this.$message.success('login success')
        this.cmd_form.cmdResponse +=
            'ResponseData:\n' + JSON.stringify(res.data) + '\n\n\n'
      } else {
        let _this = this
          this.timerId = setInterval(async () => {
            const { data: res } = await _this.$http.post(
              'http://localhost:81/api/cmd',
              temp
            )
            if (res.meta.status !== 200)
              return _this.$message.error(res.meta.msg)
            _this.$message.success(res.meta.msg)
            _this.cmd_form.cmdResponse +=
              'ResponseData:\n' + JSON.stringify(res.data) + '\n\n\n'
          }, _this.cmd_form.CMDIntervalTime * 1000)
      }
    },
    resetForm() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }

      this.$refs.generateCMDFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped></style>
