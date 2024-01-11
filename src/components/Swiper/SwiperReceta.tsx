"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Card, CardFooter, Image, Button, LinkIcon } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Receta } from "@/libs/interfaces/Receta";

interface SwiperRecetaProps {
  recetas: Receta[];
  tipo: "nuevas" | "recomendadas" | string;
}

const SwiperReceta = ({ recetas, tipo }: SwiperRecetaProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  let filteredRecetas: Receta[] = [];

  if (tipo === "nuevas") {
    filteredRecetas = recetas.sort((a, b) => b.id - a.id).slice(0, 4);
  } else if (tipo === "recomendadas") {
    filteredRecetas = recetas.filter((receta) => receta.likesCount > 7);
  } else if (tipo === "category") {
    filteredRecetas = recetas.filter((receta) => receta.category === tipo);
  }

  return (
    <div className="">
      <Suspense fallback={<p>Cargando...</p>}>
        {loading ? (
          <p className="text-center flex items-center justify-center text-black text-2xl sm:text-4xl font-bold h-[220px]">
            Cargando Recetas...
          </p>
        ) : (
          <Swiper
            modules={[Pagination]}
            className=""
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            style={{
              background: "transparent",
              borderRadius: "20px",
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {filteredRecetas.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <Card className="w-full h-[250px] sm:h-[300px] col-span-12 sm:col-span-5">
                  <Image
                    alt={item.title}
                    className="hover:scale-105 w-[100vw] h-[250px] sm:h-[300px]"
                    src={
                      item.photo.length > 0 ? item.photo[0] : "/not-found.png"
                    }
                  />
                  <CardFooter className="absolute bg-black/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-white text-md sm:text-lg font-bold">
                        {item.title.length > 20
                          ? `${item.title.slice(0, 20)}...`
                          : item.title}
                      </p>
                      {item.likesCount > 0 ? (
                        <div className="flex items-center gap-2">
                          <AiFillStar className="text-yellow-400" />
                          <p className="font-bold text-gray-200">
                            {item.likesCount} votos
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <AiFillStar className="text-yellow-400" />
                          <p className="font-bold text-gray-200">0 votos</p>
                        </div>
                      )}
                    </div>
                    <Link
                      className="text-sm bg-orange-100 border border-orange-500 p-2 rounded-xl hover:bg-orange-200 transition duration-300 ease-in-out"
                      href={`/receta/${item.id}`}
                    >
                      Ver receta
                    </Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Suspense>
    </div>
  );
};

export default SwiperReceta;
