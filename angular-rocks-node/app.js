const express = require('express')
const app = express()
const port = 3000

var indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.get('/', (req, res) => {
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})