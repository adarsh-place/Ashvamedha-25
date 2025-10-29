import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineDoubleRight, AiOutlineRead } from "react-icons/ai"; // Fixed import path
import Navbar from "../../components/Navbar/Navbar.js"; // Removed original import
// Your full sportsInfo array...
const sportsInfo = [
  {
    id: 1,
    sportName: "Chess",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0009_zsy4vk.jpg",
    desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
    date: "Nov 7th to 9th",
    location: "Lecture Hall Complex",
    link: "https://forms.gle/58mquP7dhZpJMHzw5",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    poc: "Ajjay Raja (9865212843) and Parth Baawse (8830481719)",
    theme: "dream",
    nameid: "chess",
  },
  {
    id: 3,
    sportName: "Badminton",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0013_rqxelz.jpg",
    desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
    date: "Nov 7th to 9th",
    location: "Badminton Court",
    link: "https://forms.gle/yHJi86AeqYK7uxEdA",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    poc: "Sai Santhosh (6304330277) and Ujjwal (7004345850)",
    theme: "dream",
    nameid: "badminton",
  },
  {
    id: 2,
    sportName: "Volleyball",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0012_yvztv3.jpg",
    desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
    date: "Nov 7th to 9th",
    location: "Volleyball Court",
    link: "https://forms.gle/sZEMVWQMQ6dmu6pCA",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    poc: "K Lakshmi Charan (9281420073) and Himanshu (8003900418)",
    theme: "dominate",
    nameid: "volleyball",
  },
  {
    id: 4,
    sportName: "Football",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0007_lmwqml.jpg",
    desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
    date: "Nov 7th to 9th",
    location: "SAC Football Ground",
    link: "https://forms.gle/pbJpSAatqwBY2Ebj8",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    poc: "Ashmit (9051200470) and Aradhya (9699317889)",
    theme: "dominate",
    nameid: "football",
  },
  {
    id: 6,
    sportName: "Basketball",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761655752/WhatsApp_Image_2025-10-25_at_23.09.07_8ce484cd_k0ryxt.jpg",
    desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
    date: "Nov 7th to 9th", 
    location: "Basketball Court 1 and 2",
    link: "https://forms.gle/MphFhZ6brpEeyWno7",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    poc: "Dhruv Jain (8587820774) and Rajeev (9549707684)",
    theme: "dominate",
    nameid: "basketball",
  },
  {
    id: 5,
    sportName: "Table Tennis",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0006_blikvt.jpg",
    desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
    location: "TT Room, SAC",
    date: "Nov 7th to 9th",
    link: "https://forms.gle/XEmFy59gLhX378U1A",
    poc: "Palash Jain (7838571933) and Vijeta Moond (9166221821)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    theme: "dream",
    nameid: "tabletennis",
  },
  {
    id: 8,
    sportName: "BGMI (Online)",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761126385/bgmi_remkn8.png",
    desc: "Every drop brings a new chance; gear up and make your mark in the battlefield .",
    location: "Online",
    date: "Nov 7th to 9th",
    link: "https://unstop.com/p/bgmi-e-sports-ashvamedha-iit-bhubaneswar-indian-institute-of-technology-bhubaneswar-1578396",
    poc: "Tanuj (7742310287)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    theme: "dominate",
    nameid: "bgmi",
  },
  {
    id: 7,
    sportName: "GYM & Weightlifting",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074268/IMG-20251021-WA0004_zjpx3z.jpg",
    desc: "Every rep is a step closer to becoming the strongest version of yourself",
    date: "Nov 7th to 9th",
    location: "GYM, SAC",
    link: "https://forms.gle/JuoUZsBZ6njzRr4T6",
    poc: "Lokendra Singh (7906018138) and Arya Prajapati (9580460068)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    theme: "dream",
    nameid: "gym",
  },
  {
    id: 9,
    sportName: "Lawn Tennis",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761327373/Gemini_Generated_Image_dofna7dofna7dofn_phyudq.png",
    desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
    date: "Nov 7th to 9th",
    location: "Lawn Tennis Court",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdf2h5BBRPxTBdFKSmcoA9JAENtx_YI8tzDRpkA_D88LcsBgA/viewform?usp=sharing&ouid=113119971323291133576",
    poc: "Naveen (8189895810) and Sanjith (7338925406)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
    theme: "dream",
    nameid: "lawntennis",
  },
  {
    id: 10,
    sportName: "Valorant (Online)",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0008_iotdla.jpg",
    desc: "Every round is a new beginning - lock in, aim true and dominate the arena.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "valorant",
    link: "https://forms.gle/Vyg1PeB8dMprT7PG7",
    location: "Online",
    poc: "Arpit (8533933245)", 
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
  },
  {
    id: 11,
    sportName: "Body Building",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761332152/IMG-20251021-WA0003_d4gunj.jpg",
    desc: "The sweat drips, the heart pounds. Strength is built, not given.",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "bodybuilding",
    link: "https://forms.gle/9AsTrTApA7teKHHi6",
    location: "Community Center "     ,
    poc: "Lokendra Singh (7906018138) and Aviral Srivastav (9353614457)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
  },
  {
    id: 12,
    sportName: "Kho Kho (Boys)",
    imgUrl: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761326325/Kho-Kho-Game-1280x720-11_ijbmyu.jpg",
    desc: "The echo of your sprint is the sound of dominance. Own the field.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "khokho",
    link: "https://forms.gle/QHD72r9oiJhQDcz4A",
    location: "Hockey Ground",
    poc: "Vishal Rathod (6281725910)",
    rulebook: "https://drive.google.com/file/d/1CurvGYxRDieB-BbMgZFNAOib9IRDJmiI/view",
  },
];

