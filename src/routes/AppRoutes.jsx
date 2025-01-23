import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/dashboard/Home';
import Signup from '../views/auth/Signup';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
