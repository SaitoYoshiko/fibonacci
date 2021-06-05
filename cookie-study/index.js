/**
 * Cookie study 
 * 　httpのCookieを利用するサーバを作ります
 */


'use strict'
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('hi');
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});


