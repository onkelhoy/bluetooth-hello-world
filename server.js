let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.sendFile('./index.html')
})