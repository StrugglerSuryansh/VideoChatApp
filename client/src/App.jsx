import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';
import { SocketContextProviders } from '/src/providers/Socket.jsx';

const App = () => {
  return (
    <div className='App'>
      <SocketContextProviders>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </SocketContextProviders>
    </div>
  );
};

export default App;
