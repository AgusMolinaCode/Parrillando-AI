import React from "react";
import { currentUser } from "@clerk/nextjs";

const MiPerfilMenu = async () => {

    const user = await currentUser();

  return (
    <div>
      <div className="bg-blue-400 hidden md:block w-[200px] h-screen m-2 border-1 border-black rounded-xl shadow-2xl">
        <h1 className="underline font-bold text-center mx-auto text-2xl mt-2">{user?.firstName} {user?.lastName}</h1>
        <div className="flex flex-col">
          <h2>Mis Recetas</h2>
        </div>
      </div>
      <div className="bg-blue-400 md:hidden w-screen h-[80px] absolute bottom-0"></div>
    </div>
  );
};

export default MiPerfilMenu;
