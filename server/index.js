const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const httpServer = http.createServer(app); // Create a single HTTP server for both Express and Socket.IO

// Setup Socket.IO with CORS
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:8000', // Allow requests from this origin
        methods: ['GET', 'POST'], // Allowed methods
        credentials: true // Allow cookies to be sent
    }
});

app.use(bodyParser.json());

// Add a route handler for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

const emailToSocketMapping = new Map();

io.on('connection', (socket) => {
    socket.on('join-room', (data, emailId) => {
        console.log('User', emailId, 'joined room', data.roomId);
        emailToSocketMapping.set(emailId, socket.id);
        const { roomId } = data;
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-joined', { userId: emailId });
    });
});

httpServer.listen(8000, () => {
    console.log("Server is running on port 8000");
});
