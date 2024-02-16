import { Textarea, Button } from "@nextui-org/react";
import React from "react";

interface Props {
	steps: { description: string }[];
	setSteps: (steps: { description: string }[]) => void;
}

const Steps = ({ steps, setSteps }: Props) => {
	function setValue(object: any, property: string, value: any) {
		if (object.hasOwnProperty(property)) {
			object[property] = value;
		}
	}

	const handleStepChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const values = [...steps];
		setValue(values[index], event.target.name, event.target.value);
		setSteps(values);
	};

	const handleAddStep = () => {
		setSteps([...steps, { description: "" }]);
	};

	const handleRemoveStep = () => {
		const values = [...steps];
		values.pop();
		setSteps(values);
	};

	return (
		<div className="max-w-lg flex flex-col justify-center mx-auto px-2">
			{steps.map((step, index) => (
				<div key={index}>
					<Textarea
						name="description"
						label={`Paso ${index + 1}`}
						labelPlacement="outside"
						id={`description${index}`}
						value={step.description}
						onChange={event => handleStepChange(index, event)}
						classNames={{
							label: "text-gray-800",
						}}
						className="my-2"
						isRequired
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

export default Steps;
