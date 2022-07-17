import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Component from './components/Component';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/component" element={<Component />} />
      </Routes>
    </div>
  );
}

