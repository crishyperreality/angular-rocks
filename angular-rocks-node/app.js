const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

var indexRouter = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})