import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  const columns = [
    [
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626960/ashvamedha/ashvamedha2023/rvuyd0jdnuyi8p9ybsj3.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626960/ashvamedha/ashvamedha2023/qxgodwopz0prrfgkbovi.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626960/ashvamedha/ashvamedha2023/v2ghczhivwgsxts0inzg.jpg",
    ],
    [
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626960/ashvamedha/ashvamedha2023/isasc0jcybb01tbf8bya.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626958/ashvamedha/ashvamedha2023/cg6zbltjoanvntv07h9w.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728629921/ashvamedha/ashvamedha2023/bvhyx0cakqhzx9jflwwb.jpg",
    ],
    [
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626959/ashvamedha/ashvamedha2023/e14cba6woh7gbxi9ssho.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626961/ashvamedha/ashvamedha2023/xmpndasxnoiyo1ethn09.jpg",
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728626958/ashvamedha/ashvamedha2023/arhy2bwl1t47zejc0rz6.jpg",
    ],
  ];

  return (
    <div className="glimpses text-white py-10 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="title text-center mt-5" data-aos="fade-up">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-[#FF6D02]">GLIMP</span>
          <span className="text-white">SES</span>
        </h1>
      </div>

      {/* Gallery */}
      <div className="images-gallery w-[80%] sm:w-[90%] flex flex-wrap justify-center mx-auto mt-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="column w-1/3 px-1 flex flex-col">
            {column.map((img, imgIndex) => (
              <div
                key={imgIndex}
                data-aos="fade-up"
                data-aos-delay={imgIndex * 100}
                className="my-1 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${imgIndex}`}
                  className="w-full object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-transparent p-3 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="zoomed"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg transform scale-110 transition-transform duration-500"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-white text-3xl font-bold hover:text-[#FF6D02]"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeGallery;
