import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FireCalculator from './fire-calculator/FireCalculator'; // Import the FIRE Calculator component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/calculator">FIRE Calculator</Link>
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
