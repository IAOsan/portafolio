import React, { useState, useRef, useLayoutEffect } from 'react';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import Hero from './components/Hero.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
import Fab from './components/Fab.component';
import { debounce } from './utils';

function App() {
	const [activeSection, setActiveSection] = useState('home');
	const headerRef = useRef();
	const fabRef = useRef();
	const mainRef = useRef();
	const DEBOUNCE_TIME = 100;

	useLayoutEffect(() => {
		const sections = mainRef.current
			? Array.from(mainRef.current.children).filter((e) => e.id)
			: [];

		const handleScroll = debounce(() => {
			const fabCondition =
				document.body.scrollHeight - window.innerHeight * 2 >
				window.scrollY;

			if (headerRef.current) {
				headerRef.current.classList.toggle(
					'sticky',
					window.scrollY > 150
				);
			}

			if (fabRef.current) {
				fabRef.current.classList.toggle('hidden', fabCondition);
			}

			for (const element of sections) {
				if (
					window.innerHeight + window.scrollY >=
					element.offsetTop + 250
				) {
					setActiveSection(element.id);
				}
			}
		}, DEBOUNCE_TIME);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Header ref={headerRef} activeSection={activeSection} />
			<main ref={mainRef}>
				<Hero />
				<Projects />
				<Contact />
				<Fab ref={fabRef} />
			</main>
			<Footer />
		</>
	);
}

export default App;
