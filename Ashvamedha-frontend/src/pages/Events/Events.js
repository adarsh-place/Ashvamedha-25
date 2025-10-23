import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
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
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0009_zsy4vk.jpg",
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "chess",
      link: "https://forms.gle/58mquP7dhZpJMHzw5",
    },
    {
      id: 2,
      sportName: "Volleyball",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0012_yvztv3.jpg",
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "volleyball",
      link: "https://forms.gle/sZEMVWQMQ6dmu6pCA",
    },
    {
      id: 3,
      sportName: "Badminton",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0013_rqxelz.jpg",
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "badminton",
      link: "https://forms.gle/yHJi86AeqYK7uxEdA",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0007_lmwqml.jpg",
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "football",
      link: "https://forms.gle/pbJpSAatqwBY2Ebj8",
    },
    {
      id: 5,
      sportName: "Table Tennis",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0006_blikvt.jpg",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "tabletennis",
      link: "https://forms.gle/XEmFy59gLhX378U1A",
    },
    {
      id: 6,
      sportName: "Basketball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "basketball",
      link: "https://forms.gle/MphFhZ6brpEeyWno7",
    },
    {
      id: 7,
      sportName: "GYM and WeighLifting",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074268/IMG-20251021-WA0004_zjpx3z.jpg",
      desc: "Every rep is a step closer to becoming the strongest version of yourself",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "gym",
      link: "https://forms.gle/JuoUZsBZ6njzRr4T6",
    },
    {
      id: 8,
      sportName: "BGMI",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761126385/bgmi_remkn8.png",
      desc: "Every drop brings a new chance; gear up and make your mark in the battlefield .",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "bgmi",
      link: "https://unstop.com/p/bgmi-e-sports-ashvamedha-iit-bhubaneswar-indian-institute-of-technology-bhubaneswar-1578396",
    },
    {
      id: 9,
      sportName: "Lawn Tennis",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074274/IMG-20251021-WA0014_nxvcs1.jpg",
      desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "lawntennis",
      link: "https://forms.gle/JuoUZsBZ6njzRr4T6",
    },
    {
      id: 10,
      sportName: "Valorant",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0008_iotdla.jpg",
      desc: "",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "valorant",
      link: "https://forms.gle/Vyg1PeB8dMprT7PG7",
    },
    {
      id: 11,
      sportName: "Kho Kho",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0008_iotdla.jpg",
      desc: "",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "khokho",
      link: "https://forms.gle/QHD72r9oiJhQDcz4A",
    },
  ];

  return (
    <>
      <Navbar />

      <div className=" mt-24 min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-gradient-radial from-[#001030] via-[#000814] to-[#000814]">
        {/* Heading */}
        <h2 className="mt-4 flex justify-center items-center text-4xl md:text-5xl font-bold tracking-wide uppercase text-center md:text-[3.5rem]">
          <span className="text-crimson-red mr-2">OUR</span>
          <span className="text-white">EVENTS</span>
        </h2>

        {/* Show All Button */}
        <div className="w-full max-w-[1300px] mt-4 flex justify-center md:justify-end px-4 md:px-0">
          <button
            className="text-white bg-crimson-red hover:bg-red-900 font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-300"
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
                <h3
                  className={`text-lg md:text-xl font-bold mb-2 tracking-wide ${
                    item.theme === "dream" ? "text-amber-500" : "text-red-400"
                  }`}
                >
                  {item.sportName}
                </h3>
                <p className="text-sm md:text-base mb-3 opacity-90">
                  {item.desc}
                </p>
                <div className="flex justify-center items-center gap-3">
                  {/* <button
                    className={`border-2 border-current rounded-lg px-4 py-2 font-semibold text-sm md:text-base transition-all duration-300 ${
                      item.theme === "dream"
                        ? "text-amber-500 hover:bg-amber-500 hover:text-white hover:shadow-[0_0_10px_#ff6d02]"
                        : "text-red-400 hover:bg-red-400 hover:text-white hover:shadow-[0_0_10px_#36d8fe]"
                    }`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/livescore/${item.nameid}`);
                    }}
                  >
                    Live Score
                  </button>
                  <button
                    className={`border-2 border-current rounded-lg px-4 py-2 font-semibold text-sm md:text-base transition-all duration-300 ${
                      item.theme === "dream"
                        ? "text-amber-500 hover:bg-amber-500 hover:text-white hover:shadow-[0_0_10px_#ff6d02]"
                        : "text-red-400 hover:bg-red-400 hover:text-white hover:shadow-[0_0_10px_#36d8fe]"
                    }`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/fixtures/${item.nameid}`);
                    }}
                  >
                    Fixtures
                  </button> */}
                  <button
                    className={`border-2 border-current rounded-lg px-4 py-2 font-semibold text-sm md:text-base transition-all duration-300 ${
                      item.theme === "dream"
                        ? "text-amber-500 hover:bg-amber-500 hover:text-white hover:shadow-[0_0_10px_#ff6d02]"
                        : "text-red-400 hover:bg-red-400 hover:text-white hover:shadow-[0_0_10px_#36d8fe]"
                    }`}
                    onClick={() => {
                      window.open(item.link, "_blank");
                    }}
                  >
                    Register
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
