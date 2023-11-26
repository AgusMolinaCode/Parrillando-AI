import React from "react";
import RecetaIngredientes from "@/app/components/sections/Receta/RecetaIngredientes";
import RecetaProcedimiento from "@/app/components/sections/Receta/RecetaProcedimiento";
import RecetaRecomendaciones from "@/app/components/sections/Receta/RecetaRecomendaciones";
import RecetaRelacionada from "@/app/components/sections/Receta/RecetaRelacionada";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import { Metadata } from "next";

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
