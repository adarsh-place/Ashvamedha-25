import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ShowAllEvents() {
  const navigate = useNavigate();

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
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761327373/Gemini_Generated_Image_dofna7dofna7dofn_phyudq.png",
      desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "lawntennis",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdf2h5BBRPxTBdFKSmcoA9JAENtx_YI8tzDRpkA_D88LcsBgA/viewform?usp=sharing&ouid=113119971323291133576",
    },
    {
      id: 10,
      sportName: "Valorant",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0008_iotdla.jpg",
      desc: "Every round is a new beginning - lock in, aim true and dominate the arena.",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "valorant",
      link: "https://forms.gle/Vyg1PeB8dMprT7PG7",
    },
    {
      id: 11,
      sportName: "Body Building",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761332152/IMG-20251021-WA0003_d4gunj.jpg",
      desc: "The sweat drips, the heart pounds. Strength is built, not given.",
      date: "26th and 27th October",
      theme: "dream",
      nameid: "bodybuilding",
      link: "https://forms.gle/9AsTrTApA7teKHHi6",
    },
    {
      id: 12,
      sportName: "Kho Kho (Boys",
      imgUrl:
        "https://res.cloudinary.com/diu6ioiov/image/upload/v1761326325/Kho-Kho-Game-1280x720-11_ijbmyu.jpg",
      desc: "The echo of your sprint is the sound of dominance. Own the field.",
      date: "26th and 27th October",
      theme: "dominate",
      nameid: "khokho",
      link: "https://forms.gle/QHD72r9oiJhQDcz4A",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-16 min-h-screen bg-gradient-radial from-[#001030] via-[#000814] to-[#000814] text-white py-12 px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 uppercase flex justify-center items-center">
          <span className="text-crimson-red mr-2">ALL</span>
          <span>EVENTS</span>
        </h2>

        <div className="flex flex-col gap-12 max-w-[1300px] mx-auto">
          {sportsInfo.map((item, index) => (
            <div
              key={item.id}
              className={`mt-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform transform hover:scale-[1.02] cursor-pointer ${ // Added hover and cursor
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              // **** ADDED THIS ONCLICK HANDLER ****
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/events/${item.id}`);
              }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.imgUrl}
                  alt={item.sportName}
                  className="w-full max-w-sm aspect-square object-cover rounded-2xl border-4 border-white"
                />
              </div>

              {/* Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                <h3
                  className={`text-3xl font-semibold uppercase mb-4 ${
                    item.theme === "dream" ? "text-amber-500" : "text-red-400"
                  }`}
                >
                  {item.sportName}
                </h3>
                <p className="text-base md:text-lg mb-4 max-w-md">
                  {item.desc}
                </p>
                <div className="flex justify-center md:justify-start gap-4 mt-2">
                  {/* ... (Your commented-out buttons) ... */}
                  <button
                    // **** MODIFIED THIS ONCLICK HANDLER ****
                    onClick={(e) => {
                      // Stop the click from bubbling up to the parent div
                      e.stopPropagation();
                      window.open(item.link, "_blank");
                    }}
                    className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all duration-300 ${
                      item.theme === "dream"
                        ? "text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white"
                        : "text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShowAllEvents;