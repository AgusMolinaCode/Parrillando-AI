import React from "react";
import { currentUser } from "@clerk/nextjs";

const MiPerfilMenu = async () => {
  const user = await currentUser();

  return (
    <div>
      <div className="grid justify-center mx-auto">
        <h1 className="font-semibold sm:text-xl mt-2 text-gray-600 text-center">
          Panel de administracion de:{" "}
        </h1>
        <h2 className="font-bold text-xl sm:text-2xl text-center text-black">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="text-center px-2 pt-2 text-gray-600 sm:text-lg">
          En esta seccion podras ver tus recetas y restaurantes, crear
          nuevas,editarlas y eliminarlas.
        </p>
      </div>
    </div>
  );
};

export default MiPerfilMenu;
