import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany();

    if (!recipes) {
      return NextResponse.json(
        {
          message: "No se encontraron recetas",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(recipes);
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
      category,
      description,
      photo,
      authorId,
      likesCount,
      ingredients,
      steps,
    } = body;

    const recipe = await prisma.recipe.create({
      data: {
        title,
        category,
        description,
        photo: {
          set: photo,
        },
        author: {
          connect: {
            id: authorId,
          },
        },
        likesCount,
        ingredients: {
          create: ingredients,
        },
        steps: {
          create: steps,
        },
      },
    });

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
