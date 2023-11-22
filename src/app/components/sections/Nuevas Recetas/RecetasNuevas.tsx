import React from "react";
import { Lobster } from "next/font/google";
import SwiperReceta from "../../Swiper/SwiperReceta";
import { Receta } from "@/libs/interfaces/Receta";

const lobster = Lobster({ weight: "400", preload: false });


async function getRecetas(): Promise<Receta[]> {
  const response = await fetch("http://localhost:3000/api/recetas");
  const recetas = await response.json();
  return recetas;
}

const RecetasNuevas = async () => {
  const recetas = await getRecetas();

  return (
    <div className="">
      <div className="mt-10 sm:mt-16 text-center md:text-start sm:px-24">
        <div className={lobster.className}>
          <h1 className="text-4xl sm:text-5xl pt-2 text-black font-bold">
            Recetas Nuevas
          </h1>
        </div>
        <p>
          <span className="text-lg sm:text-xl text-gray-400 font-semibold ">
            Descubre las últimas recetas publicadas
          </span>
        </p>
      </div>
      <div className="md:px-8 2xl:px-60 pt-8 p-2">
        <SwiperReceta recetas={recetas} tipo="nuevas" />
      </div>
    </div>
  );
};

export default RecetasNuevas;