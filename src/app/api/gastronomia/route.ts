import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const restaurants = await prisma.gastronomia.findMany();

    if (!restaurants || restaurants.length === 0) {
      return NextResponse.json(
        {
          message: "No se encontraron restaurantes",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(restaurants);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      photo,
      price,
      foodType,
      province,
      city,
      whatsapp,
      direction,
      zipCode,
      lng,
      lat,
      authorId,
    } = body;

    const gastronomia = await prisma.gastronomia.create({
      data: {
        title,
        description,
        photo,
        price,
        foodType,
        province,
        city,
        whatsapp,
        direction,
        zipCode,
        lng,
        lat,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });

    return NextResponse.json(gastronomia);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }
  }
}