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
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const values = [...steps];
		setValue(values[index], event.target.name, event.target.value);
		setSteps(values);
	};

	const handleAddStep = () => {
		setSteps([...steps, { description: "" }]);
	};

	return (
		<div className="flex flex-col items-center">
			{steps.map((step, index) => (
				<div key={index}>
					<label
						htmlFor={`description${index}`}
						className="text-gray-500 text-xl font-bold"
					>
						Paso {index + 1}
					</label>
					<textarea
						name="description"
						id={`description${index}`}
						value={step.description}
						onChange={event => handleStepChange(index, event)}
						cols={30}
						rows={10}
						className="border border-gray-300 rounded-md w-96 p-2 my-2"
					></textarea>
				</div>
			))}
			<button type="button" onClick={handleAddStep}>
				Añadir paso
			</button>
		</div>
	);
};

export default Steps;
