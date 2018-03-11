const express = require('express')();
const server = require('http').createServer(express);
const socketio = require('socket.io');
const io = socketio(server);
const path = require('path');
const morgan = require('morgan');
express.use(morgan('combined'));
express.get('*', (req, res) => {
  res.sendFile(`${path.resolve('public')}${req.path}`);
});
server.listen(3000, () => {
  console.log('listening to port3000');
});

io.on('connection', (socket) => {
  console.log('success!!!');
  socket.on('Login', (ID, Pass) => {
    console.log(`[Login] ID:${ID}, PassWord:${Pass}`);
  });
  socket.on('Regist', (ID, Pass) => {
    console.log(`[Regist] ID:${ID}, PassWord:${Pass}`);
  })
});
