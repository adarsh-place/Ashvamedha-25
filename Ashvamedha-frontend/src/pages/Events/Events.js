import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "26th and 27th October",
      theme: "warm",
      nameid: "chess"
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/qeyeqi5joaef13p1kkg2.png",
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "26th and 27th October",
      theme: "cold",
      nameid: "badminton"
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729823/ashvamedha/events/bwneqkxvz129rbzbmr00.jpg",
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "26th and 27th October",
      theme: "warm",
      nameid: "volleyball"
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/fwn1aohwqu16an071qcv.png",
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "26th and 27th October",
      theme: "cold",
      nameid: "football"
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "26th and 27th October",
      theme: "warm",
      nameid: "basketball"
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "26th and 27th October",
      theme: "cold",
      nameid: "tabletennis"
    },
    {
      id: 7,
      sportName: "BGMI",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/gwbnnstk5f6m2so6m4s4.jpg",
      desc: "Every drop brings a new chance; gear up and make your mark in the battlefield .",
      date: "26th and 27th October",
      theme: "warm",
      nameid: "bgmi"
    },
    {
      id: 8,
      sportName: "GYM and WeighLifting",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721504/ashvamedha/events/dhsxh0cezuu09f1z9zyo.jpg",
      desc: "Every rep is a step closer to becoming the strongest version of yourself",
      date: "26th and 27th October",
      theme: "cold",
      nameid: "gym"
    },
    {
      id: 9,
      sportName: "Athletics",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/wdxnqj88su8gu4gus0fc.jpg",
      desc: "Run with purpose, leap with passion, and let every stride take you closer to your dreams.",
      date: "26th and 27th October",
      theme: "warm",
      nameid: "athletics"
    },
    {
      id: 10,
      sportName: "Lawn Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728895226/ashvamedha/events/yaocywewl3qdfk26lnha.jpg",
      desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
      date: "26th and 27th October",
      theme: "cold",
      nameid: "lawntennis"
    },
  ];

  return (
    <>
      <Navbar />

<div className="min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-gradient-radial from-[#001030] via-[#000814] to-[#000814]">
  
{/* Heading */}
<h2 className="mt-4 flex justify-center items-center text-4xl md:text-5xl font-bold tracking-wide uppercase text-center md:text-[3.5rem]">
  <span className="text-orange-600 mr-2">OUR</span>
  <span className="text-white">EVENTS</span>
</h2>

{/* Show All Button */}
<div className="w-full max-w-[1300px] mt-4 flex justify-center md:justify-end px-4 md:px-0">
  <button
    className="text-white bg-orange-600 hover:bg-orange-700 font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-300"
    onClick={() => {
      window.scrollTo(0, 0);
      navigate("/showall");
    }}
  >
    Show All
  </button>
</div>

{/* Swiper carousel */}
<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={isLargeScreen ? 3 : 1}
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1.2,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
  className="w-full max-w-[1300px] my-16 md:my-24 py-16 px-4 md:px-0"
  style={{ paddingBottom: "80px" }}
>
  {sportsInfo.map((item, index) => (
    <SwiperSlide
      key={index}
      className="relative w-72 h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden bg-white/5 shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
    >
      <img
        src={item.imgUrl}
        alt={item.sportName}
        className="w-full h-full object-cover rounded-2xl filter brightness-80 transition-all duration-400 hover:brightness-100 hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full p-5 bg-black/70 rounded-b-2xl text-center backdrop-blur-sm">
        <h3 className={`text-lg md:text-xl font-bold mb-2 tracking-wide ${item.theme === "warm" ? "text-orange-600" : "text-sky-400"}`}>
          {item.sportName}
        </h3>
        <p className="text-sm md:text-base mb-3 opacity-90">{item.desc}</p>
        <div className="flex justify-center items-center gap-3">
          <button
            className={`border-2 border-current rounded-lg px-4 py-2 font-semibold text-sm md:text-base transition-all duration-300 ${
              item.theme === "warm"
                ? "text-orange-600 hover:bg-orange-600 hover:text-white hover:shadow-[0_0_10px_#ff6d02]"
                : "text-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-[0_0_10px_#36d8fe]"
            }`}
            onClick={() => { window.scrollTo(0, 0); navigate(`/livescore/${item.nameid}`); }}
          >
            Live Score
          </button>
          <button
            className={`border-2 border-current rounded-lg px-4 py-2 font-semibold text-sm md:text-base transition-all duration-300 ${
              item.theme === "warm"
                ? "text-orange-600 hover:bg-orange-600 hover:text-white hover:shadow-[0_0_10px_#ff6d02]"
                : "text-sky-400 hover:bg-sky-400 hover:text-white hover:shadow-[0_0_10px_#36d8fe]"
            }`}
            onClick={() => { window.scrollTo(0, 0); navigate(`/fixtures/${item.nameid}`); }}
          >
            Fixtures
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
  <div className="swiper-pagination mt-6"></div>
</Swiper>


  <Footer />
</div>

    </>
  );
}

export default Events;
