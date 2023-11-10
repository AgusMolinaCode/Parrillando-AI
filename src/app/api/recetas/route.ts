import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo recetas");
}

export function POST() {
  return NextResponse.json("Creando recetas");
}
