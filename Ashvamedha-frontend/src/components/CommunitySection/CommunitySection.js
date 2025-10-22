import React from "react";
// import "./CommunitySection.scss";

export default function CommunitySection() {
  return (
    <section className="relative z-10 flex items-center justify-center px-6 md:px-24 py-20 md:py-24">
      <div className="bg-black/70 text-center rounded-lg p-10 md:p-12 text-white max-w-2xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-white/4">
        <h2 className="font-montserrat text-center text-3xl md:text-4xl tracking-wider mb-4">
          JOIN THE COMMUNITY
        </h2>
        <p className="text-lg mb-3 font-rowdies font-normal">
          Welcome to Ashvamedha - IIT Bhubaneswar's Sports Fest!
        </p>
        <p className="text-base text-white/90 leading-relaxed mb-6 font-sans text-start md:text-center ml-6 md:ml-0">
          Be part of Odisha's largest collegiate sports festival. Stay updated
          with event schedules, match highlights, live updates, and exclusive
          behind- the-scenes content. This is where champions rise and legends
          are made.
        </p>

        <div>
          <button
            className="inline-flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-500 hover:text-white text-[#6ee7b7] border border-[#6ee7b7]/18"
            onClick={() => window.open("https://chat.whatsapp.com/HpdDtoCHM1oFRV1xnWdrP1?mode=wwc", "_blank")}
          >
            <span>☑</span>
            Join WhatsApp Channel
          </button>
        </div>
      </div>
    </section>
  );
}
