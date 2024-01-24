import React from 'react';
import Navbar, { NavbarLogo, NavbarToggler } from '../common/Navbar.component';
import Nav, { NavItem, NavLink } from '../common/Nav.component';
import { Logo } from '../../icons';

function HeaderSkeleton() {
	return (
		<header className='header bg-color-light-500 skeleton'>
			<Navbar>
				<NavbarLogo href='/'>
					<Logo aria-hidden='true' />
				</NavbarLogo>
				<Nav
					id='mainNav'
					className='rounded'
					visible={false}
				>
					<NavItem
						style={{ '--itemWidth': '8rem' }}
						className='skeleton__item'
						aria-hidden
					>
						<NavLink
							href='/'
							className='rounded'
						></NavLink>
					</NavItem>
					<NavItem
						style={{ '--itemWidth': '8rem' }}
						className='skeleton__item'
						aria-hidden
					>
						<NavLink
							href='/'
							className='rounded'
						></NavLink>
					</NavItem>
					<NavItem
						style={{ '--itemWidth': '8rem' }}
						className='skeleton__item'
						aria-hidden
					>
						<NavLink
							href='/'
							className='rounded'
						></NavLink>
					</NavItem>
				</Nav>
				<NavbarToggler
					aria-controls='mainNav'
					className='ml-auto'
				></NavbarToggler>
			</Navbar>
		</header>
	);
}

export default HeaderSkeleton;
