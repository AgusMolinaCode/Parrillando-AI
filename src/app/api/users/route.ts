import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { clerkId, recipes, likes, saved, gastronomia, recomendacion } = body;

  const user = await prisma.user.create({
    data: {
      clerkId,
      recipes: {
        create: recipes,
      },
      likes: {
        create: likes,
      },
      saved: {
        create: saved,
      },
      gastronomia: {
        create: gastronomia,
      },
      recomendacion: {
        create: recomendacion,
      },
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(user);
}