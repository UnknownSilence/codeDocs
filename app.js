const express = require('express');
const socket = require('socket.io');


// Set up the application

const app = express();

const server = app.listen(4001, '0.0.0.0', function () {
    console.log("port listenging to requests");
})
// serve my static files (Html, css, resources, etc.)

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function (socket) {
    console.log("connection made using socket", socket.id);

    socket.on('code', function (data) {
        socket.broadcast.emit('code', data);
    });



});