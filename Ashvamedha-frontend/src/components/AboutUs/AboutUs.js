import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// --- Your Component Imports ---
import CounterUpPage from "./CounterUpPage.js";
import merch from "../../assests/aboutusassets/merch.png";
// --- Add more images here for the swiper ---
// import image1 from "../../assests/aboutusassets/image1.png";
// import image2 from "../../assests/aboutusassets/image2.png";

function AboutUs() {
  // Array of images for the swiper
  const swiperImages = [
    { src: "https://gymkhana.iitbbs.ac.in/assets/img/sports/badminton(3).jpg", alt: "Badminton" },
    { src: "https://gymkhana.iitbbs.ac.in/assets/img/sports/tt3.jpg", alt: "Table Tennis" },
    { src: "https://gymkhana.iitbbs.ac.in/assets/img/sports/volleyball%20(5).jpg", alt: "Volleyball" },
    { src: "https://www.campusvarta.com/uploads/2024/11/04/ashvamedha-21730720113.JPG", alt: "Ashvamedha Fest" },
  ];

  return (
    // Main container
    <div className="AboutUs bg-none text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* === ABOUT US SECTION (NEW LAYOUT) === */}
        {/* This grid container now has 3 direct children. */}
        {/* Mobile (default): 1 column, items stack in order (Title, Swiper, Content) */}
        {/* Desktop (md): 2 columns. Swiper spans 2 rows. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-center mb-24">
          
          {/* --- Item 1: Title --- */}
          {/* Mobile: 1st item. */}
          {/* Desktop: 1st col, 1st row. */}
          {/* FONT CHANGE: Added font-montserrat */}
          <h1 className="ml-4 p-4 text-4xl lg:text-5xl font-bold text-center md:text-left font-montserrat">
            <span className="text-crimson-red">ABOUT </span>
            <span className="text-white">US</span>
          </h1>

          {/* --- Item 2: Swiper --- */}
          {/* Mobile: 2nd item. */}
          {/* Desktop: 2nd col, spans 2 rows. */}
          <div className="w-full h-80 md:h-96 md:row-span-2">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              className="w-full h-full rounded-lg shadow-2xl"
            >
              {swiperImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover" 
                  />
                </SwiperSlide>
              ))}
            </Swiper> 
          </div>

          {/* --- Item 3: Content Paragraphs --- */}
          {/* Mobile: 3rd item. */}
          {/* Desktop: 1st col, 2nd row. */}
          <div className="p-4 ml-4 md:text-left">
            <p className="text-md text-gray-300 mb-4 leading-relaxed">
              Welcome to Ashvamedha, IIT Bhubaneswar's annual sports fest! Driven by our passion for sports, we aim to promote fitness, competition, and camaraderie. More than just a sports event, Ashvamedha celebrates teamwork and sportsmanship.
            </p>
            <p className="text-md  text-gray-300 mb-4 leading-relaxed">
              This year, we offer a wide range of activities for all skill levels. Whether you’re a seasoned athlete or just looking for fun, Ashvamedha has something for everyone.
            </p>
            <p className="text-md text-gray-300 leading-relaxed">
              Join us for an exciting week of sports, competition, and celebration, and help make Ashvamedha 2025 an unforgettable experience!
            </p>
          </div>
        </div>

        {/* === COUNTER SECTION === */}
        <div className="my-24">
          <CounterUpPage />
        </div>

        {/* === MERCHANDISE SECTION === */}
        <div className="text-center">
          {/* FONT CHANGE: Added font-montserrat */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-montserrat">
            <span className="text-crimson-red">OUR </span>
            <span className="text-white">MERCHANDISE</span>
          </h1>
          <div className="flex flex-col items-center gap-8">
            {/* Merch Image */}
            <img 
              src={merch} 
              alt="T-shirt" 
              className="w-full max-w-lg rounded-lg shadow-lg" 
            />
            {/* Merch Button Link */}
            <Link
              target="_blank"
              to="https://forms.gle/iap77hortfY7i6jf8"
              // FONT CHANGE: Added font-montserrat (optional, but good for consistency)
              className="inline-block text-crimson-red border-2 border-crimson-red px-8 py-3 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-crimson-red hover:text-white font-montserrat"
            >
              GET YO<span className="text-white">UR MERCH!!</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;