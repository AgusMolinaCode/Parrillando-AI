import MiPerfilMenu from "@/components/sections/MiPerfil/MiPerfilMenu";
import MisRecetasView from "@/components/sections/MiPerfil/MisRecetasView";
import React from "react";


const Page = () => {
  return (
    <div className="min-h-screen">
      <MiPerfilMenu />
      <div>
        <MisRecetasView />
      </div>
    </div>
  );
};

export default Page;