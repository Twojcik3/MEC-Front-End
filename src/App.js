import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from './components/Home';
import HotDeals from './components/HotDeals';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/hot-deals" element={<HotDeals />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
