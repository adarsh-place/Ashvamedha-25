import "./Gallery.scss";

import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import React from "react";
import SportGallery from "../../components/SportGallery/SportGallery.js";

function Gallery() {
  return (
    <div className="gallery mt-16">
      <Navbar />
      
      <SportGallery />
      <Footer />
    </div>
  );
}

export default Gallery;
