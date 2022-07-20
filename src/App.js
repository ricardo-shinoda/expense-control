import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import style from './style/App.module.css';

export default function App() {
  return (
    <div className={ style.App }>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/carteira" element={<Wallet /> } />
      </Routes>
    </div>
  );
}

