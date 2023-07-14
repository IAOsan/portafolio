import React, { useEffect, useRef, useState } from 'react';
import Navbar, { NavbarLogo, NavbarToggler } from './common/Navbar.component';
import Nav, { NavItem, NavLink } from './common/Nav.component';
import ThemeSwitch from './common/ThemeSwitch.component';
import { Logo } from '../icons';
import { sections } from '../data';

function Header() {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const headerRef = useRef();
	const timerRef = useRef();

	useEffect(() => {
		function handleScroll() {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = null;
			}

			timerRef.current = setTimeout(() => {
				headerRef.current.classList.toggle(
					'sticky',
					window.scrollY > 150
				);
			}, 100);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleNavigate(e) {
		e.preventDefault();

		const element = document.querySelector(e.target.hash);
		const totalScroll = element.offsetHeight - element.offsetTop;

		setIsNavVisible(false);
		window.scrollTo({
			top: totalScroll < 0 ? element.offsetTop : totalScroll,
			behavior: 'smooth',
		});
	}

	return (
		<header className='header bg-color-light-500' ref={headerRef}>
			<Navbar>
				<NavbarLogo href='/'>
					<Logo aria-hidden='true' />
					<span className='sr-only'>Portafolio logo</span>
				</NavbarLogo>
				<Nav visible={isNavVisible}>
					{sections.map((o) => (
						<NavItem key={o.id}>
							<NavLink onClick={handleNavigate} href={o.path}>
								{o.label}
							</NavLink>
						</NavItem>
					))}
				</Nav>
				{/* <ThemeSwitch /> */}
				<NavbarToggler
					className='ml-auto'
					onClick={() => setIsNavVisible((prevState) => !prevState)}
				/>
			</Navbar>
		</header>
	);
}

export default Header;
