import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ethan Diaz's Portfolio</h1>
        <p>Welcome to my portfolio website built with React!</p>

        {/* Add your profile picture */}
        <img src="../public/images/profilepic.jpg" alt="Ethan Diaz" className="profile-picture" />

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

        {/* My Shelf Section */}
        <section>
          <h2>My Shelf</h2>
          <p>Here are some of my favorite books and albums that I'm enjoying right now:</p>
          <div className="shelf">
            {/* Three Books */}
            <div className="shelf-item">
              <img src="../public/images/intelligentinvestor.jpg" alt="The Intelligent Investor" />
              <p>The Intelligent Investor</p>
            </div>
            <div className="shelf-item">
              <img src="../public/images/lastlecture.jpg" alt="The Last Lecture" />
              <p>The Last Lecture</p>
            </div>
            <div className="shelf-item">
              <img src="../public/images/pyschofmoney.jpg" alt="The Psychology of Money" />
              <p>The Psychology of Money</p>
            </div>

            {/* Three Music Albums */}
            <div className="shelf-item">
              <img src="../public/images/graduation.jpg" alt="Graduation" />
              <p>Graduation</p>
            </div>
            <div className="shelf-item">
              <img src="../public/images/thenewabnormal.jpg" alt="The New Abnormal" />
              <p>The New Abnormal</p>
            </div>
            <div className="shelf-item">
              <img src="../public/images/thequeenisdead.jpg" alt="The Queen Is Dead" />
              <p>The Queen Is Dead</p>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;