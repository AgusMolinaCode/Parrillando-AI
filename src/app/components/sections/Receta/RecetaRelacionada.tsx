'use client';

import React, { useState, useEffect } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { RecetaId } from "@/libs/interfaces/RecetaId";

interface Props {
  receta: RecetaId;
}

const RecetaRelacionada = ({ receta }: Props) => {
  const [recetasRelacionadas, setRecetasRelacionadas] = useState<RecetaId[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const obtenerRecetasRelacionadas = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/recetas`);
        const recetas = await response.json();
        setRecetasRelacionadas(recetas);
      } catch (error) {
        console.error("Error al obtener las recetas relacionadas:", error);
      } finally {
        setLoading(false);
      }
    };

    if(receta.category) {
      obtenerRecetasRelacionadas();
    }
  }, [receta.category]);

  return (
    <div className="px-2 pt-8 sm:pt-20">
      <h1 className="uppercase font-bold text-center text-2xl sm:text-4xl">
        Recetas Relacionadas
      </h1>
      {loading ? (
        <p className="text-center text-black text-2xl sm:text-4xl font-bold">
          Cargando...
        </p>
      ) : (
        <div className="lg:px-24 xl:px-40 py-10">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
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
            {recetasRelacionadas.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="w-full h-[250px] sm:h-[300px]">
                  <Image
                    alt={item.title}
                    src={item.photo.length > 0 ? item.photo[0] : "/not-found.png"}
                  />
                  <CardFooter className="absolute bg-black/80 bottom-0">
                    <div>
                      <p className="text-white text-md sm:text-lg font-bold">
                        {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <AiFillStar className="text-yellow-400" />
                        <p className="font-bold text-gray-200">
                          {item.likesCount} votos
                        </p>
                      </div>
                    </div>
                    <Button className="text-sm bg-orange-100 border border-orange-500" radius="full" size="md">
                      <Link href={`/receta/${item.id}`}>Ver receta</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default RecetaRelacionada;
