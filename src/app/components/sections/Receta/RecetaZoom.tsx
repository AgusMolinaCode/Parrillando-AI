"use client";

import React from "react";

import Zoom from "react-medium-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import "./styles.css";

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
  {
    id: 5,
    img: "/pasta1.jpeg",
  },
  {
    id: 6,
    img: "/pasta1.jpeg",
  },
];

const RecetaZoom = () => {
  return (
    <div className="max-w-[450px]">
      <div>
        <Zoom zoomMargin={30}>
          <img
            src="/asado1.png"
            alt="Picture of the author"
            width={450}
            className="rounded-xl cursor-pointer w-full sm:w-[450px] p-1"
          />
        </Zoom>
      </div>
      <div className=" mt-5">
        <Swiper
          modules={[Pagination]}
          className="w-[318px] xs:w-[450px]"
          slidesPerView={3}
          spaceBetween={5}
          grabCursor={true}
          style={{
            background: "transparent",
            borderRadius: "20px",
          }}
          breakpoints={
            {
              // when window width is >= 315px
              315: {
                width: 315,
                slidesPerView: 2,
              },
            }
          }
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="">
              <Zoom zoomMargin={10}>
                <div className="">
                  <img
                    src={slide.img}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="rounded-xl cursor-pointer h-[170px] sm:h-[120px]"
                  />
                </div>
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecetaZoom;
