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

import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/github-logo.png';
import leetcodeLogo from '../images/leetcode-logo.png';
import gmailLogo from '../images/gmail-logo.png'; // not being used
import phoneLogo from '../images/phone-logo.png'; // not being used
import spotifyLogo from '../images/spotify-logo.png';

function Home() {
  return (
    <div className="home-container">
      {/* Profile picture section */}
      <aside className="profile-section">
        <img src={profilePic} alt="Ethan Diaz" className="profile-picture" />
        
        {/* LINKS.ME Section */}
        <h2>LINKS.ME</h2>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/ethan-diaz-b8326926a/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="logo" />
          </a>
          <a href="https://github.com/ethandCS" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="logo" />
          </a>
          <a href="https://leetcode.com/u/ethan__diaz/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" className="logo" />
          </a>
          <a href="https://open.spotify.com/user/uyhxgnw7xpkmwudw308o09so4" target="_blank" rel="noopener noreferrer">
            <img src={spotifyLogo} alt="Spotify" className="logo" />
          </a>
          <p><a href="mailto:diazethan488@gmail.com">diazethan488@gmail.com</a></p>
          <p><a href="tel:+16572300701">+1 (657) 230-0701</a></p>
        </div>
      </aside>

      {/* Main content section */}
      <main className="content-section">
        <h1>Ethan Diaz's Portfolio</h1>
        <p>Welcome to my portfolio website built with React!</p>

        {/* READ.ME Section */}
        <section>
          <h2>READ.ME</h2>
          <p>
            Hi! I'm Ethan Diaz, a computer science student at California State University, Fullerton. I have a passion for software development and solving complex problems. I enjoy reading, swimming, and playing poker in my spare time. My professional experience includes working as an Associate Banker at J.P. Morgan Chase, where I honed my skills in leadership, problem-solving, and software applications.
          </p>
        </section>

        {/* SHELF.ME Section */}
        <section>
          <h2>SHELF.ME</h2>
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