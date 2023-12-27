import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Audioplayer from "./components/audioplayer/AudioPlayer";
import About from './components/about/About';

const App = () => {
  return (
    <div>
      <Cursor />
      <Audioplayer/>

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About />
      </section>
    </div>
  );
};

export default App;
