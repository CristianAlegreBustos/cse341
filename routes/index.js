const http = require('http');

module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Cristian Nahuel Alegre Bustos!');
};
