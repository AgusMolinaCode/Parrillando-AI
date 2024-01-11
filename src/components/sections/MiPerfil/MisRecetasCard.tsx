import React from "react";
import { currentUser } from "@clerk/nextjs";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  ButtonGroup,
  Button,
} from "@nextui-org/react";
import { User } from "@/libs/interfaces/User";
import { Receta } from "@/libs/interfaces/Receta";
import DeleteButton from "./DeleteButton";

async function getUser(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();
  return users;
}

async function getUserRecipes(): Promise<Receta[]> {
  const response = await fetch("http://localhost:3000/api/recetas");
  const users = await response.json();
  return users;
}

export default async function MisRecetasCard() {
  const users = await getUser();
  const usersRecipes = await getUserRecipes();
  const user = await currentUser();
  const userCode = user?.id;

  const matchingUser = users.find((user) => user.clerkId === userCode);
  const matchingUserRecipes = usersRecipes.filter(
    (user) => user.authorId === matchingUser?.id
  );

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  const description = matchingUserRecipes[0]?.description;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      {matchingUserRecipes.length > 0 ? (
        matchingUserRecipes.map((recipe) => (
          <Card
            className="max-w-[400px] animate-fade animate-duration-400"
            key={recipe?.id}
          >
            <div className="">
              <CardHeader className="flex gap-3">
                <Image
                  alt={recipe?.title}
                  height={60}
                  radius="sm"
                  src={recipe?.photo[0]}
                  width={60}
                />
                <div className="flex flex-col">
                  <p className="text-md">{recipe?.title}</p>
                  <p className="text-small text-default-500">
                    {recipe.category}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{truncateText(description, 15)}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <DeleteButton
                  id={recipe?.id.toString()}
                  url="http://localhost:3000/api/recetas"
                />
              </CardFooter>
            </div>
          </Card>
        ))
      ) : (
        <div className="flex justify-center items-center mx-auto">
          <p className="font-bold text-4xl text-center mx-auto flex justify-center">
            No hay recetas disponibles
          </p>
        </div>
      )}
    </div>
  );
}
