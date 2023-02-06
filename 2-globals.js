// Global variables
// __dirname - path to current directory
// __filename - file name
// require - function to use CommonJS modules
// process - info about env where projgram is being executed

// console.log(__dirname)
console.log(__filename)
// console.log(process)
setTimeout (()=>{
    console.log("after 2 seconds, I get logged!")
}, 2000)
setInterval(()=>{
    console.log("with an interval, every second I get logged")
}, 1000)