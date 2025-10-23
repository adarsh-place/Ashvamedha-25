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
      position: "CHIEF COORDINATOR",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076912/IMG_20251019_193409_-_Chakradhar_Allu_r7fjbz.png",
      no: "+91 96186 58706",
    },
  ];

  const teamMembers = [
    {
      name: "Vansh Raj Gupta ",
      position: "Publicity ",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076909/1759910803269_-_NIRF_2024_54_cclxcg.png",
      no: "+91 99737 70623",
    },
    {
      name: "Harish patidar ",
      position: "Events ",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761132116/Harish_Patidar_of4pwj.jpg",
      no: "+91 62648 69374 ",
    },
    {
      name: "Srijith burra",
      position: "Sponsorship",
      image : "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076914/Screenshot_2025-10-21-10-33-47-014_com.miui.gallery-edit_-_BURRA_SRIJITH_qvtdiw.jpg",
      no: "+91 78159 79633",
    },
    {
      name: "Rohinish Raj",
      position: "Web&D ",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761077109/WhatsApp_Image_2025-10-22_at_01.34.06_c72567a1_ucrk0d.jpg",
      no: "+91 85216 71402",
    },
    {
      name: "Afzal Muhammed",
      position:"Hospitality",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076910/20251001_173413_-_Afzal_Muhammed_owjlvc.jpg",
      no: "+91 63826 43748",
    },
  ];
  const corehead = [
    {
      name: "Adarsh Chandra",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761133357/aa_zkgnr0.jpg",
      no: "+91 93026 62809",
    },
    {
      name: "Arit Gandhi",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076917/IMG20251003165955_-_Arit_Gandhi_xmqipp.jpg",
      no: "+91 93532 55049",
    },
    {
      name: "Shreyansh",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076915/20240911_132434_-_Shreyansh_Shashwat_dwwmsp.jpg",
      no: "+91 91228 93411 ",
    },
    {
      name: "Piyush Kashyap",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076915/IMG_7417_-_piyush_kashyap_g1fsm1.jpg",
      no: "+91 98278 71224",
    },
    {
      name: "Ayush Mittal ",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076916/IMG20250930203044_-_AYUSH_Mittal_vttjfz.jpg",
      no: "+91 63676 45929",
    },
    {
      name: "Chandan Kumar ",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076915/IMG_20250203_220941_-_Chandan_Kumar_mc2mdj.jpg",
      no: "+91 83402 65760",
    },
    {
      name: "Tanuj",
      position: "Core Head",
      image:"https://res.cloudinary.com/diu6ioiov/image/upload/v1761076912/IMG_20250725_184221_-_Tanuj_Kumar_Gupta_iawmd2.jpg",
      no: "+91 90790 95706",
    },
    
    {
      name: "Baman Teja",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761076916/Snapchat-1808339712_-_BAMAN_TEJA_ahihj8.jpg",
      no: "+91 63046 40345",
    },
    {
      name: "Sandeep Navtiya",
      position: "Core Head",
      image: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761227873/WhatsApp_Image_2025-10-23_at_12.25.30_54985402_bxfiad.jpg",
      no: "+91 96308 86725",
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
            <div className="section-subheading text-crimson-red pb-6">CHIEF COORDINATOR</div>
            <div className="chief-coordinator">
              {chiefCoordinator.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="section-subheading text-crimson-red pt-8">COORDINATORS</h3>
            <div className="coordinator">
              {teamMembers.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" class />
                  </div>
                  <div className="description">
                    <p className="num">{member.position} <br /></p>
                    <h3 className="name">{member.name}</h3>
                    <h3 className="num">{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            {/* Combined heading for Core Heads & Coordinators */}
            <h3 className="section-subheading text-crimson-red pt-10">CORE HEADS </h3>
            <div className="coreheads">
              {corehead.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <h3 className="name">{member.name}</h3>
                    <h3 className="num">{member.no}</h3>
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
