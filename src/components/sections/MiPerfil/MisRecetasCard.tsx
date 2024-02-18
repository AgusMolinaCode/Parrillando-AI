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
import Link from "next/link";

async function getUser(): Promise<User[]> {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${apiUrl}users`);
	const users = await response.json();
	return users;
}

async function getUserRecipes(): Promise<Receta[]> {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${apiUrl}recetas`);
	const users = await response.json();
	return users;
}

export default async function MisRecetasCard() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const users = await getUser();
	const usersRecipes = await getUserRecipes();
	const user = await currentUser();
	const userCode = user?.id;

	const matchingUser = users.find(user => user.clerkId === userCode);
	const matchingUserRecipes = usersRecipes.filter(
		user => user.authorId === matchingUser?.id
	);

	const truncateText = (text: string, maxLength: number) => {
		const words = text.split(" ");
		if (words.length > maxLength) {
			return words.slice(0, maxLength).join(" ") + "...";
		}
		return text;
	};

	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
			{matchingUserRecipes.length > 0 ? (
				matchingUserRecipes.map(recipe => (
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
									src={
										recipe?.photo.length > 0 &&
										recipe?.photo[0].startsWith("https")
											? recipe?.photo[0]
											: "/not-found.png"
									}
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
								<p>{truncateText(recipe.description, 15)}</p>
							</CardBody>
							<Divider />
							<CardFooter>
								<ButtonGroup className="border rounded-xl">
									<Link href={`/editar-receta/${recipe?.id}`}>
										<Button color="primary" variant="light" size="md">
											Editar
										</Button>
									</Link>
									<DeleteButton
										id={recipe?.id.toString()}
										url={`${apiUrl}recetas`}
									/>
								</ButtonGroup>
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
