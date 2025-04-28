import React from 'react';
import Registration from './Components/Registration';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './Components/Login';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
