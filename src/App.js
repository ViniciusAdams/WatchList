import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import {Add} from './components/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/add" element={<Add />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
  );
}

export default App;
