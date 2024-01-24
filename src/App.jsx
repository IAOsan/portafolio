import React from 'react';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import AboutMe from './components/AboutMe.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
import Fab from './components/Fab.component';
import Skeleton from './components/skeleton/Skeleton.component';
import { useAppContext } from './context/App.context';

function App() {
	const { shouldRenderApp } = useAppContext();

	if (!shouldRenderApp) {
		return <Skeleton />;
	}

	return (
		<>
			<Header />
			<main>
				<AboutMe />
				<Projects />
				<Contact />
				<Fab />
			</main>
			<Footer />
		</>
	);
}

export default App;
