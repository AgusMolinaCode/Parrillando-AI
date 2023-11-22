import CategoriaMenu from "@/app/components/sections/Categorias/CategoriaMenu/CategoriaMenu";
import { List } from "@/libs/interfaces/categorias";

interface Props {
  params: {
    id: string;
  };
}

export const metadata = {
  title: "Categorias",
  description: "Categorias de recetas de cocina",
};

const Categorias = ({ params }: Props) => {
  const categoria = List.find((item) => item.id === params.id);

  if (!categoria) {
    return <div className="text-3xl text-center text-black">Categoria no encontrada</div>;
  }

  return (
    <div className="min-h-screen">
      <CategoriaMenu nombreCategoria={categoria.title} />
    </div>
  );
};

export default Categorias;
