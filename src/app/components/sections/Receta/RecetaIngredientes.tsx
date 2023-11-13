import React from "react";
import RecetaSwiper from "./RecetaZoom";
import RecetaZoom from "./RecetaZoom";

const RecetaIngredientes = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto gap-5">
      <div>
        <p className="text-semibold text-indigo-500 text-md underline">
          Milanesas y Hamburguesas
        </p>

        <h1 className="text-4xl sm:text-5xl font-thin">Hamburguesa de Carne</h1>
        <h2 className="text-lg sm:text-xl font-semibold pt-8 underline">
          INGREDIENTES:
        </h2>
        {/* //TODO agregar ingredientes dinamicos */}
        <div>
          <ul>
            <li>- 1 kg de carne picada</li>
            <li>- 1 cebolla</li>
            <li>- 1 huevo</li>
            <li>- 1 cucharada de perejil picado</li>
            <li>- 1 cucharada de ajo picado</li>
            <li>- 1 cucharada de mostaza</li>
            <li>- 1 cucharada de salsa inglesa</li>
            <li>- Sal y pimienta</li>
          </ul>
        </div>
      </div>

      <RecetaZoom />
    </div>
  );
};

export default RecetaIngredientes;
