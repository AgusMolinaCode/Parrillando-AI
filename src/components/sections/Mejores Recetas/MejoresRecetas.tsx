import React, { Suspense } from "react";
import { Lobster } from "next/font/google";
import SwiperReceta from "../../Swiper/SwiperReceta";
import { Receta } from "@/libs/interfaces/Receta";

const lobster = Lobster({ weight: "400", preload: false });

async function getRecetas(): Promise<Receta[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/recetas`);
  const recetas = await response.json();
  return recetas;
}

const MejoresRecetas = async () => {
  const recetas = await getRecetas();

  return (
    <div>
      <div className="mt-10 sm:mt-16 text-center md:text-start sm:px-24">
        <div className={lobster.className}>
          <h1 className="text-4xl sm:text-5xl pt-2 text-black font-bold">
            Recetas Destacadas
          </h1>
        </div>
        <p>
          <span className="text-lg sm:text-xl text-gray-400 font-semibold ">
            Descubre las mejores recetas de la comunidad
          </span>
        </p>
      </div>
      <div className="md:px-20 2xl:px-60 pt-8 p-2 ">
        <SwiperReceta recetas={recetas} tipo="recomendadas" />
      </div>
    </div>
  );
};

export default MejoresRecetas;
