interface Props {
  params: {
    id: string;
  };
}

const Categorias = ({ params }: Props) => {
  return (
    <div>
      <h1>ID de la categoría seleccionada: {params.id}</h1>
      {/* Aquí puedes mostrar las recetas de la categoría seleccionada */}
    </div>
  );
};

export default Categorias;
