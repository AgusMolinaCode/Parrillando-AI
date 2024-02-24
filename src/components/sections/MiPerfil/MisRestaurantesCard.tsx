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
import { Gastronomia } from "@/libs/interfaces/Gastronomia";
import DeleteButton from "./DeleteButton";

async function getUser(): Promise<User[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/users`);
  const users = await response.json();
  return users;
}

async function getUserRestaurants(): Promise<Gastronomia[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/gastronomia`);
  const users = await response.json();
  return users;
}

const MisRestaurantesCard = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const users = await getUser();
  const usersRestaurants = await getUserRestaurants();
  const user = await currentUser();
  const userCode = user?.id;

  const matchingUser = users.find((user) => user.clerkId === userCode);
  const matchingUserRestaurants = usersRestaurants.filter(
    (user) => user.authorId === matchingUser?.id
  );

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  const description = matchingUserRestaurants[0]?.description;
  return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
			{matchingUserRestaurants.length > 0 ? (
				matchingUserRestaurants.map(item => (
					<Card className="max-w-[400px]" key={item?.id}>
						<div className="">
							<CardHeader className="flex gap-3">
								<Image
									alt={item?.title}
									height={60}
									radius="sm"
									src={
										item?.photo.length > 0 && item?.photo[0].startsWith("https")
											? item?.photo[0]
											: "/not-found.png"
									}
									width={60}
								/>
								<div className="flex flex-col">
									<p className="text-md">{item?.title}</p>
									<p className="text-small text-default-500">
										{item.direction}
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
									id={item?.id.toString()}
									url={`${apiUrl}/gastronomia`}
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
};

export default MisRestaurantesCard;
