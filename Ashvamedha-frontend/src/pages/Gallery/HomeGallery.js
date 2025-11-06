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
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761657191/Scanned_20251024-1730-08_erk01p.jpg",
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761657225/_MG_6971_iuf0s6.jpg",
    ],
    [
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761657217/Screenshot_2025-10-28_175754_cn2cat.png",
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761659470/cg6zbltjoanvntv07h9w_jqenz4.jpg",
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761657213/Screenshot_2025-10-28_181602_rjkoph.png",
    ],
    [
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761657204/Screenshot_2025-10-28_175834_rolh2w.png",
      "https://res.cloudinary.com/diu6ioiov/image/upload/v1761659439/e14cba6woh7gbxi9ssho_nphaqd.jpg",
    ],
  ];

  return (
    <div className="glimpses text-white py-10 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="title text-center mt-5">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-crimson-red">GLIMP</span>
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
              className="absolute top-2 right-3 text-white text-3xl font-bold hover:text-crimson-red"
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
