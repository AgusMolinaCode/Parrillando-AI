import React from "react";

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

	return (
		<div className="flex flex-col items-center">
			{ingredients.map((ingredient, index) => (
				<div key={index}>
					<label
						htmlFor={`name${index}`}
						className="text-gray-500 text-xl font-bold"
					>
						Ingrediente {index + 1}
					</label>
					<input
						type="text"
						name="name"
						id={`name${index}`}
						value={ingredient.name}
						onChange={event => handleIngredientChange(index, event)}
						className="border border-gray-300 rounded-md w-96 p-2 my-2"
					/>
					<input
						type="text"
						name="quantity"
						id={`quantity${index}`}
						value={ingredient.quantity}
						onChange={event => handleIngredientChange(index, event)}
						className="border border-gray-300 rounded-md w-96 p-2 my-2"
					/>
				</div>
			))}
			<button type="button" onClick={handleAddIngredient}>
				Añadir ingrediente
			</button>
		</div>
	);
};

export default Ingredients;
