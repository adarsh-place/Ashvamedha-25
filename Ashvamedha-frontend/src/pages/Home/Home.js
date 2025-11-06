import React, { useEffect } from "react";
import "./Home.scss";

import AboutUs from "../../components/AboutUs/AboutUs.js";
import Footer from "../../components/Footer/Footer.js";
import Hero from "../../components/Hero/Hero.js";
import Navbar from "../../components/Navbar/Navbar.js";
import HomeGallery from "../Gallery/HomeGallery.js";
import Coupon from "../../components/Coupon/Coupon.js";
import CommunitySection from "../../components/CommunitySection/CommunitySection";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // trigger animation every time element enters viewport
      mirror: true,   // animate elements out while scrolling past them
    });
    AOS.refresh();    // recalculate positions
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <AboutUs />
      <Coupon />
      <HomeGallery />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default Home;
