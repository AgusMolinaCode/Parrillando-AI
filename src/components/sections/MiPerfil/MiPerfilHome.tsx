import React from "react";
import MiPerfilSelect from "./MiPerfilSelect";
import MisRecetasCard from "./MisRecetasCard";
import MisRestaurantesCard from "./MisRestaurantesCard";

const MiPerfilHome = () => {
  return (
    <div className="grid justify-center mx-auto pt-10">
      <MiPerfilSelect titulo="Mis Recetas" textoBotonCrear="Crear Receta" />
      <div className="pt-8 pb-8 px-2">
        <MisRecetasCard />
      </div>
      <MiPerfilSelect
        titulo="Mis Restaurantes"
        textoBotonCrear="Crear Restaurant"
      />
      <div className="pt-8 pb-8 px-2">
        <MisRestaurantesCard />
      </div>
    </div>
  );
};

export default MiPerfilHome;
