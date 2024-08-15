import React from 'react'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <div className='input-container'>
                <input type="email" placeholder='Enter your email here' />
                <input type="text" placeholder='Enter Room Code' />
                <button>Enter Room</button>
            </div>
        </div>
    )
}
export default HomePage
