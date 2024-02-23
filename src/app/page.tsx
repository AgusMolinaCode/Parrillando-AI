import Hero from "../components/sections/Hero";
import MejoresRecetas from "../components/sections/Mejores Recetas/MejoresRecetas";
import Categorias from "../components/sections/Categorias/Categorias";
import RecetasNuevas from "../components/sections/Nuevas Recetas/RecetasNuevas";
import GastronomiaMain from "@/components/sections/Gastronomia/GastronomiaMain";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <MejoresRecetas />
      <RecetasNuevas />
      <Categorias />
      <GastronomiaMain />
    </div>
  );
}
