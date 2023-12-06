import React from "react";
import RecetaIngredientes from "@/components/sections/Receta/RecetaIngredientes";
import RecetaProcedimiento from "@/components/sections/Receta/RecetaProcedimiento";
import RecetaRecomendaciones from "@/components/sections/Receta/RecetaRecomendaciones";
import RecetaRelacionada from "@/components/sections/Receta/RecetaRelacionada";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/react";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = await getReceta(params.id);

  return {
    title: ` ${title}`,
    description: `Receta de ${title}`,
    keywords: [`${title}`, "receta", "comida", "cocina"],
  };
}
const getReceta = async (id: string): Promise<RecetaId> => {
  const response = await fetch(`http://localhost:3000/api/recetas/${id}`);
  const receta = await response.json();
  return receta;
};

const page = async ({ params }: Props) => {
  const receta = await getReceta(params.id);

  if (!receta.id) {
    return (
      <div className="text-2xl sm:text-4xl text-center text-black min-h-screen flex flex-col justify-center items-center">
        Receta no encontrada
        <Link href="/" className="text-orange-100 bg-black flex items-center rounded-xl mt-10 hover:shadow-2xl duration-500">
          <Button className="bg-black text-white text-lg">
            Volver al inicio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-gradient-to-r from-red-100 via-orange-200 to-yellow-100 p-8">
        <h1 className="text-center text-3xl sm:text-6xl font-bold">
          {receta.title}
        </h1>
      </div>

      <div className="px-2 mt-5 sm:mt-10 gap-3 ">
        <div className="mt-5">
          <RecetaIngredientes receta={receta} />
        </div>
      </div>
      <div className="px-2 pt-8 sm:pt-20 grid grid-flow-row md:grid-flow-col mx-auto justify-center gap-4 pb-8 sm:pb-20">
        <RecetaProcedimiento receta={receta} />
        <RecetaRecomendaciones receta={receta} />
      </div>
      <div>
        <RecetaRelacionada receta={receta} />
      </div>
    </div>
  );
};

export default page;
