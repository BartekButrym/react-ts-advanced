import { type ComponentPropsWithoutRef } from 'react';

/** SOLUTION WITH ADDITIONAL EL PROPERTY */

// type ButtonProps = {
// 	el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
// 	el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

/** SOLUTION WITH TYPE PREDICATE */

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
	return 'href' in props;
}

export const Button = (props: ButtonProps | AnchorProps) => {
	// if (props.el === 'anchor') {
	// 	return <a className='button' {...props}></a>;
	// }

	if (isAnchorProps(props)) {
		return <a className='button' {...props}></a>;
	}

	return <button className='button' {...props}></button>;
};
