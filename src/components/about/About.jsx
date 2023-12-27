import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div id="about">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src={`/Background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* About Text */}
      <div className="about-text">
        <h1>About Us</h1>
        <h2>Computer Engineer</h2>
        <p>
        Hello! I am a passionate computer science student with a keen interest in exploring
          the exciting and dynamic world of technology. I am dedicated to expanding my knowledge
          and skills in various areas of computer science, including software development,
          algorithms, and problem-solving.</p>
        <button>View More Details</button>
      </div>

      {/* About Model */}
      <div className="about-model">
        {/* <img alt="model" src="/hero.png" /> */}
      </div>
    </div>
  );
};

export default About;
