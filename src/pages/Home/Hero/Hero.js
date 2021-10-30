import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-main text-white position-relative" id="home">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h6>WHAT NEXT COUNTRY</h6>
          <h1 className="display-1 fw-bold mb-4">Discover Night Paris</h1>
          <button className="hero-book-btn">BOOK YOUR TRAVEL</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
