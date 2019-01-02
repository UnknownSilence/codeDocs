const express = require('express');
const socket = require('socket.io');


// Set up the application

const app = express();

var port = process.env.PORT || 3000;


const server = app.listen(port, function () {
    console.log("port listenging to requests");
})
// serve my static files (Html, css, resources, etc.)

app.use(express.static('public'));

const io = SocketIO(server);

io.on('connection', function (socket) {
    console.log("connection made using socket", socket.id);

    socket.on('code', function (data) {
        socket.broadcast.emit('code', data);
    });



});