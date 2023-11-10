export type Categoria = {
  id: string;
  title: string;
  img: string;
};

export const List: Categoria[] = [
  {
    id: "asado-parrilla",
    title: "Asado y Parrilla",
    img: "/asado1.png",
  },
  {
    id: "pastas",
    title: "Pastas",
    img: "/pasta1.jpeg",
  },
  {
    id: "milanesas-hamburguesas",
    title: "Milanesas y Hamburguesas",
    img: "/mila.jpeg",
  },
  {
    id: "pizzas-empanadas",
    title: "Pizzas y Empanadas",
    img: "/pizza.webp",
  },
  {
    id: "guisos-estofados",
    title: "Guisos y Estofados",
    img: "/guiso1.jpeg",
  },
  {
    id: "otras-recetas",
    title: "Otras Recetas",
    img: "/otro.jpeg",
  },
];