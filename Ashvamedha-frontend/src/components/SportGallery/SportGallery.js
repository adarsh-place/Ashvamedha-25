import React, { useState } from "react";
// The SCSS import is no longer needed
// import "./SportGallery.scss"; 
import { AiOutlineClose } from "react-icons/ai/index.esm.js";

// The gallery data, updated with Tailwind's grid classes
// (e.g., "w-3 h-2" becomes "col-span-3 row-span-2")
const galleryPhotos = [
  {
    cname: "col-span-3 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Nature",
  },
  {
    cname: "col-span-3 row-span-3",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "People",
  },
  {
    cname: "row-span-2", // Default col-span is 1
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Sports",
  },
  {
    cname: "col-span-2", // Default row-span is 1
    isHeading: true,
    text: "EVENTS",
  },
  {
    cname: "col-span-4 row-span-1",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Food",
  },
  {
    cname: "", // Defaults to col-span-1 row-span-1
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Travel1",
  },
  {
    cname: "",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Travel2",
  },
  {
    cname: "row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Art",
  },
  {
    cname: "row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car1",
  },
  {
    cname: "col-span-2 row-span-3",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "car3",
  },
  {
    cname: "col-span-1 row-span-3",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car4",
  },
  {
    cname: "col-span-3 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car5",
  },
  {
    cname: "col-span-3 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car6",
  },
  {
    cname: "col-span-1 row-span-1",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car7",
  },
  {
    cname: "col-span-1 row-span-3",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car8",
  },
  {
    cname: "col-span-2 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car10",
  },
  {
    cname: "col-span-3 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Car11",
  },
  {
    cname: "col-span-2 row-span-1",
    isHeading: true,
    text: "CELEBRATIONS",
  },
  {
    cname: "col-span-3 row-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Nature",
  },
  {
    cname: "col-span-3 row-span-3",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "People",
  },
  {
    cname: "row-span-2 col-span-2",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Sport1",
  },
  {
    cname: "row-span-1 col-span-1",
    imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
    imgText: "Sport1",
  },
];

function SportGallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
      {/* Added some basic styling to the h1 as it was in the JSX */}
      <h1 className="my-8 text-center text-5xl font-extrabold text-white">
        <span className="text-white">ASHVA</span>
        <span className="text-crimson-red">MEDHA-</span>
        <span className="text-white">2024</span>
      </h1>
      
      {/* This is the translation of .container-gallery
        - display: grid -> grid
        - grid-template-columns: repeat(6, 1fr) -> grid-cols-6
        - grid-auto-rows: 100px -> auto-rows-[100px] (arbitrary value)
        - grid-gap: 10px -> gap-2.5 (10px)
        - grid-auto-flow: dense -> grid-flow-dense
        - margin-bottom: 10px -> mb-2.5
        - @media (max-width: 500px) { grid-template-columns: ... } -> max-[500px]:grid-cols-1
      */}
      <div className="grid grid-cols-6 auto-rows-[100px] gap-2.5 grid-flow-dense mb-2.5 max-[500px]:grid-cols-1">
        
        {/* This is the translation of .model
          - Combined .model and .model.open logic using conditional classnames
          - transition properties are split for clarity
        */}
        <div
          className={`
            fixed top-0 left-0 z-[999] flex h-full w-full items-center justify-center
            overflow-hidden bg-black
            transition-[opacity,visibility] duration-400 ease
            transition-transform duration-500 ease-in-out
            ${model ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"}
          `}
        >
          {/* .model.open img */}
          <img
            src={tempImgSrc}
            alt="Loading..."
            className="mx-auto block h-auto w-auto max-h-full max-w-full box-border py-5"
          />
          {/* .model.open .icon */}
          <AiOutlineClose
            onClick={() => setModel(false)}
            className="fixed top-5 right-0 h-8 w-[5%] cursor-pointer bg-black/40 p-[5px] text-xl text-white"
          />
        </div>

        {galleryPhotos.map((item, idx) => {
          return item.isHeading ? (
            // .gallery-container (for heading)
            // Added responsive class `max-[500px]:col-span-1`
            <div key={idx} className={`${item.cname} max-[500px]:col-span-1`}>
              {/* .heading */}
              <div className="flex h-full items-center justify-center text-[46px] font-black text-white">
                {item.text}
              </div>
            </div>
          ) : (
            // .gallery-container (for image)
            // Added responsive class `max-[500px]:col-span-1`
            <div key={idx} className={`${item.cname} max-[500px]:col-span-1`}>
              {/* .gallery-item
                - Added `group` class to enable `group-hover:` variants
              */}
              <div
                className="group relative h-full w-full"
                onClick={() => getImg(item.imgScr)}
              >
                {/* .image */}
                <div className="h-full w-full overflow-hidden rounded-[5px]">
                  {/* .image img */}
                  <img
                    src={item.imgScr}
                    alt={item.imgText}
                    className="h-full w-full cursor-pointer object-cover object-center 
                               transition-transform duration-500 ease-in-out hover:opacity-90
                               group-hover:scale-120" // .gallery-item:hover .image img
                  />
                </div>
                {/* .text
                  - backdrop-filter -> backdrop-blur-[5px] backdrop-saturate-180
                  - Added `group-hover:opacity-100` (from your commented-out SCSS)
                */}
                {/* <div
                  className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 
                             pointer-events-none text-[25px] text-white opacity-0 
                             backdrop-blur-[5px] backdrop-saturate-180
                             transition-opacity duration-300 ease-in-out
                             group-hover:opacity-100"
                >
                  {item.imgText}
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SportGallery;