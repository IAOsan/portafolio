import React from 'react';
import Button from './Button.component';
import { getClassName } from '../../utils';

function Navbar({ className, children, ...restProps }) {
	const containerClassname = getClassName('navbar', {
		[className]: className,
	});

	return (
		<nav
			{...restProps}
			className={containerClassname}
		>
			<div className='container flex flex-ai-c h-100 '>{children}</div>
		</nav>
	);
}

export function NavbarLogo({ className, children, ...restProps }) {
	const containerClassname = getClassName('navbar__logo', {
		[className]: className,
	});

	return (
		<a
			className={containerClassname}
			{...restProps}
		>
			{children}
		</a>
	);
}

export function NavbarToggler({ children, ...restProps }) {
	return (
		<Button
			{...restProps}
			className='btn navbar__toggler d-lg-none'
			type='button'
		>
			<span className='navbar__icon'></span>
			{children}
		</Button>
	);
}

export default Navbar;
