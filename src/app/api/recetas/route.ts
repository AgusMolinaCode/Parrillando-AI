import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("Obteniendo receta")
}

export function POST(){
    return NextResponse.json("Creando receta");
}