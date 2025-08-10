import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Page/Register';
import Log from './Page/Log';
import Chat from './Page/Chatting';
import OtpVerify from './Page/OtpVerify';
import Layout from './Components/Layout';
import UserProfile from './Page/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Log" element={<Log />} />
        <Route path="*" element={<Log />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/verify-otp/:email" element={<OtpVerify />} />
        <Route path="/chat" element={<Layout />}>
          <Route index element={<Chat />} />
          <Route path="/chat/profile" index element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
