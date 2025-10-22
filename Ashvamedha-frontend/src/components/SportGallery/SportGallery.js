import "./SportGallery.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../constants.js";
import { AiOutlineClose } from "react-icons/ai/index.esm.js";
import axios from "axios";
import Loader from "../Loader/Loader.js"
import { setLoading } from "../../redux/appSlice.js";

function SportGallery() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  const [galleryImg, setGalleryImg] = useState([]);
  async function fetchGalleryImages() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${server}/upload/`,
        {
          folderName: "galleryImg",
        }
      );
      setGalleryImg(response.data.result);
    } catch (err) {
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchGalleryImages();
  }, []);
  const galleryPhotos = [
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "People",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Sports",
    },
    {
      cname: "w-2",
      isHeading: true,
      text: "EVENTS",
    },
    {
      cname: "w-4 h-1",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Food",
    },
    {
      cname: "",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Travel1",
    },
    {
      cname: "",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Travel2",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Art",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car1",
    },
    {
      cname: "w-2 h-3",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "car3",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car4",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car5",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car6",
    },
    {
      cname: "w-1 h-1",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car7",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car8",
    },
    {
      cname: "w-2 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car10",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Car11",
    },
    {
      cname: "w-2 h-1",
      isHeading: true,
      text: "CELEBRATIONS",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "People",
    },
    {
      cname: "h-2.5 w-2",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Sport1",
    },
    {
      cname: "h-1 w-1",
      imgScr: "https://res.cloudinary.com/diu6ioiov/image/upload/v1761129307/qxgodwopz0prrfgkbovi_ezdw2b.jpg",
      imgText: "Sport1",
    }
    // {
    //   cname: "w-2",
    //   isHeading: true,
    //   text: "EVENTS",
    // },
    // {
    //   cname: "w-4 h-2",
    //   imgScr: galleryImg[19]?.image?.url,
    //   imgText: "Food1",
    // },
    // {
    //   cname: "w-2 h-3",
    //   imgScr: galleryImg[20]?.image?.url,
    //   imgText: "Food2",
    // },
    // {
    //   cname: "",
    //   imgScr: galleryImg[21]?.image?.url,
    //   imgText: "Travel",
    // },
    // {
    //   cname: "w-3 h-2",
    //   imgScr: galleryImg[22]?.image?.url,
    //   imgText: "Car13",
    // },
    // {
    //   cname: "w-3 h-2",
    //   imgScr: galleryImg[23]?.image?.url,
    //   imgText: "Car13",
    // },
    // {
    //   cname: "w-2 h-1",
    //   imgScr: galleryImg[24]?.image?.url,
    //   imgText: "Car14",
    // },
    // {
    //   cname: "w-2 h-1",
    //   imgScr: galleryImg[25]?.image?.url,
    //   imgText: "Car-13",
    // },
    // {
    //   cname: "w-2",
    //   imgScr: galleryImg[26]?.image?.url,
    //   imgText: "Car-18",
    // },
  ];

  return (
    <>
    { !isLoading ?  
      (<>
        <h1>
        <span className="h1">ASHVA</span>
        <span className="h2">MEDHA-</span>
        <span className="h1">2024</span>
      </h1>
      <div className="container-gallery">
        
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="Loading..." />
          <AiOutlineClose onClick={() => setModel(false)} className="icon" />
        </div>
        {galleryPhotos.map((item,idx) => {
          return item.isHeading ? (
            <div key ={idx} className={`gallery-container ${item.cname}`}>
              <div className="heading">{item.text}</div>
            </div>
          ) : (
            <div key = {idx} className={`gallery-container ${item.cname}`}>
              <div className="gallery-item" onClick={() => getImg(item.imgScr)}>
                <div className="image">
                  <img src={item.imgScr} alt={item.imgText} />
                </div>
                <div className="text">{item.imgText}</div>
              </div>
            </div>
          );
        })}
      </div>
      </>) :
    <Loader/>}
    </>
  );
}

export default SportGallery;
