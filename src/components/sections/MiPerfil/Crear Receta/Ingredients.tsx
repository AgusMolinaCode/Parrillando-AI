import React from "react";
import { Button, Input } from "@nextui-org/react";

interface Props {
	ingredients: { name: string; quantity: string }[];
	setIngredients: (ingredients: { name: string; quantity: string }[]) => void;
}

const Ingredients = ({ ingredients, setIngredients }: Props) => {
	function setValue(object: any, property: string, value: any) {
		if (object.hasOwnProperty(property)) {
			object[property] = value;
		}
	}

	const handleIngredientChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const values = [...ingredients];
		setValue(values[index], event.target.name, event.target.value);
		setIngredients(values);
	};

	const handleAddIngredient = () => {
		setIngredients([...ingredients, { name: "", quantity: "" }]);
	};

	const handleRemoveIngredient = () => {
		const values = [...ingredients];
		values.pop();
		setIngredients(values);
	};

	return (
		<div className="max-w-lg flex flex-col justify-center mx-auto px-2">
			{ingredients.map((ingredient, index) => (
				<div key={index}>
					<Input
						label={`Ingrediente ${index + 1}`}
						labelPlacement="outside"
						placeholder="Nombre del ingrediente"
						type="text"
						name="name"
						id={`name${index}`}
						defaultValue={ingredient.name}
						onChange={event => handleIngredientChange(index, event)}
						className="my-2"
						radius="lg"
						isRequired
					/>
					<Input
						placeholder="Añade la cantidad"
						type="text"
						name="quantity"
						id={`quantity${index}`}
						defaultValue={ingredient.quantity}
						onChange={event => handleIngredientChange(index, event)}
						className="pb-4"
						radius="lg"
						classNames={{
							input: "h-4",
							inputWrapper: "h-4",
						}}
						isRequired
					/>
				</div>
			))}
			<div className="flex justify-center mx-auto gap-2 flex-wrap">
				<Button type="button" className="text-blue-700 bg-transparent text-md" onClick={handleAddIngredient}>
					Añadir ingrediente
				</Button>
				<Button type="button"className="text-red-700 bg-transparent text-md" onClick={handleRemoveIngredient}>
					Eliminar ingrediente
				</Button>
			</div>
		</div>
	);
};

export default Ingredients;
