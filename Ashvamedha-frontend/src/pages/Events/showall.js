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
            <div className="min-h-screen bg-gradient-radial from-[#001030] via-[#000814] to-[#000814] text-white py-12 px-4">
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 uppercase flex justify-center items-center">
                    <span className="text-orange-600 mr-2">ALL</span>
                    <span>EVENTS</span>
                </h2>

                <div className="flex flex-col gap-12 max-w-[1300px] mx-auto">
                    {sportsInfo.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform transform  ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
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
                                    className={`text-3xl font-semibold uppercase mb-4 ${item.theme === "warm" ? "text-orange-600" : "text-sky-400"
                                        }`}
                                >
                                    {item.sportName}
                                </h3>
                                <p className="text-base md:text-lg mb-4 max-w-md">
                                    {item.desc}
                                </p>
                                <div className="flex justify-center md:justify-start gap-4 mt-2">
                                    <button
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate(`/livescore/${item.nameid}`);
                                        }}
                                        className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all duration-300 ${item.theme === "warm"
                                                ? "text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                                                : "text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white"
                                            }`}
                                    >
                                        Live Score
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate(`/fixtures/${item.nameid}`);
                                        }}
                                        className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all duration-300 ${item.theme === "warm"
                                                ? "text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                                                : "text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-white"
                                            }`}
                                    >
                                        Fixtures
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
