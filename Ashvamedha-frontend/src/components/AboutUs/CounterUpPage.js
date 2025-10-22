import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// No .scss import is needed

const CounterUpPage = () => {
  const [countersOn, setCountersOn] = useState([false, false, false, false]);

  return (
    <ScrollTrigger
      onEnter={() => setCountersOn([true, true, true, true])}
      onExit={() => setCountersOn([false, false, false, false])}
    >
      {/* Container now has 'flex-wrap' by default
        and 'md:flex-nowrap' to force one row on medium+ screens
      */}
      <div className="flex flex-wrap justify-around items-center py-6 border-t-2 border-b-2 border-white mx-6 md:mx-0 md:flex-nowrap">
        
        {/* Each item is 'w-1/2' (50% width) on mobile,
          and 'md:flex-1' on medium+ screens
        */}
        <div className="w-1/2 md:flex-1 text-center p-2 text-white transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          {/* Text is responsive: 'text-3xl' on mobile, 'md:text-5xl' on medium+ */}
          <h1 className="text-3xl md:text-5xl font-bold text-crimson-red p-2.5">
            {countersOn[0] && (
              <CountUp start={1} end={9} duration={1} delay={0} />
            )}
            +
          </h1>
          {/* Text is responsive: 'text-sm' on mobile, 'md:text-xl' on medium+ */}
          <p className="text-sm md:text-xl">SPORTS</p>
        </div>

        {/* Item 2 */}
        <div className="w-1/2 md:flex-1 text-center p-2 text-white transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <h1 className="text-3xl md:text-5xl font-bold text-crimson-red p-2.5">
            {countersOn[1] && (
              <CountUp start={10} end={18} duration={2} delay={0} />
            )}
          </h1>
          <p className="text-sm md:text-xl">COLLEGES</p>
        </div>

        {/* Item 3 */}
        <div className="w-1/2 md:flex-1 text-center p-2 text-white transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <h1 className="text-3xl md:text-5xl font-bold text-crimson-red p-2.5">
            {countersOn[2] && (
              <CountUp start={100} end={700} duration={2} delay={0} />
            )}
            +
          </h1>
          <p className="text-sm md:text-xl">PARTICIPANTS</p>
        </div>

        {/* Item 4 */}
        <div className="w-1/2 md:flex-1 text-center p-2 text-white transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <h1 className="text-3xl md:text-5xl font-bold text-crimson-red p-2.5">
            {countersOn[3] && (
              <CountUp start={1000} end={3000} duration={2} delay={0} />
            )}
            +
          </h1>
          <p className="text-sm md:text-xl">FOOTFALL</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;