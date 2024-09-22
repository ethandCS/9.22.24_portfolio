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
              <strong>Automated Email Checker</strong>: Python program to help me check my daily incoming Gmail.
              <a href="https://github.com/ethandCS/automated-email-checker" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
            <li>
              <strong>FIRE Calculator</strong>: A web app to calculate the timeline for financial independence.
              <a href="https://github.com/ethandCS/FIRE_Calculator" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>About Me</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ethan-diaz-b8326926a/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ethandCS" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/ethan__diaz/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            </li>
            <li>
              <a href="mailto:diazethan488@gmail.com" target="_blank" rel="noopener noreferrer">
                Gmail
              </a>
            </li>
            <li>
              <a href="tel:+16572300701" target="_blank" rel="noopener noreferrer">
                Phone: +1 (657) 230-0701
              </a>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
