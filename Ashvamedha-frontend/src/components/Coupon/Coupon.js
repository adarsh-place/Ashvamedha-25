import passImg from "../../assests/coupon.png";

const passes = [
  {
    id: 1,
    title: "Visitor Pass",
    price: "₹150",
    desc: "If you wish to attend the fest as a visitor, please purchase the pass. The pass will grant you entry to the campus and access to all public sports venues and events during the fest. You can take part in various fun games going on during the fest and Enjoy the jamming night.",
    btnText: "Buy Your Pass",
  },
];

export default function Coupons() {
  return (
    <div>
      <main className="-mt-8 max-w-[1100px] mb-12 mx-auto px-4 text-center flex flex-col justify-start">
        <h2 className="flex justify-center items-center text-4xl md:text-5xl font-bold tracking-wide uppercase text-center md:text-[3.5rem]">
          <span className="text-crimson-red mr-2">Visitor</span>
          <span className="text-white">Pass</span>
        </h2>

        <div className="mt-10 flex justify-center">
          {passes.map((c) => (
            <article
              className="flex flex-col justify-between text-white w-full max-w-[500px]"
              key={c.id}
            >
              <img src={passImg} className="rounded-t-lg "></img>
              <div className="border border-white/4 border-t-0 px-6 pb-4 rounded-b-lg">
                <p className="text-gray-300 mb-4 pt-10 text-left">{c.desc}</p>

                <div className="flex justify-end items-center mb-3">
                  <div className="flex justify-center md:justify-end">
                    <button
                      className="btn-primary w-full transform rounded-full border-2 border-crimson-red  px-10 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-600 sm:w-auto"
                      onClick={() => {
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLScIy302pQrTyhldEFcscrCAECmjgj6GBma-e5SSIuKgBOiRJg/viewform",
                          "_blank"
                        );
                      }}
                    >
                      {c.btnText}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
