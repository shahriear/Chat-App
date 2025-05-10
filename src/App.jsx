import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Page/Register';
import Log from './Page/Log';
import Chatting from './Page/Chatting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/chat" element={<Chatting />} />
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
