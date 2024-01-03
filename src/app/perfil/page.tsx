import MiPerfilMenu from "@/components/sections/MiPerfil/MiPerfilMenu";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row">
      <MiPerfilMenu />
      <div className="flex-grow">
        {/* Contenido principal */}
      </div>
    </div>
  );
};

export default Page;