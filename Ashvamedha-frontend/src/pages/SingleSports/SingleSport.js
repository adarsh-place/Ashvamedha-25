import "./SingleSport.scss";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai/index.esm.js";
// import Navbar from "../../components/Navbar/Navbar.js";
import UpcomingMatch from "../../components/UpcomingMatch/UpcomingMatch.js";
// import badminton from "../../assests/demoPhotos/badminton.jpg";
// import bb from "../../assests/demoPhotos/basketball.jpg";
// import chess from "../../assests/demoPhotos/chess.jpg";
// import fb from "../../assests/demoPhotos/football.jpg";
// import tt from "../../assests/demoPhotos/tt.jpg";
// import vb from "../../assests/demoPhotos/vb.jpg";

// const sportsInfo = [
//   {
//     id: 1,
//     sportName: "Chess",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
//     desc: "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship, we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie.Information Regarding the event is given below.",
//     date: "2nd-3rd November",
//     location: "SES Room No: 218,219",
//     link:
//       "https://docs.google.com/forms/d/e/1FAIpQLSd9i_E6j5lr2aquQ3RxkeBOb_-mL9OcEjlplMMVasNJw4iZFg/viewform",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     poc: "Srikanth (9392358848)",
//     theme: "warm",
//   },
//   {
//     id: 2,
//     sportName: "Badminton",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/qeyeqi5joaef13p1kkg2.png",
//     desc: "Badminton is a sport that demands speed, agility, and finesse. Whether you're smashing shuttlecocks or diving for a crucial save, the Ashvamedha Badminton Championship promises intense rallies and thrilling matches. Join us on the court for a birdie-tastic showdown.Information Regarding the event is given below.",
//     date: "2nd-3rd November",
//     location: "Inside SAC Badminton Court",
//     link:
//       "https://forms.gle/RZHEHSQfr8Lar6HFA",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     poc: "Harish (6264869374) and Sai Vardhan (8144574654)",
//     theme: "cold",
//   },
//   {
//     id: 3,
//     sportName: "Volleyball",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729823/ashvamedha/events/bwneqkxvz129rbzbmr00.jpg",
//     desc: "Volleyball is a dynamic team sport that demands coordination, agility, and teamwork. Whether you're spiking, blocking, or diving for a save, it's all about the thrill of the game. Join us for a spirited match at Ashvamedha Sports Arena.Information Regarding the event is given below.",
//     date: "2nd-3rd November",
//     location: "Volleyball Court 1,2",
//     link:
//       "https://forms.gle/3PL7abtt11sK1HxF7",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     poc: "Baman Teja (6304640345)",
//     theme: "warm",
//   },
//   {
//     id: 4,
//     sportName: "Football",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/fwn1aohwqu16an071qcv.png",
//     desc: "Football, the world's most beloved sport, unites people through the joy of scoring goals and making breathtaking saves. At Ashvamedha, we bring the football community together for a thrilling tournament filled with skill, passion, and unforgettable moments.Information Regarding the event is given below.",
//     date: "2nd-3rd November",
//     location: "Football Ground",
//     link:
//       "https://forms.gle/1toBjx9Ss2oJtbqi9",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     poc: "Ajay (9152177679) and Yasas (7847825923)",
//     theme: "cold",
//   },
//   {
//     id: 5,
//     sportName: "Basketball",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
//     desc: "Basketball is a fast-paced, high-flying game of strategy and skill. Dribble, pass, and shoot your way to victory in the Ashvamedha Basketball Championship. Join us on the court for slam dunks and three-pointers that will leave you in awe.Information Regarding the event is given below.",
//     date: "2nd-3rd November",
//     location: "Basketball Court 1,2",
//     link:
//       "https://forms.gle/HhyeT3XzW8qmMYAY6",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     poc: "Shivam (6378287518) and Varsha (8002166766)",
//     theme: "warm",
//   },
//   {
//     id: 6,
//     sportName: "Table Tennis",
//     imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
//     desc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong.Information Regarding the event is given below.",
//     location: "Inside SAC Multi-Purpose Hall",
//     date: "2nd-3rd November",
//     link:
//       "https://forms.gle/AA6bNJrpzKDjDieUA",
//     poc: "Thanvi Reddy (9381811060) and Ayush (6367645929)",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     theme: "cold",
//   },
//   {
//     id: 7,
//     sportName: "BGMI",
//     imgUrl:
//       "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/gwbnnstk5f6m2so6m4s4.jpg",
//     desc: "Battlegrounds Mobile India (BGMI) immerses players in a thrilling battle royale experience. Parachute onto a vibrant island, scavenge for weapons, and outmaneuver opponents in intense firefights",
//     location: "ONLINE",
//     date: "2nd-3rd November",
//     link:
//       "https://docs.google.com/forms/d/e/1FAIpQLSeK79UZD1OPOyf_3djG2tUhWAhvMO8VOqh77xP9HO4KwJELaw/viewform",
//     poc: "Sanskar Kosare (8208278646)",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     theme: "warm",
//   },
//   {
//     id: 8,
//     sportName: "GYM & Weightlifting",
//     imgUrl:
//       "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721504/ashvamedha/events/dhsxh0cezuu09f1z9zyo.jpg",
//     desc: "The gym, a sanctuary of sweat and determination, becomes a canvas where weightlifting transforms mere metal into the artistry of strength, sculpting not only physiques but also character.",
//     location: "SAC GYM",
//     date: "2nd-3rd November",
//     link:
//       "https://docs.google.com/forms/d/e/1FAIpQLSf1Ib2CKYc8CGiFOyoPLyyBV1cvjqKlH8jfPjQImGfxQCqcAA/viewform",
//     poc: "Deekshansh (7225855505) and Tanish (6350108695)",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     theme: "cold",
//   },
//   {
//     id: 9,
//     sportName: "Athletics",
//     imgUrl:
//       "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/wdxnqj88su8gu4gus0fc.jpg",
//     desc: "Athletics, the exhilarating pursuit of speed, agility, and endurance, unfolds as a dynamic tapestry of human potential, where each race and jump becomes a vivid expression of determination and skill.",
//     location: "Beside Football Ground",
//     date: "2nd-3rd November",
//     link:
//       "https://docs.google.com/forms/d/e/1FAIpQLSeex8BxbszNjeyrJbllYiodsJWSH2TeEsPaDYVRHms1wGrTJw/viewform",
//     poc: "Sreenath Reddy (9703040597) and Lukge Jilen (7085758430)",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     theme: "warm",
//   },
//   {
//     id: 10,
//     sportName: "Lawn Tennis",
//     imgUrl:
//       "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728895226/ashvamedha/events/yaocywewl3qdfk26lnha.jpg",
//     desc: "Step onto the vibrant court of lawn tennis, where each stroke of the racket echoes with determination and grace. Here, athletes transform challenges into artistry, competing in a dance of precision and skill.",
//     location: "SAC Tennis Courts",
//     date: "2nd-3rd November",
//     link:
//       "https://forms.gle/w2a4Sm1PXMms3qJD6",
//     poc: "M Pranavram (8072477461) and Krish Garg (7217530667)",
//     rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
//     theme: "cold",
//   },
// ];

