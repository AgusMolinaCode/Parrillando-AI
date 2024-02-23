import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "No se encontró el usuario",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(user);
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
