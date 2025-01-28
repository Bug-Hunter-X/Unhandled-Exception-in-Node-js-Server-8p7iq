const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.on('error', err => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Address already in use, please choose a different port.');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});