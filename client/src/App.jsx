import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';
import { SocketProviders } from '/providers/Socket';
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <SocketProviders>

          <Route path='/' element={<HomePage />} />

        </SocketProviders>

      </Routes>
    </div>
  )
}

export default App
