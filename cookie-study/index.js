/**
 * Cookie study 
 * 　httpのCookieを利用するサーバを作ります
 */


'use strict'
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const last_access_time = req.header.cookie ? parseInt(req.header.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toString());
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on :' + port);
});


