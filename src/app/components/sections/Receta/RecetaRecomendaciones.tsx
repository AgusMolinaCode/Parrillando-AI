import { RecetaId } from "@/libs/interfaces/RecetaId";
import React from "react";

interface Props {
  receta: RecetaId;
}

const RecetaRecomendaciones = ({receta}: Props) => {
  return (
    <div className="max-w-[500px]">
      <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
        RECOMENDACIONES:
      </h1>
      

      <div className="text-justify">
        <p className="text-gray-600">
          {receta.description}
        </p>
      </div>

      
    </div>
  );
};

export default RecetaRecomendaciones;
