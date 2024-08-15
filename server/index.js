const express = require('express');
const bodyPraser = require('body-praser');
const { server, socket } = require('socket.io');

const io = new server();
const app = express();

app.use(bodyPraser.json());
const emailToSocketMapping = new Map;


io.on("connection", (socket) => {
    socket.on('join-room', data => {
        console.log('User', EmailId, 'joined room', roomId)
        emailToSocketMapping.set(EmailId, socket.id);
        const { roomId, EmailId } = data
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-joined', { EmailId })
    });
});

app.listen(
    8000,
    () => console.log("Server is running on port 8000")
);
io.listen(8001);