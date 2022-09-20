import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Products from './screens/Products';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
