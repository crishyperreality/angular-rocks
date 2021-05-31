const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

var indexRouter = require('./routes/index')

app.use(cors())
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})