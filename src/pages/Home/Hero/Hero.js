import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-main text-white">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h6>WHAT NEXT COUNTRY</h6>
          <h1 className="display-1 fw-bold">Discover Night Paris</h1>
          <button className="hero-book-btn">BOOK YOUR TRAVEL</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
