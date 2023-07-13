import React from 'react';
import { getClassName } from '../../utils';

function Nav({ className, visible, children }) {
	const containerClassname = getClassName(
		'navbar__nav',
		{
			[className]: className,
		},
		{ visible: visible }
	);

	return <ul className={containerClassname}>{children}</ul>;
}

export function NavItem({ className, children }) {
	const containerClassname = getClassName('navbar__item', {
		[className]: className,
	});
	return <li className={containerClassname}>{children}</li>;
}

export function NavLink({ className, children, ...restProps }) {
	const containerClassname = getClassName('navbar__link', {
		[className]: className,
	});

	return (
		<a {...restProps} className={containerClassname}>
			{children}
		</a>
	);
}

export default Nav;
