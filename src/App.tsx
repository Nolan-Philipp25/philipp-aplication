import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/Main';
import Users from './pages/Users';
import User from './pages/users/[id]';
import NavBar from './components/Nav';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/users' element={<Users />} />
          <Route path="/user/:id" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
