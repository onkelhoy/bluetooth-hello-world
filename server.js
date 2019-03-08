let express = require('express')
let app = express()
let path = require('path')

app.get('/:file', (req, res, next) => {
  let file = req.params.file 
  console.log('file request', file)
  if (!file) {
    console.log('file request failed')
    next()
  }

  res.sendFile(path.join(__dirname, file))
})

app.get('/', (req, res) => {
  console.log('index request')
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3003, e => console.log('listen on port 3003'))