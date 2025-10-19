import "./Hero.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="content-hero" data-aos="fade-down">
          <div className="hero-info">
            <h1 className="ashvamedha" data-aos="zoom-in" data-aos-delay="200">
              <span className="ashva">ASHVA</span>
              <span className="medha">MEDHA</span>
            </h1>
            <p className="theme" data-aos="fade-up" data-aos-delay="400">
              EMPOWER ENDURE EXCEL
            </p>
            <p className="date" data-aos="fade-up" data-aos-delay="600">
              1st-3rd NOVEMBER
            </p>
          </div>
          <div className="buttons" data-aos="fade-up" data-aos-delay="800">
            <div className="btn1">
              <button
                className="btn-primary"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/events");
                }}
              >
                LIVE SCORES & FIXTURES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
