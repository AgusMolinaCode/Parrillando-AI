"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { RecetaId } from "@/libs/interfaces/RecetaId";

type CategoriaMenuProps = {
	nombreCategoria: string;
};

const CategoriaMenu = ({ nombreCategoria }: CategoriaMenuProps) => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [recetas, setRecetas] = useState<RecetaId[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getRecetas = async () => {
			const response = await fetch(`${apiUrl}recetas`);
			const recetasData = await response.json();
			const recetasCategoria = recetasData.filter(
				(receta: RecetaId) => receta.category === nombreCategoria
			);
			setRecetas(recetasCategoria);
			setLoading(false);
		};

		getRecetas();
	}, []);

	return (
		<div>
			<div className="bg-gradient-to-r from-red-100 via-orange-200 to-yellow-100 p-8">
				<h1 className="text-center text-4xl sm:text-6xl font-bold">
					{nombreCategoria}
				</h1>
			</div>

			{recetas.length === 0 && !loading && (
				<p className="text-center text-black text-2xl sm:text-4xl font-bold mt-20">
					No hay recetas en esta categoría
				</p>
			)}
			{loading ? (
				<p className="text-center text-black text-2xl sm:text-4xl font-bold mt-20">
					Cargando recetas...
				</p>
			) : (
				<div className="mt-10 mb-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 place-items-center gap-5 max-w-[1300px] justify-center mx-auto">
					{recetas.map(receta => (
						<Link key={receta.id} href={`/receta/${receta.id}`}>
							<Card isPressable className="h-[350px]">
								<Image
									removeWrapper
									alt="Card background"
									className="z-0 w-full h-full object-cover hover:scale-105"
									src={
										receta.photo.length > 0 &&
										receta.photo[0].startsWith("https")
											? receta.photo[0]
											: "/not-found.png"
									}
								/>
								<CardFooter className="absolute bg-black/80 bottom-0 border-t-1 border-zinc-100/50 z-10">
									<h1 className="text-white font-medium text-center flex justify-center mx-auto text-2xl">
										{receta.title}
									</h1>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default CategoriaMenu;
