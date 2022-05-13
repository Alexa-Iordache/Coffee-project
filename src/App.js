import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./homepage";
import CoffeePage from './coffeepage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/coffeepage" element={<CoffeePage/>}/>
        <Route path="*" element={<Navigate to = "/homepage"/>}/>
      </Routes>
    </div>
  );
}
