const http = require('http');
const app = require('./src/app');
const port = process.env.PORT || 80;
const server = http.createServer(app);
server.listen(port);
console.log('Server running on http://localhost:80');