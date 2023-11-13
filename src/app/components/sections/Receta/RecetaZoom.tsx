"use client";

import React from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import './styles.css'

const slides = [
  {
    id: 1,
    img: "/asado1.png",
  },
  {
    id: 2,
    img: "/guiso1.jpeg",
  },
  {
    id: 3,
    img: "/mila.jpeg",
  },
  {
    id: 4,
    img: "/pasta1.jpeg",
  },
];

const RecetaZoom = () => {
  return (
    <div className="">
      <div>
        <Zoom zoomMargin={30}>
          <img
            src="/asado1.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-xl cursor-pointer"
          />
        </Zoom>
        
      </div>
    </div>
  );
};

export default RecetaZoom;
