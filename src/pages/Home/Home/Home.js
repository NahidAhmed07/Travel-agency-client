import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import AboutUs from "../AbouteUs/AboutUs";
import ServiceOne from "../../Services/ServiceOne/ServiceOne";
import useAuth from "../../../hooks/useAuth";
import HotelService from "../../Services/HotelService/HotelService";

const Home = () => {
  const { setIsMenuOpen } = useAuth();
  return (
    <main style={{ marginTop: "70px" }} onClick={() => setIsMenuOpen(false)}>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <ServiceOne></ServiceOne>
      <HotelService></HotelService>
    </main>
  );
};

export default Home;
