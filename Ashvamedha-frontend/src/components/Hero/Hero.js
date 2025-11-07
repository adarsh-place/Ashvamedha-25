import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import logo from "../..//logo.png";

function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    // UPDATED: Removed gradient, added BG image classes.
    // ---
    // --- 1. REPLACE THIS URL with your image path (e.g., "/images/my-bg.jpg")
    // ---
    <div
      className="mt-0 hero relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white font-body bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url('https://res.cloudinary.com/diu6ioiov/image/upload/v1761659477/bvhyx0cakqhzx9jflwwb_oyrjcd.jpg')` }}
      // style={{ backgroundImage: `url('https://res.cloudinary.com/diu6ioiov/image/upload/v1761657192/Screenshot_2025-10-28_175842_anohbb.png')` }}
      // style={{ backgroundImage: `url('https://res.cloudinary.com/diu6ioiov/image/upload/v1761657191/Scanned_20251024-1730-08_erk01p.jpg')` }}
      // style={{ backgroundImage: `url('https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg')` }}
      style={{ backgroundImage: `url('https://res.cloudinary.com/diu6ioiov/image/upload/v1761659374/rvuyd0jdnuyi8p9ybsj3_dnh5ap.jpg')` }}
    >
      {/* Background Glows (they are z-0) */}
      <div className="absolute -top-40 -left-40 z-0 h-96 w-96 rounded-full  blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 z-0 h-96 w-96 rounded-full  blur-3xl"></div>

      {/* ---
      --- 2. ADDED THIS DIV. This is the translucent black overlay.
      --- It sits at z-5 (between glows and content).
      --- You can change opacity-70 to opacity-60 or opacity-80.
      --- */}
      <div className="absolute inset-0 z-5 bg-black opacity-50"></div>

      {/* Your main content container (it's z-10, so it's on top) */}
      <div className="container relative z-10 flex flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="content-hero">
          <div className="hero-info">
            <h1
              className="
    ashvamedha font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl
    uppercase tracking-wide text-white drop-shadow-lg
    mt-4 sm:mt-4 md:mt-8 lg:mt-12   /* top margin */
    mb-2 sm:mb-2 md:mb-6 lg:mb-8   /* bottom margin */
    px-2 sm:px-4 md:px-6 lg:px-8   /* horizontal padding */
    text-center  /* center on small screens */
  "
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src="logo.png" ></img>
            </h1>


            <p
              className="theme -mt-2 md:-mt-12 text-lg font-normal text-white md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span >DREAM</span> <span className="ml-2 mr-2 md:ml-6 md:mr-6" >DARE</span> <span>DOMINATE</span>
            </p>

            <p
              className="date text-base font-normal text-white md:text-xl mt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              7TH-9TH NOVEMBER
            </p>
          </div>

          <div
            className="buttons mt-10 flex w-full justify-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="btn1">
              <button
                className="btn-primary w-full transform rounded-full border-2 border-crimson-red  px-10 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-600 sm:w-auto"

                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/events");
                }}
              >
                LIVE SCORES & FIXTURES
                {/* REGISTER YOUR TEAM */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;