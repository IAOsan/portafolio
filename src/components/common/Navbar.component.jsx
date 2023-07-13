import React from 'react';
import Button from './Button.component';
import { getClassName } from '../../utils';

function Navbar({ className, children }) {
	const containerClassname = getClassName('navbar', {
		[className]: className,
	});

	return (
		<nav className={containerClassname}>
			<div className='flex flex-ai-c h-100 container'>{children}</div>
		</nav>
	);
}

export function NavbarLogo({ className, children, ...restProps }) {
	const containerClassname = getClassName('navbar__logo', {
		[className]: className,
	});

	return (
		<a className={containerClassname} {...restProps}>
			{children}
		</a>
	);
}

export function NavbarToggler(props) {
	return (
		<Button {...props} className='btn navbar__toggler'>
			<span className='navbar__icon'></span>
		</Button>
	);
}

export default Navbar;
