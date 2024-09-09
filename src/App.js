import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Iot from './pages/Iot';
import Communication from './pages/Communication';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/communication" element={<Communication />} />
      </Routes>
    </Router>
  );
};

export default App;
