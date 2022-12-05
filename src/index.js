import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Router from './Router';

const { Kakao } = window;
Kakao.init('476e7fd327b9d356e18d3d5ac07c4d01');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
