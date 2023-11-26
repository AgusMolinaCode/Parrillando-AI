"use client";

import React from "react";

import Zoom from "react-medium-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import "swiper/css/pagination";
import "swiper/css";

import "./styles.css";

interface Props {
  receta: RecetaId;
}

const RecetaZoom = ({ receta }: Props) => {
  return (
    <div className="max-w-[450px]">
      <div>
        <Zoom zoomMargin={30}>
          <img
            src={receta.photo[0]}
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
          breakpoints={{
            // when window width is >= 315px
            315: {
              width: 315,
              slidesPerView: 2,
            },
          }}
        >
          {receta.photo.slice(1).map((photo, index) => (
            <SwiperSlide key={index} className="p-1">
              <Zoom zoomMargin={10}>
                <div className="">
                  <img
                    src={photo}
                    alt={`Picture ${index + 2} of the author`}
                    width={200}
                    height={200}
                    className="rounded-xl cursor-pointer h-[120px]"
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