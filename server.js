const http = require('http');
const port = process.env.PORT || 4000;
const version = process.env.COMMIT_SHA || 'dev';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify({ status: 'ok', version }));
});

server.listen(port, () => console.log(`Listening on ${port}`));