// import React from 'react';
import './ResearchPage.css';

const ResearchPage = () => {
  return (
    <div className="research-container">
      <header className="research-header">
        <h1>University Research</h1>
      </header>
      <nav className="research-nav">
        <a href="#about">About</a>
        <a href="#research_areas">Research Areas</a>
        <a href="#publications">Publications</a>
      </nav>
      <section className="research-section" id="about">
        <h2>About</h2>
        <p>This is a website showcasing the research activities of our Department.</p>
      </section>
      <section className="research-section" id="research_areas">
        <h2>Research Areas</h2>
        <p>Our department conducts research in various areas including:</p>
        <ul>
          <li>Microwave and Antenna Engineering</li>
          <li>Artificial Intelligence</li>
          <li>Renewable Energy</li>
          <li>VLSI</li>
        </ul>
      </section>
      <section className="research-section" id="publications">
        <h2>Publications</h2>
        <p>Explore our latest publications <a href="#">here</a>.</p>
      </section>
    </div>
  );
};

export default ResearchPage;
