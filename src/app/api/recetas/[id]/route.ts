import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

interface Params {
  params: {
    id: string;
  };
}

interface Ingredient {
  description: any;
  name: string;
  quantity: string;
  id: number;
  recipeId: number;
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

// haremos similar a GET pero con PUT

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
        // ingredients: {
        //   upsert: ingredients.map((ingredient: Ingredient) => ({
        //     where: { id: ingredient.id },
        //     create: {
        //       name: ingredient.name,
        //       quantity: ingredient.quantity,
        //       recipeId: Number(params.id),
        //     },
        //     update: {
        //       name: ingredient.name,
        //       quantity: ingredient.quantity,
        //     },
        //   })),
        // },
        // steps: {
        //   upsert: steps.map((step: Step) => ({
        //     where: { id: step.id },
        //     create: {
        //       description: step.description,
        //       recipeId: Number(params.id),
        //     },
        //     update: {
        //       description: step.description,
        //     },
        //   })),
        // },
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
