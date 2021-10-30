import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import AboutUs from "../AbouteUs/AboutUs";
import ServiceOne from "../../Services/ServiceOne/ServiceOne";
import useAuth from "../../../hooks/useAuth";
import HotelService from "../../Services/HotelService/HotelService";
import ServiceTwo from "../../Services/ServiceTwo/ServiceTwo";

const Home = () => {
  const { setIsMenuOpen } = useAuth();
  return (
    <main style={{ marginTop: "70px" }} onClick={() => setIsMenuOpen(false)}>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <ServiceOne></ServiceOne>
      <HotelService></HotelService>
      <ServiceTwo></ServiceTwo>
    </main>
  );
};

export default Home;
