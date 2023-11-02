import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ id, label, ...props }: InputProps) => {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} name={id} {...props} />
		</p>
	);
};
