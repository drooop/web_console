<template>
  <div style="font-family: 'PingFang SC'">
    <h3>虚拟工位控制台</h3>

    <!-- 折叠区域， 每个Card都可折叠 -->
    <el-collapse v-model="activeNames">
      <el-row :gutter="20">
        <!-- 左边区域，包含cmd send 和 遥控器 -->
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <!-- CMD Sender -->
            <el-card class="box-card">
              <el-collapse-item title=" CMD Sender" name="1">
                <el-form
                  ref="generateCMDFormRef"
                  :model="cmd_form"
                  :rules="generateCMDFormRules"
                  label-width="0px"
                >
                  <el-row :gutter="10">
                    <el-col :span="19">
                      <div class="grid-content bg-purple">
                        <el-form-item prop="cmd1">
                          <el-input
                            placeholder="请输入微服务的可执行命令代码"
                            v-model="cmd_form.cmd1"
                            clearable
                          >
                            <template slot="prepend">
                              <el-button type="primary" @click="sendCMD1">
                                cmd1
                              </el-button>
                            </template>
                          </el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <el-input
                          placeholder="name"
                          v-model="cmd_form.cmd1Name"
                          clearable
                        ></el-input>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row :gutter="10">
                    <el-col :span="19">
                      <div class="grid-content bg-purple">
                        <el-form-item prop="cmd2">
                          <el-input
                            placeholder="请输入微服务的可执行命令代码"
                            v-model="cmd_form.cmd2"
                            clearable
                          >
                            <template slot="prepend">
                              <el-button type="primary" @click="sendCMD2">
                                cmd2
                              </el-button>
                            </template>
                          </el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <el-input
                          placeholder="name"
                          v-model="cmd_form.cmd2Name"
                          clearable
                        ></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="19">
                      <div class="grid-content bg-purple">
                        <el-form-item prop="cmd3">
                          <el-input
                            placeholder="请输入微服务的可执行命令代码"
                            v-model="cmd_form.cmd3"
                            clearable
                          >
                            <template slot="prepend">
                              <el-button type="primary" @click="sendCMD3">
                                cmd3
                              </el-button>
                            </template>
                          </el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <el-input
                          placeholder="name"
                          v-model="cmd_form.cmd3Name"
                          clearable
                        ></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="19">
                      <div class="grid-content bg-purple">
                        <el-form-item prop="cmd4">
                          <el-input
                            placeholder="请输入微服务的可执行命令代码"
                            v-model="cmd_form.cmd4"
                            clearable
                          >
                            <template slot="prepend">
                              <el-button type="primary" @click="sendCMD4">
                                cmd4
                              </el-button>
                            </template>
                          </el-input>
                        </el-form-item>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <el-input
                          placeholder="name"
                          v-model="cmd_form.cmd4Name"
                          clearable
                        ></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-form-item>
                    <el-button type="info" @click="resetForm">重置</el-button>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="resetTimer">
                      重置Timer
                    </el-button>
                  </el-form-item>
                  <!-- result -->
                  <el-form-item prop="cmdResponse">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 7, maxRows: 7 }"
                      placeholder="请输入内容"
                      v-model="cmd_form.cmdResponse"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-card>
          </div>
        </el-col>
        <!-- 右边区域，显示设备实时状态 -->
        <el-col :span="12">
          <!-- AGV running与否 -->
          <el-card class="box-card">
            <div class="grid-content bg-purple">
              <strong>车体状态:</strong>
              {{ agv_running_status }}
            </div>
          </el-card>

          <!-- 状态区域 -->
          <el-row>
            <!-- AGV 状态 -->
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-card class="box-card">
                  <el-collapse-item title="AGV" name="3">
                    <div class="grid-content bg-purple">
                      <!-- <strong>车体:</strong> -->
                      <el-table
                        :data="agv_statusList"
                        style="width: 100%"
                        size="mini "
                        :row-style="{ height: '10px' }"
                        :header-row-style="{ height: '10px' }"
                      >
                        <el-table-column
                          prop="attr"
                          label="属性"
                        ></el-table-column>
                        <el-table-column
                          prop="value"
                          label="值"
                        ></el-table-column>
                      </el-table>
                    </div>
                  </el-collapse-item>
                </el-card>
              </div>
            </el-col>
            <!-- Slam 状态 -->
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-card class="box-card">
                  <el-collapse-item title=" Slam" name="4">
                    <div class="grid-content bg-purple">
                      <!-- <strong>SlAM:</strong> -->
                      <el-table
                        :data="slam_statusList"
                        style="width: 100%"
                        size="mini "
                        :row-style="{ height: '10px' }"
                        :header-row-style="{ height: '10px' }"
                      >
                        <el-table-column
                          prop="attr"
                          label="属性"
                        ></el-table-column>
                        <el-table-column
                          prop="value"
                          label="值"
                        ></el-table-column>
                      </el-table>
                    </div>
                  </el-collapse-item>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!-- Controller -->
      <el-row :gutter="10">
        <el-col>
          <!-- Card Start -->
          <el-card class="box-card">
            <el-collapse-item title=" Remote Controller" name="2">
              <!-- 货叉控制区域 -->
              <el-divider></el-divider>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="3">
                      <el-button plain size="mini">执行</el-button>
                    </el-col>
                    <el-col :span="5">货叉：</el-col>
                    <el-col :span="8">
                      <el-input v-model="forkLift.pos" size="mini" disabled>
                        <template slot="prepend">
                          位置
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="forkLift.params.speed"
                        placeholder="please input speed"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            速度%
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        v-model="forkLift.params.method"
                        placeholder="GET/POST"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            方法
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <!-- AGV前进到绝对值区域 -->
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="5">
                    <el-col :span="3">
                      <el-button plain size="mini">执行</el-button>
                    </el-col>
                    <el-col :span="5">到绝对值：</el-col>
                    <el-col :span="7">
                      <el-input
                        v-model="AGVMoveForwardAbsolute.params.vector1"
                        placeholder="向量1"
                        size="mini"
                      >
                        <template slot="prepend">
                          向量
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input
                        v-model="AGVMoveForwardAbsolute.params.vector2"
                        placeholder="向量2"
                        size="mini"
                      ></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveForwardAbsolute.params.speed"
                        placeholder="please input speed"
                        size="mini"
                      >
                        <template slot="prepend">
                          速度%
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveForwardAbsolute.params.method"
                        placeholder="GET/POST"
                        size="mini"
                      >
                        <template slot="prepend">
                          方法
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <!-- AGV前进一段相对值区域 -->
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="3">
                      <el-button plain size="mini">执行</el-button>
                    </el-col>
                    <el-col :span="5">去相对位置：</el-col>
                    <el-col :span="8">
                      <el-input
                        v-model="AGVMoveForwardRelative.params.relativeLength"
                        size="mini"
                      >
                        <template slot="prepend">
                          距离mm
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveForwardRelative.params.speed"
                        placeholder="please input speed"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            速度%
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveForwardRelative.params.method"
                        placeholder="GET/POST"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            方法
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <!-- AGV后退到绝对值区域 -->
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="5">
                    <el-col :span="3">
                      <el-button plain size="mini">执行</el-button>
                    </el-col>
                    <el-col :span="5">到绝对值：</el-col>
                    <el-col :span="7">
                      <el-input
                        v-model="AGVMoveBackwardAbsolute.params.vector1"
                        placeholder="向量1"
                        size="mini"
                      >
                        <template slot="prepend">
                          向量
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input
                        v-model="AGVMoveBackwardAbsolute.params.vector2"
                        placeholder="向量2"
                        size="mini"
                      ></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveBackwardAbsolute.params.speed"
                        placeholder="please input speed"
                        size="mini"
                      >
                        <template slot="prepend">
                          速度%
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveBackwardAbsolute.params.method"
                        placeholder="GET/POST"
                        size="mini"
                      >
                        <template slot="prepend">
                          方法
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <!-- AGV后退一段相对值区域 -->
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="3">
                      <el-button plain size="mini">执行</el-button>
                    </el-col>
                    <el-col :span="5">去相对位置：</el-col>
                    <el-col :span="8">
                      <el-input
                        v-model="AGVMoveBackwardRelative.params.relativeLength"
                        size="mini"
                      >
                        <template slot="prepend">
                          距离mm
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveBackwardRelative.params.speed"
                        placeholder="please input speed"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            速度%
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        v-model="AGVMoveBackwardRelative.params.method"
                        placeholder="方法编号"
                        size="mini"
                      >
                        <template slot="prepend">
                          <el-button>
                            方法
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <!-- AGV方向控制区域 -->
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="3">
                      <el-row :gutter="20">
                        <el-col :span="3">
                          <el-button plain size="mini">执行</el-button>
                        </el-col>
                      </el-row>

                      <el-row :gutter="20">
                        <el-col :span="3">
                          <el-button plain size="mini">执行</el-button>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="5">
                      <el-row :gutter="20">
                        左转
                      </el-row>
                      <el-row :gutter="20">
                        右转
                      </el-row>
                    </el-col>
                    <el-col :span="8">
                      <el-input size="mini">
                        <template slot="prepend">
                          位置
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input placeholder="please input speed" size="mini">
                        <template slot="prepend">
                          <el-button>
                            速度%
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input placeholder="GET/POST" size="mini">
                        <template slot="prepend">
                          <el-button>
                            方法
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-card>
        </el-col>
      </el-row>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmd_form: {
        // virtualStationUrl: 'https://app1.sys.yhlcps.com/s1',
        asigned_ip: '',
        virtualStationUrl: '',
        virtualStationCMD: 'start',
        cmd1: 'http://10.1.1.134:8888/slam/loc',
        cmd2: 'http://10.1.1.134:8004/agv/brplc/iostatus',
        cmd3: 'http://10.1.1.134:8888/slam/loc',
        cmd4: 'http://10.1.1.134:8888/slam/loc',
        cmd1Method: 'get',
        cmd2Method: 'get',
        cmd3Method: 'get',
        cmd4Method: 'get',
        cmd1Name: 'cmd1',
        cmd2Name: 'cmd2',
        cmd3Name: 'cmd3',
        cmd4Name: 'cmd4',
        cmdResponse: ''
      },
      agv_running_status: 'none',

      slam_statusList: [
        {
          attr: 'x',
          value: 0
        },
        {
          attr: 'y',
          value: -1.297
        },
        {
          attr: 'yaw',
          value: -179.185
        },
        {
          attr: 'quality',
          value: 3
        },
        {
          attr: 'run',
          value: 1
        }
      ],

      agv_statusList: [
        {
          attr: 'AI1',
          value: 199.957
        },
        {
          attr: 'AI2',
          value: 5000
        },
        {
          attr: 'mode_switch',
          value: 1
        },
        {
          attr: 'confirm_button',
          value: 0
        },
        {
          attr: 'proximity_switch',
          value: 1
        },
        {
          attr: 'signal1',
          value: 0
        },
        {
          attr: 'SGK1',
          value: 0
        },
        {
          attr: 'SGK2',
          value: 0
        },
        {
          attr: 'SGK3',
          value: 0
        },
        {
          attr: 'SGK4',
          value: 0
        },
        {
          attr: 'LTURN',
          value: 0
        },
        {
          attr: 'RTURN',
          value: 0
        },
        {
          attr: 'RESET',
          value: 0
        }
      ],
      generateCMDFormRules: {
        virtualStationUrl: [
          { required: false, message: 'please input url', trigger: 'blur' }
          // {min: 3, max: 10, message: "length of username between 3-10", trigger: "blur"}
        ],
        cmd1: [
          { required: true, message: 'please input cmd', trigger: 'blur' }
        ],
        cmd2: [
          { required: true, message: 'please input cmd', trigger: 'blur' }
        ],
        cmd3: [
          { required: true, message: 'please input cmd', trigger: 'blur' }
        ],
        cmd4: [
          { required: true, message: 'please input cmd', trigger: 'blur' }
        ],
        // cmd5: [
        //   { required: true, message: 'please input cmd', trigger: 'blur' }
        // ],
        // cmd6: [
        //   { required: true, message: 'please input cmd', trigger: 'blur' }
        // ],
        trigger_sendCMD: [],
        cmdResponse: [],
        cmdMethod: []
      },
      timerId_agv: [],
      timer_agv_genaral: [],
      timerId_slam: [],
      backendURL: 'http://localhost:81',
      activeNames: ['2'],
      forkLift: {
        pos: 0,
        params: {
          speed: 0,
          method: 'GET',
          step: 0.2
        }
      },
      AGVMoveForwardAbsolute: {
        params: {
          vector1: 0,
          vector2: 'GET',
          speed: 0,
          method: 'GET'
        }
      },
      AGVMoveForwardRelative: {
        params: {
          relativeLength: 0,
          speed: 0,
          method: 'GET'
        }
      },
      AGVMoveBackwardAbsolute: {
        params: {
          vector1: 0,
          vector2: 'GET',
          speed: 0,
          method: 'GET'
        }
      },
      AGVMoveBackwardRelative: {
        params: {
          relativeLength: 0,
          speed: 0,
          method: 'GET'
        }
      }
    }
  },
  mounted() {
    // this.get_slam_status(), this.get_agv_status()
  },
  methods: {
    // cmd1
    async sendCMD1() {
      const temp = {
        url: this.cmd_form.virtualStationUrl,
        cmd: this.cmd_form.cmd1,
        method: this.cmd_form.cmd1Method
      }
      const { data: res } = await this.$http.post(
        this.backendURL + '/api/cmd_new',
        temp
      )
      // if (res.meta.status != 200) return this.$message.error('login failed')
      this.$message.success('cmd1 success')
      this.cmd_form.cmdResponse +=
        'ResponseDataFromCMD 1:\n' + JSON.stringify(res) + '\n\n\n'
    },

    // cmd2
    async sendCMD2() {
      const temp = {
        url: this.cmd_form.virtualStationUrl,
        cmd: this.cmd_form.cmd2,
        method: this.cmd_form.cmd2Method
      }
      const { data: res } = await this.$http.post(
        this.backendURL + '/api/cmd_new',
        temp
      )
      // if (res.meta.status != 200) return this.$message.error('login failed')
      this.$message.success('cmd2 success')
      this.cmd_form.cmdResponse +=
        'ResponseDataFromCMD 2:\n' + JSON.stringify(res) + '\n\n\n'
    },

    // cmd3
    async sendCMD3() {
      const temp = {
        url: this.cmd_form.virtualStationUrl,
        cmd: this.cmd_form.cmd3,
        method: this.cmd_form.cmd3Method
      }
      const { data: res } = await this.$http.post(
        this.backendURL + '/api/cmd_new',
        temp
      )
      // if (res.meta.status != 200) return this.$message.error('login failed')
      this.$message.success('cmd3 success')
      this.cmd_form.cmdResponse +=
        'ResponseDataFromCMD 3:\n' + JSON.stringify(res) + '\n\n\n'
    },

    // cmd4
    async sendCMD4() {
      const temp = {
        url: this.cmd_form.virtualStationUrl,
        cmd: this.cmd_form.cmd4,
        method: this.cmd_form.cmd4Method
      }
      const { data: res } = await this.$http.post(
        this.backendURL + '/api/cmd_new',
        temp
      )
      // if (res.meta.status != 200) return this.$message.error('login failed')
      this.$message.success('cmd4 success')
      this.cmd_form.cmdResponse +=
        'ResponseDataFromCMD 4:\n' + JSON.stringify(res) + '\n\n\n'
    },

    // slam status
    get_slam_status() {
      let _this = this

      var timerId = setInterval(async () => {
        const temp = {
          url: _this.cmd_form.virtualStationUrl,
          cmd: 'http://10.1.1.134:8888/slam/loc',
          method: 'get'
        }
        const { data: res } = await this.$http.post(
          this.backendURL + '/api/cmd_new',
          temp
        )
        // _this.$message.success('slam status get')
        var resObj = JSON.parse(res.data)
        _this.slam_statusList[0].value = resObj.x
        _this.slam_statusList[1].value = resObj.y
        _this.slam_statusList[2].value = resObj.yaw
        _this.slam_statusList[3].value = resObj.quality
        _this.slam_statusList[4].value = resObj.run
      }, 500)
      this.timerId_slam.push(timerId)
    },

    // agv status
    get_agv_status() {
      let _this = this

      var timerId = setInterval(async () => {
        const temp = {
          url: _this.cmd_form.virtualStationUrl,
          cmd: 'http://10.1.1.134:8004/agv/brplc/iostatus',
          method: 'get'
        }
        const { data: res } = await this.$http.post(
          this.backendURL + '/api/cmd_new',
          temp
        )
        // _this.$message.success('agv status get')
        var resObj = JSON.parse(res.data)
        _this.agv_statusList[0].value = resObj.AI1
        _this.agv_statusList[1].value = resObj.AI2
        _this.agv_statusList[2].value = resObj.mode_switch
        _this.agv_statusList[3].value = resObj.confirm_button
        _this.agv_statusList[4].value = resObj.proximity_switch
        _this.agv_statusList[5].value = resObj.signal1
        _this.agv_statusList[6].value = resObj.SGK1
        _this.agv_statusList[7].value = resObj.SGK2
        _this.agv_statusList[8].value = resObj.SGK3
        _this.agv_statusList[9].value = resObj.SGK4
        _this.agv_statusList[10].value = resObj.LTURN
        _this.agv_statusList[11].value = resObj.RTURN
        _this.agv_statusList[12].value = resObj.RESET
      }, 500)
      this.timerId_agv.push(timerId)
    },

    // resetForm
    resetForm() {
      this.$refs.generateCMDFormRef.resetFields()
    },

    // resetTimer
    resetTimer() {
      this.timerId_agv.forEach(value => {
        clearInterval(value)
      })

      this.timerId_slam.forEach(value => {
        clearInterval(value)
      })

      this.get_agv_status(), this.get_slam_status()
    }
  }
}
</script>

<style lang="less" scoped></style>
