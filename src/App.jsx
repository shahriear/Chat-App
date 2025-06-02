import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Page/Register';
import Log from './Page/Log';
import Chatting from './Page/Chatting';
import OtpVerify from './Page/OtpVerify';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="*" element={<Log />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/verify-otp/:email" element={<OtpVerify />} />
        <Route path="/chat" element={<Layout />}>
          <Route index element={<Chatting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
