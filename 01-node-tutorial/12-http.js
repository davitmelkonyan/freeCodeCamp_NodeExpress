const http = require('http');

const server = http.createServer((req, res)=>{ //incomming request, result
  if(req.url === '/'){
    res.end('Welcome!');
  }
  if(req.url === '/about'){
    res.end('About!');
  }
  res.end(`<h1>Oops</h1><a href="/">back</a>`)
})

server.listen(5001);