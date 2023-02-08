const {createReadStream} = require('fs')
const stream = createReadStream('../example/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

// default buffer size 64kb
// property highWaterMark controls buffer size
// property encoding controls encoding
stream.on('data', (data)=>{
console.log(data)
})
stream.on('error', (err)=>{console.log(err)})