const sportsInfo = [
  {
    id: 1,
    sportName: "Chess",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0009_zsy4vk.jpg",
    desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "chess",
    link: "https://forms.gle/58mquP7dhZpJMHzw5",
    location: "",
  },
  {
    id: 2,
    sportName: "Volleyball",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0012_yvztv3.jpg",
    desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "volleyball",
    link: "https://forms.gle/sZEMVWQMQ6dmu6pCA",
    location: "",
  },
  {
    id: 3,
    sportName: "Badminton",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074273/IMG-20251021-WA0013_rqxelz.jpg",
    desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "badminton",
    link: "https://forms.gle/yHJi86AeqYK7uxEdA",
    location: "",
  },
  {
    id: 4,
    sportName: "Football",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0007_lmwqml.jpg",
    desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "football",
    link: "https://forms.gle/pbJpSAatqwBY2Ebj8",
    location: "SAC Football Ground",
  },
  {
    id: 5,
    sportName: "Table Tennis",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0006_blikvt.jpg",
    desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "tabletennis",
    link: "https://forms.gle/XEmFy59gLhX378U1A",
    location: "",
  },
  {
    id: 6,
    sportName: "Basketball",
    imgUrl:
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
    desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "basketball",
    link: "https://forms.gle/MphFhZ6brpEeyWno7",
    location: "",
  },
  {
    id: 7,
    sportName: "GYM and WeighLifting",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074268/IMG-20251021-WA0004_zjpx3z.jpg",
    desc: "Every rep is a step closer to becoming the strongest version of yourself",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "gym",
    link: "https://forms.gle/JuoUZsBZ6njzRr4T6",
    location: "",
  },
  {
    id: 8,
    sportName: "BGMI",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761126385/bgmi_remkn8.png",
    desc: "Every drop brings a new chance; gear up and make your mark in the battlefield .",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "bgmi",
    link: "https://unstop.com/p/bgmi-e-sports-ashvamedha-iit-bhubaneswar-indian-institute-of-technology-bhubaneswar-1578396",
    location: "",
  },
  {
    id: 9,
    sportName: "Lawn Tennis",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761327373/Gemini_Generated_Image_dofna7dofna7dofn_phyudq.png",
    desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "lawntennis",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdf2h5BBRPxTBdFKSmcoA9JAENtx_YI8tzDRpkA_D88LcsBgA/viewform?usp=sharing&ouid=113119971323291133576",
    location: "",
  },
  {
    id: 10,
    sportName: "Valorant",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761074269/IMG-20251021-WA0008_iotdla.jpg",
    desc: "Every round is a new beginning - lock in, aim true and dominate the arena.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "valorant",
    link: "https://forms.gle/Vyg1PeB8dMprT7PG7",
    location: "",
  },
  {
    id: 11,
    sportName: "Body Building",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761332152/IMG-20251021-WA0003_d4gunj.jpg",
    desc: "The sweat drips, the heart pounds. Strength is built, not given.",
    date: "Nov 7th to 9th",
    theme: "dream",
    nameid: "bodybuilding",
    link: "https://forms.gle/9AsTrTApA7teKHHi6",
    location: "",
  },
  {
    id: 12,
    sportName: "Kho Kho",
    imgUrl:
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761326325/Kho-Kho-Game-1280x720-11_ijbmyu.jpg",
    desc: "The echo of your sprint is the sound of dominance. Own the field.",
    date: "Nov 7th to 9th",
    theme: "dominate",
    nameid: "khokho",
    link: "https://forms.gle/QHD72r9oiJhQDcz4A",
    location: "Hockey Ground",
  },
];

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
    theme: "",
  });
  const params = useParams();
  const { sportid } = params;
  const navigate = useNavigate();

  // const [sportImg, setSportImg] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  function handleRegistration(sportName) {
    const response = sportsInfo.find((item) => item.sportName === sportName);
    window.open(response.link);
  }
  useEffect(() => {
    const result = sportsInfo.find(({ id }) => id === Number.parseInt(sportid));

    setSportDetails(result);
  }, [setSportDetails, sportid]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="single-sport-page">
        <div className="sportspage">
          <div className="popup-content">
            <div className="match-popup">
              <h2
                onClick={() => handleRegistration(sportDetail.sportName)}
                className={sportDetail.theme}
              >
                Register
              </h2>
              <AiOutlineDoubleRight
                onClick={() => handleRegistration(sportDetail.sportName)}
                className="next"
              />
            </div>
          </div>

          <div className="cards">
            <div className="sports-info">
              <h1 id={sportDetail.theme}>{sportDetail.sportName}</h1>
              <p className="desc">{sportDetail.desc}</p>
              <p className="poc">
                <span className={sportDetail.theme}>Person of Contact:</span>{" "}
                {sportDetail.poc}
              </p>
              <p className="venue">
                <span className={sportDetail.theme}>Location:</span>{" "}
                {sportDetail.location}
              </p>
              <p className="date">
                <span className={sportDetail.theme}>Date:</span>{" "}
                {sportDetail.date}
              </p>
              <a className="rulebook" href={sportDetail.rulebook}>
                <span className={sportDetail.theme}>Rulebook:</span> Click here
              </a>
            </div>
            <div className="sports-img">
              <img src={sportDetail.imgUrl} alt="Loading" />
            </div>
          </div>
        </div>

        {/* <div >
          <div >
            <h2 onClick={() => setPopUpOpen(!popUpOpen)} className="hover-link">
              Upcoming Matches
            </h2>
            <AiOutlineDoubleRight
              onClick={() => setPopUpOpen(!popUpOpen)}
              className="next"
            />
          </div>
          <div
            className="match-liveScore"
            onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
          >
            <h2 className="hover-link"> Live Score</h2>
            <AiOutlineDoubleRight
              className="next"
              onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
            />
          </div>
          {popUpOpen && (
            <UpcomingMatch
              trigger={true}
              children={"this is popup"}
              sportid={sportid}
            />
          )}
        </div>  */}
      </div>
    </>
  );
}

export default SingleSport;
