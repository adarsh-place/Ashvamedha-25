import React, { useEffect, useState, useRef } from "react"; // 1. Import useRef
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

// A more reasonable polling interval (5 seconds)
const POLLING_INTERVAL = 5000; 

function LiveScore() {
  const [text, setText] = useState("Searching for live matches ...");
  const dispatch = useDispatch();
  const [liveScore, setLiveScore] = useState([]);
  const params = useParams();
  const { sportname } = params;

  // 2. Create a ref to hold the timeout ID
  // This lets us cancel it when the component unmounts
  const pollTimer = useRef(null); 

  // 3. Refactor fetchLiveScore
  // We remove the setLoading(false) from here to control it better in the useEffect
  async function fetchLiveScore() {
    try {
      const result = await axios.post(`${server}/sport/getlivescore`, {
        sportname: sportname.toLowerCase(),
      });
      setLiveScore(result.data.result.liveScoreInfo);
    } catch (err) {
      console.log("error", err);
      // Don't dispatch loading false here, let the effect handle it
    }
  }

  // 4. Update the useEffect logic
  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component unmounts

    // Set loading to true for the *initial* load
    dispatch(setLoading(true));

    // Your logic for setting "No live matches" text
    const noMatchTimer = setTimeout(() => {
      // Use functional update to check the *current* state
      setLiveScore((currentScore) => {
        if (currentScore.length === 0) {
          setText("No live matches present");
        }
        return currentScore;
      });
    }, 4000);

    // Define the polling function
    const runPolling = async () => {
      try {
        await fetchLiveScore(); // Wait for the fetch to complete
      } catch (err) {
        console.error("Polling fetch failed", err);
      } finally {
        // If the component is still mounted, schedule the next poll
        if (isMounted) {
          pollTimer.current = setTimeout(runPolling, POLLING_INTERVAL);
        }
      }
    };

    // This handles the *initial* fetch
    fetchLiveScore()
      .catch((err) => console.error("Initial fetch failed", err))
      .finally(() => {
        // When the *first* fetch is done, hide the loader
        if (isMounted) {
          dispatch(setLoading(false));
          // And start the polling loop
          pollTimer.current = setTimeout(runPolling, POLLING_INTERVAL);
        }
      });

    // 5. Cleanup function
    return () => {
      isMounted = false; // Mark as unmounted
      clearTimeout(noMatchTimer); // Clear the "no matches" timer
      if (pollTimer.current) {
        clearTimeout(pollTimer.current); // Clear the next scheduled poll
      }
    };
  }, [dispatch, sportname]); // Dependencies

  return (
    // ... Your JSX ... (no changes needed here)
    <div className="flex flex-col justify-center items-center w-full h-full text-white">
      <Navbar />

      <div className="flex flex-col justify-center items-center w-full mt-5 mb-10">
        {/* SPORT NAME + LIVE ICON */}
        {liveScore.length !== 0 && (
          <div className="flex justify-center items-center h-[90px] mb-5 font-extrabold text-white uppercase">
            <div className="flex items-center text-[48px] sm:text-[40px] font-extrabold tracking-wider">
              <span>
                <img
                  src="../../assests/demoPhotos/live.png"
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