import { Textarea, Button } from "@nextui-org/react";
import React from "react";

interface Step {
	description: string;
}

interface StepsEditProps {
	steps: { description: string }[];
	setSteps: React.Dispatch<React.SetStateAction<{ description: string }[]>>;
	handleAddStep: () => void;
	handleRemoveStep: () => void;
}

const StepsEdit: React.FC<StepsEditProps> = ({
	steps,
	handleAddStep,
	handleRemoveStep,
	setSteps,
}) => {
	return (
		<div className="max-w-lg flex flex-col justify-center mx-auto px-2">
			{steps.map((step, index) => (
				<div key={index}>
					<label htmlFor={`description${index}`}>Paso {index + 1}</label>
					<textarea
						name={`step-description-${index}`}
						id={`description${index}`}
						value={step.description}
						onChange={e => {
							const newSteps = [...steps];
							newSteps[index].description = e.target.value;
							setSteps(newSteps);
						}}
						className="my-2"
						required
					/>
				</div>
			))}
			<div className="flex justify-center mx-auto gap-2 flex-wrap mt-4">
				<Button type="button" color="primary" onClick={handleAddStep}>
					Añadir paso
				</Button>
				<Button type="button" color="danger" onClick={handleRemoveStep}>
					Eliminar paso
				</Button>
			</div>
		</div>
	);
};

export default StepsEdit;
