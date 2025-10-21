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
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "People",
    },
    {
      cname: "h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Sports",
    },
    {
      cname: "w-2",
      isHeading: true,
      text: "EVENTS",
    },
    {
      cname: "w-4 h-1",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Food",
    },
    {
      cname: "",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Travel1",
    },
    {
      cname: "",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Travel2",
    },
    {
      cname: "h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Art",
    },
    {
      cname: "h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car1",
    },
    {
      cname: "w-2 h-3",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "car3",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car4",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car5",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car6",
    },
    {
      cname: "w-1 h-1",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car7",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car8",
    },
    {
      cname: "w-2 h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car10",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Car11",
    },
    {
      cname: "w-2 h-1",
      isHeading: true,
      text: "CELEBRATIONS",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "People",
    },
    {
      cname: "h-2.5 w-2",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
      imgText: "Sport1",
    },
    {
      cname: "h-1 w-1",
      imgScr: "https://imgs.search.brave.com/iDs8WHXgMB04i-GEugOk6TidNZENOlJe6sSCPDTvm80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG9ydHJhaXQtb2Yt/c29tZS1yYW5kb20t/Z2lybC1mcm9tLXBp/bnRlcmVzdC12MC1w/dDcxc2tjdGJ3d2Mx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9MTVjODQ2OTU5/YmU2MzExZWY1ZThl/YTE1NjYzOTA4YTAw/MjE2ODVmZQ",
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
      <div class="container-gallery">
        
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="Loading..." />
          <AiOutlineClose onClick={() => setModel(false)} className="icon" />
        </div>
        {galleryPhotos.map((item) => {
          return item.isHeading ? (
            <div className={`gallery-container ${item.cname}`}>
              <div className="heading">{item.text}</div>
            </div>
          ) : (
            <div className={`gallery-container ${item.cname}`}>
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
