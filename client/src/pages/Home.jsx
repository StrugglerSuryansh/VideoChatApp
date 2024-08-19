import React, { useCallback, useEffect } from 'react';
import { useSocket } from '../providers/Socket';
import { useState } from 'react';

const HomePage = () => {



    const [email, setemail] = useState('');
    const [room, setroom] = useState('');

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log(email, room)
    })




    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email ID</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <br />
                <label htmlFor="room">Room Number</label>
                <input
                    type="text"
                    id="room"
                    value={room}
                    onChange={(e) => setroom(e.target.value)}
                />
                <br />
                <button>Join</button>
            </form>
        </div>
    );

}






export default HomePage;
