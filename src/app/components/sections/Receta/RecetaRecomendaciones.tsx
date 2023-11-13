import React from "react";

const RecetaRecomendaciones = () => {
  return (
    <div className="max-w-[500px]">
      <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
        RECOMENDACIONES:
      </h1>
      {/* //TODO agregar recomendaciones dinamicas en un texto si la recomendacion es larga, poner un boton de "ver mas" y se abre un modal */}

      <div className="text-justify">
        <p>
          Para que las hamburguesas queden bien jugosas, es importante no amasar
          demasiado la carne.In est voluptate do cillum ut sunt anim ea ex anim
          incididunt. Incididunt ut adipisicing tempor nisi sit sit pariatur
          velit officia ullamco.
        </p>
      </div>

      
    </div>
  );
};

export default RecetaRecomendaciones;
