const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req,res)=>{
  const file = fs.createReadStream('./example/big.txt', 'utf8')
  file.on('open', (data)=>{
    file.pipe(res)
    })
  file.on('error', (err)=>{
    console.log(error)
  })
})

server.listen(5000)