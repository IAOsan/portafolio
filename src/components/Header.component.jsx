import React, { useRef, useState } from 'react';
import Navbar, { NavbarLogo, NavbarToggler } from './common/Navbar.component';
import Nav, { NavItem, NavLink } from './common/Nav.component';
import useEventListener from '../hooks/useEventListener';
import { Logo } from '../icons';
import { throttle, navigateToElement } from '../utils';
import { sections } from '../data';

const THROTTLE_TIME = 200;

function Header() {
	useEventListener('scroll', throttle(handleScroll, THROTTLE_TIME));
	const [activeSection, setActiveSection] = useState('home');
	const [isNavVisible, setIsNavVisible] = useState(false);
	const headerRef = useRef(null);
	const sectionElements = useRef([]);
	const sectionElementsOffset = useRef([]);

	function handleScroll(e) {
		const loadSectionsCondition = !sectionElements.current.length;

		// load all sections
		if (loadSectionsCondition) {
			const sections = Array.from(document.querySelectorAll('section'));
			sectionElements.current = sections;
			// offset precalc
			sectionElementsOffset.current = sections.map(
				(el) => el.getBoundingClientRect().top + 250
			);
		}
		// scroll spy
		for (let i = 0; i < sectionElements.current.length; i++) {
			const pageScroll = window.innerHeight + window.scrollY;
			if (pageScroll >= sectionElementsOffset.current[i]) {
				setActiveSection(sectionElements.current[i].id);
			}
		}
		// sticky navbar
		if (headerRef.current) {
			const stickyCondition = window.scrollY > headerRef.current.offsetHeight;

			headerRef.current.classList.toggle('sticky', stickyCondition);
		}
	}

	function handleNavigate(e) {
		e.preventDefault();

		navigateToElement(e.target.hash);
		setIsNavVisible(false);
	}

	return (
		<header
			className='header bg-color-light-500'
			ref={headerRef}
		>
			<Navbar>
				<NavbarLogo href='/'>
					<Logo aria-hidden='true' />
					<span className='sr-only'>
						Logo de mi portafolio, enlace a inicio
					</span>
				</NavbarLogo>
				<Nav
					id='mainNav'
					className='rounded'
					visible={isNavVisible}
				>
					{sections.map((o) => (
						<NavItem key={o.id}>
							<NavLink
								onClick={handleNavigate}
								href={o.path}
								className={
									activeSection === o.path.slice(1)
										? 'rounded active'
										: 'rounded'
								}
							>
								{o.label}
							</NavLink>
						</NavItem>
					))}
				</Nav>
				{/* <ThemeSwitch /> */}
				<NavbarToggler
					aria-controls='mainNav'
					aria-label={`${isNavVisible ? 'Cerrar' : 'Abrir'} la navegación`}
					aria-expanded={isNavVisible}
					className='ml-auto'
					onClick={() => setIsNavVisible((prevState) => !prevState)}
				>
					<span className='sr-only'>{`${
						isNavVisible ? 'Cerrar' : 'Abrir'
					} la navegación`}</span>
				</NavbarToggler>
			</Navbar>
		</header>
	);
}

export default Header;
// function Header() {
// 	const [isNavVisible, setIsNavVisible] = useState(false);
// 	const headerRef = useRef();
// 	const DEBOUNCE_TIME = 100;

// 	useEffect(() => {
// 		const handleScroll = debounce(() => {
// 			headerRef.current.classList.toggle('sticky', window.scrollY > 150);
// 		}, DEBOUNCE_TIME);

// 		window.addEventListener('scroll', handleScroll);

// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, []);

// 	function handleNavigate(e) {
// 		e.preventDefault();

// 		const element = document.querySelector(e.target.hash);

// 		setIsNavVisible(false);
// 		window.scrollTo({
// 			top: element.offsetTop,
// 			behavior: 'smooth',
// 		});
// 	}

// 	return (
// 		<header className='header bg-color-light-500' ref={headerRef}>
// 			<Navbar>
// 				<NavbarLogo href='/'>
// 					<Logo aria-hidden='true' />
// 					<span className='sr-only'>Portafolio logo</span>
// 				</NavbarLogo>
// 				<Nav visible={isNavVisible}>
// 					{sections.map((o) => (
// 						<NavItem key={o.id}>
// 							<NavLink onClick={handleNavigate} href={o.path}>
// 								{o.label}
// 							</NavLink>
// 						</NavItem>
// 					))}
// 				</Nav>
// 				{/* <ThemeSwitch /> */}
// 				<NavbarToggler
// 					className='ml-auto'
// 					onClick={() => setIsNavVisible((prevState) => !prevState)}
// 				/>
// 			</Navbar>
// 		</header>
// 	);
// }

// export default React.forwardRef(Header);
