import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { Gastronomia } from "@/libs/interfaces/Gastronomia";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const gastronomia = await prisma.gastronomia.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!gastronomia) {
      return NextResponse.json(
        {
          message: "No se encontró la receta",
        },
        { status: 404 }
      );
    }
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

export async function PUT(request: Request, { params }: Params) {
  try {
    const {
      id,
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
    } = await request.json();

    const actualizarGastronomia = await prisma.gastronomia.update({
      where: {
        id: Number(params.id),
      },
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
        authorId,
      },
    });

    return NextResponse.json(actualizarGastronomia);
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

export async function DELETE(request: Request, { params }: Params) {
    try {
        const deleteGastronomia = await prisma.gastronomia.delete({
            where: {
                id: Number(params.id),
            },
        });

        if (deleteGastronomia) {
            return NextResponse.json(
                {
                    message: "Restaurant eliminado correctamente",
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    message: "No se pudo eliminar el restaurant",
                },
                { status: 500 }
            );
        }
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
