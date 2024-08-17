import React, { useEffect } from 'react';
import { useSocket } from '../providers/Socket';

const HomePage = () => {
    const { socket } = useSocket();

    useEffect(() => {
        // Ensure socket is initialized and ready before using emit
        if (socket) {
            socket.emit('join room', { roomId: '1', emailId: 'surya@gmail.com' });
        }
    }, [socket]);

    return (
        <div className='homepage-container'>
            <div className='input-container'>
                <input type="email" placeholder='Enter your email here' />
                <input type="text" placeholder='Enter Room Code' />
                <button>Enter Room</button>
            </div>
        </div>
    );
};

export default HomePage;
