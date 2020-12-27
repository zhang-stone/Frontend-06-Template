
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
    response.end(`
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>红绿灯问题</title>
          </head>
          <body>
              <div class="green"></div>
              <div class="yellow"></div>
              <div class="red"></div>
              <button id="next">next</button>
          </body>
        </html>`);
  })
}).listen(4000)

console.log("server started");