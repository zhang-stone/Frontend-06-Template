
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
            <style>
              .body {
                display: flex;
                width: 500;
                height: 300;
              }
              .yellow {
                flex: 1;
              }
              .green {
                width: 200px;
              }
            </style>
            <div class="body">
                <div class="green"></div>
                <div class="yellow"></div>
            </div>
          </html>/n
        `);
  })
}).listen(4000)

console.log("server started");