// Helper object to map theme keys to Tailwind classes
const themeStyles = {
  dream: {
    title: "text-ashv-dream text-3xl sm:text-[46px] font-bold mb-2.5 text-center lg:text-left",
    label: "text-ashv-dream",
    btnPrimary: "bg-ashv-dream hover:bg-opacity-80 text-white",
    btnOutline: "border-2 border-ashv-dream text-ashv-dream hover:bg-ashv-dream hover:text-white",
  },
  dominate: {
    title: "text-ashv-dominate text-3xl sm:text-[46px] font-bold mb-2.5 text-center lg:text-left",
    label: "text-ashv-dominate",
    btnPrimary: "bg-ashv-dominate hover:bg-opacity-80 text-white",
    btnOutline: "border-2 border-ashv-dominate text-ashv-dominate hover:bg-ashv-dominate hover:text-white",
  },
};

function SingleSport() {
  const [sportDetail, setSportDetails] = useState({
    sportName: "",
    imgUrl: "",
    desc: "",
    location: "",
    date: "",
    link: "",
    poc: "",
    rulebook: "",
    theme: "dominate", // Default theme
  });
  const params = useParams();
  const { sportid } = params;
  const navigate = useNavigate();

  function handleRegistration(link) {
    if (link) {
      window.open(link);
    }
  }

  useEffect(() => {
    const result = sportsInfo.find(
      (sport) => sport.nameid === sportid
    );

    if (result) {
      setSportDetails(result);
    } else {
      const resultById = sportsInfo.find(
        (sport) => sport.id === Number.parseInt(sportid)
      );

      if (resultById) {
        setSportDetails(resultById);
      } else {
        console.error("Sport not found for ID or Name:", sportid);
        // navigate("/not-found"); 
      }
    }
  }, [sportid, navigate]); 

  const currentTheme =
    themeStyles[sportDetail.theme] || themeStyles.dominate;

  const btnBase = "py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto";

  return (
    <>
      <Navbar />
      <div className="mt-16 single-sport-page  text-white min-h-screen">
        <div className="sportspage flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-8 lg:py-16">
          
          <div className="cards w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            <div className="sports-img w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 flex-shrink-0">
              <img
                src={sportDetail.imgUrl}
                alt={sportDetail.sportName || "Loading..."}
                className="object-cover h-auto w-full aspect-square rounded-2xl border-2 border-[#4c4b4b]"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src=`https://placehold.co/450x450/333/fff?text=${sportDetail.sportName.replace(' ', '+') || 'Image'}`
                }}
              />
            </div>

            <div className="sports-info w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className={currentTheme.title}>
                {sportDetail.sportName}
              </h1>
              <p className="desc w-full lg:w-[90%] mb-4 text-lg lg:text-2xl">
                {sportDetail.desc}
              </p>

              {/* Grouped Metadata - Added text-center for mobile, lg:text-left for desktop */}
              <div className="space-y-1 text-base lg:text-xl w-full text-center lg:text-left">
                {sportDetail.poc && (
                  <p className="poc">
                    <span className="text-[#DC143C] font-semibold">Person of Contact:</span>{" "}
                    {sportDetail.poc}
                  </p>
                )}
                {sportDetail.location && (
                  <p className="venue">
                    <span className="text-[#DC143C] font-semibold">Location:</span>{" "}
                    {sportDetail.location}
                  </p>
                )}
                {sportDetail.date && (
                  <p className="date">
                    <span className="text-[#DC143C] font-semibold">Date:</span>{" "}
                    {sportDetail.date}
                  </p>
                )}
              </div>

              {/* Grouped Buttons: Reordered to put Register first, Register uses primary theme style */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                {sportDetail.link && (
                  <button
                    onClick={() => handleRegistration(sportDetail.link)}
                    className={`${btnBase} ${currentTheme.btnPrimary}`}
                  >
                    <AiOutlineDoubleRight className="text-xl" />
                    Register
                  </button>
                )}
                {sportDetail.rulebook && (
                  <a
                    href={sportDetail.rulebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnBase} ${currentTheme.btnOutline}`}
                  >
                    <AiOutlineRead className="text-xl" />
                    Rulebook
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleSport;

