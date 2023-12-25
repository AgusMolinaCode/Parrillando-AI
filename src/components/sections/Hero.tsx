import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Lobster } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const lobster = Lobster({ weight: "400", preload: false });

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mt-10 px-2">
        <div className="">
          <Image
            src="/asado1.png"
            alt="Asado de tira"
            width={600}
            height={600}
            className=" lg:rounded-tl-2xl lg:rounded-bl-2xl rounded-2xl lg:rounded-none"
          />
        </div>
        <div className="max-w-[500px] sm:h-[600px] bg-gray-800/10  mt-4 lg:mt-0 lg:rounded-tr-2xl lg:rounded-br-2xl rounded-2xl lg:rounded-none  border-black border-t-1 border-r-1 border-b-1 border-l-1 lg:border-l-0  flex flex-col items-center justify-center content-center">
          <div className={lobster.className}>
            <h1 className="text-6xl sm:text-7xl pt-4 text-center text-black font-bold">
              Parrillando
            </h1>
          </div>
          <h2 className="text-3xl sm:text-4xl text-center text-gray-600 font-semibold m-2 sm:m-5">
            Recetas Argentinas con IA
          </h2>
          <p className="text-center p-2 sm:p-4 text-lg sm:text-xl font-semibold">
            Comparte el sabor de Argentina con nuestra comunidad. Descubre y
            comparte tus recetas tradicionales y secretos culinarios en un lugar
            donde la pasión por la cocina nos une. Tambien puedes descubrir
            nuevas recetas con nuestra Inteligencia Artificial. ¡Bienvenido a
            Parrillando!
          </p>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange-300 px-3 py-1 text-sm font-medium text-black hover:text-gray-800 duration-300 backdrop-blur-3xl">
              <Link href="/recetas-ai" className="flex gap-2">
                <div>
                  <p className="text-lg font-bold flex items-center gap-1">
                    Generar recetas con IA
                  </p>
                </div>
                <div className="">
                  <FaArrowRight className="text-2xl" />
                </div>
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <Button className="mx-auto border p-6 mb-4 justify-center border-black mt-8 bg-orange-300 flex">
  <Link
    href="/recetas-ai"
    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <div className="flex items-center gap-2">
      <div>
        <p className="text-lg font-bold flex items-center gap-1">
          Generar recetas con IA
        </p>
      </div>
      <div className="animate-pulse">
        <FaArrowRight className="text-2xl" />
      </div>
    </div>
  </Link>
</Button>; */
}
