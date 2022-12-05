import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Kakao from './Kakao';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/oauth' element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
