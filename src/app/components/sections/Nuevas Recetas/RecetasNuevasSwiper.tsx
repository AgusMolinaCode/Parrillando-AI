"use client";
import React, { useState, useEffect } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

interface Props {
  img: string;
  title: string;
  subtitle: string;
  stars: number;
}

const Data = [
  {
    img: "/asado1.png",
    title: "Asado de tira con salsa chimichurri",
    subtitle:
      "Una deliciosa pieza de asado de tira con nuestra famosa salsa chimichurri casera.",
    stars: 4,
  },
  {
    img: "/asado1.png",
    title: "Vacio a la parrilla",
    subtitle:
      "El vacío asado a la parrilla con ese sabor inconfundible que tanto te gusta.",
    stars: 4,
  },
  {
    img: "/asado1.png",
    title: "Costillar de cerdo a la brasa",
    subtitle:
      "Costillar de cerdo marinado y asado a la brasa para un sabor único.",
    stars: 4,
  },
  {
    img: "/asado1.png",
    title: "Churrasco argentino",
    subtitle:
      "Una porción generosa de churrasco argentino, perfectamente cocido a la parrilla.",
    stars: 3,
  },
  {
    img: "/asado1.png",
    title: "Tira de asado con chimichurri",
    subtitle:
      "La tira de asado acompañada de una abundante salsa chimichurri y guarniciones.",
    stars: 3,
  },
  {
    img: "/asado1.png",
    title: "Parrillada mixta",
    subtitle:
      "Disfruta de nuestra parrillada mixta con una variedad de cortes y sabores.",
    stars: 5,
  },
];

const RecetasNuevasSwiper = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    setData(Data);
    setLoading(false);
  }, []);

  return (
    <div className="">
      {loading ? (
        <p className="text-center flex items-center justify-center text-black text-4xl font-bold h-[220px]">
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
            920: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <Card className="w-full h-[320px] col-span-12 sm:col-span-5">
                <Image
                  alt={item.title}
                  className="z-0 w-full h-full hover:scale-105"
                  src={item.img}
                />
                <CardFooter className="absolute bg-black/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-white text-lg font-bold">{item.title}</p>
                    <div className="flex items-center">
                      {[...Array(item.stars)].map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Button
                    className="text-sm bg-orange-100 border border-orange-500"
                    radius="full"
                    size="md"
                  >
                    Ver receta
                  </Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default RecetasNuevasSwiper;
