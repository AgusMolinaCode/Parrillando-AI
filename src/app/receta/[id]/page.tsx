import React from "react";
import RecetaArrow from "@/app/components/sections/Receta/RecetaArrow";
import RecetaIngredientes from "@/app/components/sections/Receta/RecetaIngredientes";
import RecetaProcedimiento from "@/app/components/sections/Receta/RecetaProcedimiento";
import RecetaRecomendaciones from "@/app/components/sections/Receta/RecetaRecomendaciones";

const page = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-red-100 via-orange-200 to-yellow-100 p-8">
        <h1 className="text-center text-3xl sm:text-6xl font-bold">
          Hamburguesa de Carne
        </h1>{" "}
        {/* //TODO agregar nombre dinamico */}
      </div>

      <RecetaArrow />

      <div className="px-2 mt-5 sm:mt-10 gap-3 ">
        <div className="mt-5">
          <RecetaIngredientes />
        </div>

        
      </div>
      <div className="px-2 pt-8 sm:pt-20 grid grid-flow-row md:grid-flow-col mx-auto justify-center gap-4 pb-20">
        <RecetaProcedimiento />
        <RecetaRecomendaciones />
      </div>
    </div>
  );
};

export default page;
