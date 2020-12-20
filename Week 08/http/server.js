
const http = require('http')

http.createServer((request, response) => {
  let body = []
  request.on('error', (error) => {
    console.log(error)
  }).on('data', (chunk) => {
    body.push(chunk.toString())
  }).on('end', () => {
    body = [].concat(body).toString();
    console.log("body:", body)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end("He22llo World\n");
  })
}).listen(4000)

console.log("server started");