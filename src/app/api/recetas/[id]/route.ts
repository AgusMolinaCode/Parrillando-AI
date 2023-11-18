import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { Ingredient } from "@/libs/interfaces/Ingredient";
import { Step } from "@/libs/interfaces/Steps";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const recipe = await prisma.recipe.findFirst({
      where: {
        id: Number(params.id),
      },
      include: {
        ingredients: true,
        steps: true,
      },
    });

    if (!recipe) {
      return NextResponse.json(
        {
          message: "No se encontró la receta",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(recipe);
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
      title,
      category,
      description,
      photo,
      likesCount,
      ingredients,
      steps,
    } = await request.json();

    const actualizarReceta = await prisma.recipe.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        category,
        description,
        photo: {
          set: photo,
        },
        likesCount,
        ingredients: {
          upsert: ingredients.map((ingredient: Ingredient) => ({
            where: { id: ingredient.id },
            create: {
              name: ingredient.name,
              quantity: ingredient.quantity,
            },
            update: {
              name: ingredient.name,
              quantity: ingredient.quantity,
            },
          })),
        },
        steps: {
          upsert: steps.map((step: Step) => ({
            where: { id: step.id },
            create: {
              description: step.description,
            },
            update: {
              description: step.description,
            },
          })),
        },
      },
      include: {
        ingredients: true,
        steps: true,
      },
    });

    return NextResponse.json(actualizarReceta);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "No se encontró la receta",
          },
          { status: 404 }
        );
      }
    }

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
    const id = Number(params.id);

    // Eliminar ingredientes asociados
    await prisma.ingredient.deleteMany({
      where: {
        recipeId: id,
      },
    });

    // Eliminar pasos asociados
    await prisma.step.deleteMany({
      where: {
        recipeId: id,
      },
    });

    // Eliminar la receta
    await prisma.recipe.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Receta y elementos asociados eliminados con éxito",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: 'No se encontro la receta',
        },
        { status: 500 }
      );
    }
  }
}
