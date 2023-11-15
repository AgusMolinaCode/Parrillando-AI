import React from "react";
import SwiperReceta from "../../Swiper/SwiperReceta";

const RecetaRelacionada = () => {
  return (
    <div className="px-2 pt-8 sm:pt-20">
      <h1 className="uppercase font-bold text-center text-2xl sm:text-4xl">
        Recetas Relacionadas
      </h1>
      <div className="lg:px-24 xl:px-40 py-10">
        <SwiperReceta />
      </div>
    </div>
  );
};

export default RecetaRelacionada;
