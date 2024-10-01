import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FireCalculator from './components/FireCalculator';

function App() {
  return (
    <Router basename="/9.22.24_portfolio">
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/calculator">FIRE Calculator</Link> | 
            <a href="https://github.com/ethandCS/FIRE_Calculator" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<FireCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
