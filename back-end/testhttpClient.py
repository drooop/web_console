import requests
import json

data = {
  'cmd': 'asd'
}

r = requests.post('http://localhost:81/api/s1', data=data)

print(r.text)
'http://localhost/api/s1'


"""
// manual deepcopy...
      const temp = {
        cmd: this.cmd_form.virtualStationCMD
      }

      // const dataSent = JSON.stringify(temp)
      // console.log('dataSent: \n' + dataSent + '\n')
      console.log('this is tempObj', temp)

      if (this.cmd_form.trigger_sendCMD === 'repeat') {
        console.log('in repeat')
        // if repeat, do
        let _this = this
        this.timerId = setInterval(async () => {
          // setInterval(async ()=>{
          const { data: res } = await _this.$http.post(
            _this.cmd_form.virtualStationUrl,
            temp
          )
          if (res.meta.status !== 200) return _this.$message.error(res.meta.msg)
          _this.$message.success(res.meta.msg)
          _this.cmd_form.cmdResponse +=
            'ResponseData:\n' + JSON.stringify(res.data) + '\n\n\n'
          // _this.list.push(res)
        }, _this.cmd_form.CMDIntervalTime * 1000)
      } else {
        // if not, do
        console.log('in once')
        // console.log('url: \n' + this.cmd_form.virtualStationUrl + '\n')
        const { data: res } = await this.$http.post(
          'http://localhost/api/s1',
          this.cmd_form
        )
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        this.cmd_form.cmdResponse +=
          'ResponseData:\n' + JSON.stringify(res.data) + '\n\n\n'
      }
"""