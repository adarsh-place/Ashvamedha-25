import "./OurTeam.scss";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import axios from "axios";
// import { setLoading } from "../../redux/appSlice";
// import Loader from "../../components/Loader/Loader";

function OurTeam() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.appReducer.isLoading);
  // const [teamImg, setTeamImg] = useState([]);
  // async function fetchTeamImages() {
  //   try {
  //     dispatch(setLoading(true));
  //     const response = await axios.post(
  //       "https://ashvamedha.onrender.com/upload/",
  //       {
  //         folderName: "TeamImg",
  //       }
  //     );
  //     setTeamImg(response?.data?.result);
  //   } catch (err) {
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // }
  // useEffect(() => {
  //   fetchTeamImages();
  // }, []);
  const chiefCoordinator = [
    {
      name: "Chakradhar Allu ",
      position: "Chief Coordinator",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729327567/ashvamedha/team/z0wu3a16v1k0wgqeyxt5.jpg",
      no: "+91 96186 58706",
    },
  ];

  const teamMembers = [
    {
      name: "Vansh Raj Gupta ",
      position: "Publicity ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720503/ashvamedha/team/pi1yovzsrbn9xqew5hew.jpg",
      no: "+91 99737 70623",
    },
    {
      name: "Harish patidar ",
      position: "Events ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721046/ashvamedha/team/vplukiobhozebm5pio5t.jpg",
      no: "+91 62648 69374 ",
    },
    {
      name: "Srijith burra",
      position: "Sponsorship",
      image : "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720503/ashvamedha/team/wvxnpci56fgf6qa2uyik.jpg",
      no: "+91 78159 79633",
    },
    {
      name: "Rohinish Raj",
      position: "Web&D ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720505/ashvamedha/team/d6pqqqdexscnkvwnoxps.jpg",
      no: "+91 85216 71402",
    },
    {
      name: "Afzal Muhammed",
      position:"Hospitality",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/itligupcge8v6xtmrbiw.jpg",
      no: "+91 63826 43748",
    },
  ];
  const corehead = [
    {
      name: "Adarsh Chandra",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vlycnaazp2qcrygswxya.jpg",
      no: "+91 93026 62809",
    },
    {
      name: "Shreyansh Shashwat",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728843691/ashvamedha/team/u5rmar3eivphrscjfm8f.jpg",
      no: "+91 91228 93411 ",
    },
    {
      name: "Piyush Kashyap",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vvxkkb0qsq2cd6t7vkvx.jpg",
      no: "+91 98278 71224",
    },
    {
      name: "Ayush Mittal ",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729419882/ashvamedha/team/zpcylfs2qx6vtsnovhur.jpg",
      no: "+91 63676 45929",
    },
    {
      name: "Chandan Kumar ",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vjmjgjyyxwcdksbuoeyj.jpg",
      no: "+91 83402 65760",
    },
    {
      name: "Arit Gandhi",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720505/ashvamedha/team/suzhk8pi17d2a9tng3u0.jpg",
      no: "+91 9353255049",
    },
    {
      name: "Tanuj Kumar Gupta",
      position: "Core Head",
      image:"https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729402896/ashvamedha/team/xg85qegkihg0luh1th9v.jpg",
      no: "+91 9079095706",
    },
    
    {
      name: "Baman Teja",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728843690/ashvamedha/team/ide1pqdiut3yacmsnbhk.jpg",
      no: "+91 6304640345",
    },
  ];
  return (
    <>
    <Navbar />
    {/* {!isLoading ?  */}
      (<div className="OurTeam mt-20">
        <h2 className="heading">
          <span className="h1">OUR</span>
          <span className="h2"> TEAM</span>
        </h2>
        <div className="team-container">
          <div className="cards">
            {/* Display Chief Coordinator outside the grid */}
            <div className="chief-coordinator">
              {chiefCoordinator.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position}</p>
                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="coordinator">
              {teamMembers.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position} <br /> Co-ordinator</p>
                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="coreheads">
              {corehead.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position}</p>

                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>)
     {/* : <Loader/>} */}
    </>
  );
}

export default OurTeam;
