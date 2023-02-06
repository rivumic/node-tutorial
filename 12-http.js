const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to our homepage!')
    }
    else if (req.url ==='/about'){
        res.end('this is our short history!')
    }
    else{
        res.end(`
        <h1>Error</h1>
        <p>Can't find that page!</p>
        `)
    }
})

server.listen(5000)