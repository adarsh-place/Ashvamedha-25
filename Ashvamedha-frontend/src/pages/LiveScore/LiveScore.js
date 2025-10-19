import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import ScoreCard from "../../components/ScoreCard/ScoreCard.js";
import axios from "axios";
import { server } from "../../constants.js";
import live from "../../assests/demoPhotos/live.png";
import { useParams } from "react-router-dom";
import { setLoading } from "../../redux/appSlice.js";
import { useDispatch } from "react-redux";
import ComingSoon from "../../components/ComingSoon/ComingSoon.js";

function LiveScore() {
  const [text, setText] = useState("Searching for live matches ...");
  const dispatch = useDispatch();
  const [liveScore, setLiveScore] = useState([]);
  const params = useParams();
  const { sportname } = params;

  async function fetchLiveScore() {
    try {
      const result = await axios.post(`${server}/sport/getlivescore`, {
        sportname: sportname.toLowerCase(),
      });
      setLiveScore(result.data.result.liveScoreInfo);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      console.log("error", err);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (!liveScore.length) setText("No live matches present");
    }, 4000);
    dispatch(setLoading(true));
    const interval = setInterval(fetchLiveScore, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-white">
      <Navbar />

      <div className="flex flex-col justify-center items-center w-full mt-5 mb-10">
        {/* SPORT NAME + LIVE ICON */}
        {liveScore.length !== 0 && (
          <div className="flex justify-center items-center h-[90px] mb-5 font-extrabold text-white uppercase">
            <div className="flex items-center text-[48px] sm:text-[40px] font-extrabold tracking-wider">
              <span>
                <img
                  src={live}
                  alt="live"
                  className="w-20 animate-pulse opacity-90"
                />
              </span>
              <span className="ml-4 drop-shadow-[0_0_15px_orangered]">
                {sportname}
              </span>
            </div>
          </div>
        )}

        {/* SCORE CONTENT */}
        <div className="flex flex-col justify-end items-center w-full min-h-[75vh]">
          {liveScore.length !== 0 ? (
            liveScore.map((item, index) => (
              <ScoreCard key={index} info={item} />
            ))
          ) : (
            <div className="min-h-[75vh] flex flex-col items-center justify-center text-center text-[28px] sm:text-[30px] font-semibold text-[#ff4500]">
              <br />
              {text}
            </div>
          )}
        </div>
      </div>

      {/* Optional Coming Soon */}
      {/* <ComingSoon /> */}
      <Footer />
    </div>
  );
}

export default LiveScore;
