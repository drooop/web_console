const express = require('express')

const app = express()

app.use(express.static('../dist'))

app.listen(83, () => {
  console.log('server running at http://localhost:83')
})
