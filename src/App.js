import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Component from './components/Component';
import Wallet from './pages/wallet';
import style from './style/App.module.css';

export default function App() {
  return (
    <div className={ style.App }>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/component" element={<Component />} />
        <Route path="/wallet" element={<Wallet /> } />
      </Routes>
    </div>
  );
}

