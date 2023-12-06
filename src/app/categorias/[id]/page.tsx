import CategoriaMenu from "@/components/sections/Categorias/CategoriaMenu/CategoriaMenu";
import { List } from "@/libs/interfaces/categorias";
import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoria = List.find((item) => item.id === params.id);

  if (!categoria) {
    return {
      title: "Categoria no encontrada",
      description: "",
      keywords: [],
    };
  }

  return {
    title: `${categoria.title}`,
    description: `Receta de ${categoria.title}`,
    keywords: [categoria.title, "receta", "comida", "cocina"],
  };
}

const Categorias = ({ params }: Props) => {
  const categoria = List.find((item) => item.id === params.id);

  if (!categoria) {
    return (
      <div className="text-2xl sm:text-4xl text-center text-black min-h-screen flex flex-col justify-center items-center">
        Categoria no encontrada
        <Link href="/" className="text-orange-100 bg-black flex items-center rounded-xl mt-10 hover:shadow-2xl duration-500">
          <Button className="bg-black text-white text-lg">
            Volver al inicio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CategoriaMenu nombreCategoria={categoria.title} />
    </div>
  );
};

export default Categorias;
