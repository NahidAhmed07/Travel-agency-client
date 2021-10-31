import React from "react";
import Hero from "../Hero/Hero";
import AboutUs from "../AbouteUs/AboutUs";
import ServiceOne from "../../Services/ServiceOne/ServiceOne";
import useAuth from "../../../hooks/useAuth";
import HotelService from "../../Services/HotelService/HotelService";
import ServiceTwo from "../../Services/ServiceTwo/ServiceTwo";
import Testimonial from "../Testimonial/Testimonial";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";

const Home = () => {
  const { setIsMenuOpen } = useAuth();
  return (
    <main style={{ marginTop: "70px" }} onClick={() => setIsMenuOpen(false)}>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <ServiceOne></ServiceOne>
      <HotelService></HotelService>
      <ServiceTwo></ServiceTwo>
      <Testimonial></Testimonial>
      <PhotoGallery></PhotoGallery>
    </main>
  );
};

export default Home;
