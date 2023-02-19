import React, { useState } from 'react';
import Navbar from './common/Navbar.component';
import ThemeSwitch from './common/ThemeSwitch.component';
import { Logo } from '../icons';

function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<header>
			<Navbar
				logo={{
					path: '/',
					icon: Logo,
					alt: 'YaoSan logo',
				}}
				links={[
					{
						label: 'Proyectos',
						path: '/',
					},
					{
						label: 'Acerca de mi',
						path: '/',
					},
					{
						label: 'Contacto',
						path: '/',
					},
				]}
				id='mainNavbar'
				content={() => <ThemeSwitch />}
				isExpanded={isNavExpanded}
				onExpand={() => setIsNavExpanded((prevState) => !prevState)}
			/>
		</header>
	);
}

export default Header;
