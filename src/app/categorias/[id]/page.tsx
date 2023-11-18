"use client";

import CategoriaMenu from "@/app/components/sections/Categorias/CategoriaMenu/CategoriaMenu";
import { useRouter } from "next/navigation";
import { List } from "@/libs/interfaces/categorias";

interface Props {
  params: {
    id: string;
  };
}

const Categorias = ({ params }: Props) => {
  const router = useRouter();
  const categoria = List.find((item) => item.id === params.id);

  if (!categoria) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen">
      <CategoriaMenu nombreCategoria={categoria.title} />
    </div>
  );
};

export default Categorias;
