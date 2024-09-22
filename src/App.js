import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ethan Diaz's Portfolio</h1>
        <p>Welcome to my portfolio website built with React!</p>
        
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>FIRE Calculator</strong>: A web app to calculate the timeline for financial independence.
              <a href="https://github.com/ethandCS/FIRE_Calculator">View Project</a>
            </li>
            <li>
              <strong>Automated-Email_Checker</strong>: Python program to help me check my daily incoming gmail.
              <a href="https://github.com/ethandCS/automated-email-checker">View Project</a>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
