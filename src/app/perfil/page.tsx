import MiPerfilMenu from "@/components/sections/MiPerfil/MiPerfilMenu";
import MiPerfilHome from "@/components/sections/MiPerfil/MiPerfilHome";
import React from "react";


const Page = () => {
  return (
    <div className="min-h-screen">
      <MiPerfilMenu />
      <div>
        <MiPerfilHome />
      </div>
    </div>
  );
};

export default Page;