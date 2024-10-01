// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

import profilePic from '../images/profilepic.jpg';
import intelligentInvestor from '../images/intelligentinvestor.jpg';
import lastLecture from '../images/lastlecture.jpg';
import pyschOfMoney from '../images/pyschofmoney.jpg';
import graduation from '../images/graduation.jpg';
import theNewAbnormal from '../images/thenewabnormal.jpg';
import theQueenIsDead from '../images/thequeenisdead.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Profile picture section */}
      <aside className="profile-section">
        <img src={profilePic} alt="Ethan Diaz" className="profile-picture" />
      </aside>

      {/* Main content section */}
      <main className="content-section">
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
              <Link to="/calculator">Try FIRE Calculator</Link>
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

        <section>
          <h2>My Shelf</h2>
          <p>Here are some of my favorite Books and Albums that I'm enjoying right now:</p>
          <div className="shelf">
            <div className="shelf-item">
              <img src={intelligentInvestor} alt="The Intelligent Investor" />
              <p>The Intelligent Investor Book by Benjamin Graham</p>
            </div>
            <div className="shelf-item">
              <img src={lastLecture} alt="The Last Lecture" />
              <p>The Last Lecture Book by Jeffrey Zaslow and Randy Pausch</p>
            </div>
            <div className="shelf-item">
              <img src={pyschOfMoney} alt="The Psychology of Money" />
              <p>The Psychology of Money Book by Morgan Housel</p>
            </div>
            <div className="shelf-item">
              <img src={graduation} alt="Graduation" />
              <p>Graduation Album by Kanye West</p>
            </div>
            <div className="shelf-item">
              <img src={theNewAbnormal} alt="The New Abnormal" />
              <p>The New Abnormal Album by the Strokes</p>
            </div>
            <div className="shelf-item">
              <img src={theQueenIsDead} alt="The Queen Is Dead" />
              <p>The Queen Is Dead Album by the Smiths</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
