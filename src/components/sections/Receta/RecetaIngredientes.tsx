import React from "react";
import RecetaZoom from "./RecetaZoom";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import Link from "next/link";

interface Props {
	receta: RecetaId;
}

const RecetaIngredientes = ({ receta }: Props) => {
	const category = receta.category || "";

	const formattedCategory = category
		.toLowerCase()
		.replace(/(\s+|-+)/g, "")
		.replace(/y/g, "-")
		.replace(/(otrasrecetas)/g, "otras-recetas");

	return (
		<div className="flex flex-wrap justify-center mx-auto gap-5">
			<div>
				{category && (
					<Link
						href={`/categorias/${formattedCategory}`}
						className="text-semibold text-indigo-500 text-md underline"
					>
						{category}
					</Link>
				)}

				<h1 className="text-4xl sm:text-5xl font-normal py-3">
					{receta.title}
				</h1>
				<h2 className="max-w-[500px] mt-5">{receta.description}</h2>
				<h2 className="text-lg sm:text-xl font-semibold pt-5 underline">
					INGREDIENTES:
				</h2>
				<div className="pt-4">
					<ul className="text-md sm:text-xl font-bold grid grid-cols-2">
						{receta.ingredients &&
							receta.ingredients.map((ingredient, index) => (
								<li key={index}>
									<div className="flex flex-col">
										<span className="font-bold"> ● {ingredient.name}</span>
										<span className="ml-2 font-normal">
											{" "}
											• {ingredient.quantity}
										</span>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
			<div className="p-2">
				<RecetaZoom receta={receta} />
			</div>
		</div>
	);
};

export default RecetaIngredientes;
