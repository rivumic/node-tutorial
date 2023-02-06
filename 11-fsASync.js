const {readFile, writeFile} = require('fs')

//callback hell
console.log('start')
readFile('./example/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log('there was an error!')
        return null;
    }
    const first = result
    readFile('./example/second.txt', 'utf-8', (err,result)=>{
        if (err){
            console.log('there was an error!')
            return null;
        }
        const second = result
        writeFile('./example/third-result-async.txt', `Here is the combination: ${first}, ${second}`, (err, result)=>{
            if (err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        })
    })
})
console.log('starting the next task')