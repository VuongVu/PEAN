// const models = require('./server/models');
const app = require('./server/app');
const http = require('http');

// Get port from enviroment and store in express
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server API running on port: ${server.address().port}`);
  console.log('Press Ctrl+C to quit.');
});
