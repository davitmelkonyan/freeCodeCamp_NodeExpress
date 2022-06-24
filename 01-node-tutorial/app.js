const http = require('http');

const server = http.createServer((req, res)=>{ //incomming request, result
  res.write('Welcome!');
  res.end();
})

server.listen(5000);
