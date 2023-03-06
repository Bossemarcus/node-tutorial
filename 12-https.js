const http = require('http')

// req = request = res = resons is what we ar sending back 

// What does webserver do ? Keep on listening to/for requests 

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('ALOHA you little beuty');
    }

    if(req.url ==='/about'){
        res.end('here is out short history')
    }

    res.end(`
    
    <h1>OOPS!</h1>
    <p> We cant find this page </p>
    <a href="/">back home<

    `)


res.write()
res.end()
})

server.listen(5000)