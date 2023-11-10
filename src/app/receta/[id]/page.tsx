import React from "react";
import Image from "next/image";
import Link from "next/link";
import RecetaArrow from '@/app/components/sections/Receta/RecetaArrow'

const page = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 via-orange-200 to-yellow-100 p-8">
        <h1 className="text-center text-3xl sm:text-6xl font-bold">
          Hamburguesa de Carne
        </h1>{" "}
        {/* //TODO agregar nombre dinamico */}
      </div>

      <RecetaArrow />

      <div className="flex flex-wrap px-2 justify-center mx-auto mt-5 sm:mt-10 gap-3">
        <div>
          <Image
            src="/mila.jpeg"
            alt="Hamburguesa"
            width={600}
            height={600}
            className="rounded-2xl"
          />{" "}
          {/* //TODO agregar imagen dinamica */}
        </div>

        <div>
          <p className="text-semibold text-indigo-500 text-md underline">
            Milanesas y Hamburguesas
          </p>
          {/* //TODO agregar categoria dinamica */}
          <h1 className="text-4xl sm:text-5xl font-thin">
            Hamburguesa de Carne
          </h1>{" "}
          {/* //TODO agregar nombre dinamico */}
          <div className="mt-5">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold py-3 underline">
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
          </div>
        </div>
      </div>
      <div className="px-2 pt-20 grid grid-flow-row md:grid-flow-col mx-auto justify-center gap-4 pb-20">
        <div className='max-w-[600px] md:border-r-1 md:pr-3'>
          <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
            PROCEDIMIENTO:
          </h1>
          {/* //TODO agregar pasos dinamicos en una lista paso 1, paso2 ,etc... */}
          <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 1:</h2>
          <div className="text-justify">
            <p>
              En un bol, colocar la carne picada, la cebolla picada, el huevo,
              el perejil, el ajo, la mostaza, la salsa inglesa, sal y pimienta.
            </p>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 2:</h2>
          <div className="text-justify">
            <p>
              Mezclar bien todos los ingredientes hasta que queden bien
              integrados.
            </p>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 3:</h2>
          <div className="text-justify">
            <p>
              Formar las hamburguesas con las manos y llevar a la heladera por
              30 minutos.
            </p>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold py-3">PASO 4:</h2>
          <div className="text-justify">
            <p>
              Cocinar las hamburguesas en una sartén con un poco de aceite de
              oliva.
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

        <div className="max-w-[800px]">
          <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
            RECOMENDACIONES:
          </h1>
          {/* //TODO agregar recomendaciones dinamicas en un texto si la recomendacion es larga, poner un boton de "ver mas" y se abre un modal */}

          <div className="text-justify">
            <p>
              Para que las hamburguesas queden bien jugosas, es importante no
              amasar demasiado la carne.In est voluptate do cillum ut sunt anim ea ex anim incididunt. Incididunt ut adipisicing tempor nisi sit sit pariatur velit officia ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
