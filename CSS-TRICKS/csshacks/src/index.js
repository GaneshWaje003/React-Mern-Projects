import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import HackPage from './Components/pages/HackPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hackPage" element={<HackPage />} />
          <Route path="/toFlutterHacks" element={<HackPage codeType={"flutters"} />} />
          <Route path="/toCssHacks" element={<HackPage codeType={"csses"} />} />
          <Route path="/toAndroidHacks" element={<HackPage codeType={"androids"} />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
