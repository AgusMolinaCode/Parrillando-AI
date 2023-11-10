import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo receta por id");
}

export function PUT() {
  return NextResponse.json("Actualizando receta por id");
}

export function DELETE() {
  return NextResponse.json("Eliminando receta por id");
}
