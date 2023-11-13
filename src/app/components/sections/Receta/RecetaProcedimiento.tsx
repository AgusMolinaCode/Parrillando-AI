import React from "react";

const RecetaProcedimiento = () => {
  return (
    <div className="max-w-[600px] md:border-r-1 md:pr-3">
      <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
        PROCEDIMIENTO:
      </h1>
      {/* //TODO agregar pasos dinamicos en una lista paso 1, paso2 ,etc... */}
      <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 1:</h2>
      <div className="text-justify">
        <p>
          En un bol, colocar la carne picada, la cebolla picada, el huevo, el
          perejil, el ajo, la mostaza, la salsa inglesa, sal y pimienta.
        </p>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 2:</h2>
      <div className="text-justify">
        <p>
          Mezclar bien todos los ingredientes hasta que queden bien integrados.
        </p>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 3:</h2>
      <div className="text-justify">
        <p>
          Formar las hamburguesas con las manos y llevar a la heladera por 30
          minutos.
        </p>
      </div>
      <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 4:</h2>
      <div className="text-justify">
        <p>
          Cocinar las hamburguesas en una sartén con un poco de aceite de oliva.
        </p>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 5:</h2>
      <div className="text-justify">
        <p>
          Servir en panes de hamburguesa con lechuga, tomate, cebolla y
          pepinillos.
        </p>
      </div>
    </div>
  );
};

export default RecetaProcedimiento;
