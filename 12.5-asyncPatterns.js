//first and best way
// const {readFile, writeFile} = require('fs').promises
// const start = async ()=>{
//   try{
//     const first = await readFile('./example/first.txt', 'utf8')
//     const second = await readFile('./example/second.txt', 'utf8')
//     await writeFile('./example/mindGrenade.txt', `This is freakin\' awesome ${first}, and ${second}`, 'utf8')
//   }
//   catch (err){
//     console.log(error)
//   }
// }

// start()

//slightly inferior way
// const {readFile, writeFile} = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async()=>{
//   try{
//     const first = await readFilePromise('./example/first.txt', 'utf8')
//     const second = await readFilePromise('./example/first.txt', 'utf8')
//     await writeFilePromise('example/mindGrenade2.txt', `This is also awesome but slightly less awesome ${first}, and ${second}`, 'utf8')
//   }
//   catch(err){
//     console.log(error)
//   }
// }

// start()

//still async but writing my own promise???
const {readFile, writeFile} = require('fs')

const readText = (path, result)=>{
  return new Promise((resolve, reject)=>{
    readFile(path, 'utf8', (err, data)=>{
      if (err){
        console.log(err)
        reject()
      }
      if (result){
        resolve(data+result)
      }
      else{
        resolve(data)
      }
    })
  })
}
const writeText = (path, data)=>{
  return new Promise((resolve,reject)=>{
    writeFile(path, data,'utf8', (err)=>{
    if (err){
      console.log(err)
      reject()
    }
    resolve()
  })
  })
}
// const first = readText('./example/first.txt')
// const second = readText('./example/second.txt')
// writeFile('example/mindGrenade3.txt', `This is not that awesome but better than hell... ${first}, and ${second}`, 'utf8', (err)=>{
//   if (err){console.log(error)}
//   console.log('success!')})