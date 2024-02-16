'use client'
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [recetasRelacionadas, setRecetasRelacionadas] = useState<RecetaId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerRecetasRelacionadas = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}recetas`);
        const recetas = await response.json();
        const recetasFiltradas = recetas.filter(
          (item: { category: string; id: number; }) => item.category === receta.category && item.id !== receta.id
        );
        setRecetasRelacionadas(recetasFiltradas);
      } catch (error) {
        console.error("Error al obtener las recetas relacionadas:", error);
      } finally {
        setLoading(false);
      }
    };

    if (receta.category) {
      obtenerRecetasRelacionadas();
    }
  }, [receta.category, receta.id]);

  if (!receta.category || recetasRelacionadas.length === 0) {
    return null;
  }

  return (
    <div className="px-2 pt-5 sm:pt-10">
      <h1 className="uppercase font-bold text-center text-2xl sm:text-4xl">
        Recetas Relacionadas
      </h1>
      {loading ? (
        <p className="text-center text-black text-2xl sm:text-4xl font-bold h-[250px] sm:h-[300px] flex justify-center items-center">
          Cargando recetas...
        </p>
      ) : (
        <div className="lg:px-24 xl:px-40 py-10">
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
            {recetasRelacionadas.map((item, index) => (
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
        </div>
      )}
    </div>
  );
};

export default RecetaRelacionada;