import React from 'react';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import AboutMe from './components/AboutMe.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
import Fab from './components/Fab.component';

function App() {
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
