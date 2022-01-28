import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './views/Splash';
import Home from './views/Home';

function App () {

    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App;
