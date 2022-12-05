import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Kakao from './Kakao';
import Test from './Test';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/oauth' element={<Kakao />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
