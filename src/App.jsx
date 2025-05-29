import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Page/Register';
import Log from './Page/Log';
import Chatting from './Page/Chatting';
import OtpVerify from './Page/OtpVerify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/chat" element={<Chatting />} />
        <Route path="/verify-otp/:email" element={<OtpVerify />} />
        <Route path="*" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
