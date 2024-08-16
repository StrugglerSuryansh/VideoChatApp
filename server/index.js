const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const app = express();
const httpServer = require('http').createServer(app); // Create an HTTP server

const io = new Server(httpServer);


app.use(bodyParser.json());
const emailToSocketMapping = new Map(); // Assuming you meant to use 'emailToSocketMapping'

io.on("connection", (socket) => {
    socket.on('join-room', (data, emailId) => { // Option 2: separate argument for emailId
        console.log('User', emailId, 'joined room', data.roomId) // Using data.roomId
        emailToSocketMapping.set(emailId, socket.id);
        const { roomId } = data; // Option 1: destructure roomId from data
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-joined', { userId: emailId }); // Consider using userId instead
    });
});

app.listen(
    8000,
    () => console.log("Server is running on port 8000")
);
io.listen(8001);