import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputRefProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

export const InputRef = forwardRef<HTMLInputElement, InputRefProps>(({ id, label, ...props }, ref) => {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} ref={ref} />
		</p>
	);
});
