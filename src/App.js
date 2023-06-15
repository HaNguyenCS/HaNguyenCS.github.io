import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
