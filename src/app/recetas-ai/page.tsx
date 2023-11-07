import React from "react";
import Form from "../components/sections/AI/Form";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-6 sm:pt-20 flex items-center justify-center mx-auto gap-2">
        <h1 className="text-center font-bold text-4xl sm:text-5xl">
          Genera tus recetas con{" "}
          <span className="bg-gradient-to-tr from-blue-300 via-blue-700 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
            IA
          </span>
        </h1>
      </div>
      <div className="flex mx-auto justify-center gap-2 items-center max-w-[500px] pt-10 p-2">
        <p className="text-center text-xl sm:text-2xl font-semibold">
          En esta sección podrás generar tus propias recetas con la ayuda de la{" "}
          {""}
          <span className="bg-gradient-to-tr from-blue-400 via-blue-800 to-gray-700 bg-clip-text text-transparent text-xl sm:text-2xl font-bold">
            inteligencia artificial.{" "}
          </span>
          Coloca los ingredientes que tienes en tu casa y la IA te generará una
          receta con esos ingredientes.
        </p>
      </div>
      <Form />
    </div>
  );
};

export default page;
