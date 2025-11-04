import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const coupons = [
  {
    id: 1,
    title: "Visitor Pass",
    price: "₹150",
    desc: "Access to all open events and food stalls for three days.",
    btnText: "Buy Full Fest",
  },
];

export default function Coupons() {
  return (
    <div className="Coupons-page">
      <Navbar />

      <main className="max-w-[1100px] mx-auto mt-28 px-4 text-center min-h-screen flex flex-col justify-start">
        <h2 className="flex justify-center items-center text-4xl md:text-5xl font-bold tracking-wide uppercase text-center md:text-[3.5rem]">
          <span className="text-crimson-red mr-2">Visitor</span>
          <span className="text-white">Coupon</span>
        </h2>

        <div className="mt-16 flex justify-center">
          {coupons.map((c) => (
            <article
              className="bg-[#05080C]/70 border border-white/4 rounded-lg p-7 flex flex-col justify-between text-white w-full max-w-[500px]"
              key={c.id}
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold m-0">{c.title}</h2>
                <div className="text-xl text-crimson-red font-bold">
                  {c.price}
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-left">{c.desc}</p>

              <div className="flex justify-center md:justify-end">
                <button
                  className="btn-primary w-full transform rounded-full border-2 border-crimson-red  px-10 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-600 sm:w-auto"
                  onClick={() => {
                    window.open(
                      "",
                      "_blank"
                    );
                  }}
                >
                  {c.btnText}
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
