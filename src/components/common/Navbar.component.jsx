import React from 'react';
import PropTypes from 'prop-types';
import { getClasName } from '../../utils';

function Navbar({ logo, links, id, content, isExpanded, onExpand }) {
	const navClassname = getClasName('navbar__nav', {
		'navbar__nav--hidden': !isExpanded,
	});

	function renderLogo() {
		if (logo.type === 'link') {
			return (
				<a
					href={logo.path}
					className='d-block navbar__logo'
					data-testid='navbar-logo'
				>
					{logo.src ? (
						<img src={logo.src} alt={logo.alt} />
					) : (
						<span data-testid='navbar-logo'>
							<logo.icon className='d-block' aria-hidden='true' />
							<span className='sr-only'>{logo.alt}</span>
						</span>
					)}
				</a>
			);
		}
		return (
			<span className='d-block navbar__logo' data-testid='navbar-logo'>
				<logo.icon className='d-block' aria-hidden='true' />
				<span className='sr-only'>{logo.alt}</span>
			</span>
		);
	}

	function renderLinks() {
		if (!!links) {
			return (
				<ul className={navClassname} id={id} data-testid='navbar-nav'>
					{links.map((l) => (
						<li key={l.label} className='navbar__nav-item'>
							<a
								href={l.path}
								className='d-block navbar__nav-link'
							>
								{l.label}
							</a>
						</li>
					))}
				</ul>
			);
		}

		return null;
	}

	return (
		<nav className='navbar'>
			<div className='flex flex-ai-c h-100 container'>
				{renderLogo()}
				{renderLinks()}
				{content()}
				<button
					onClick={onExpand}
					className='btn navbar__toggler'
					aria-controls={id}
					aria-expanded={isExpanded}
					data-testid='navbar-toggler'
					type='button'
				>
					<span className='navbar__toggler-icon'></span>
					<span className='sr-only'>Cerrar navegación</span>
				</button>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	logo: PropTypes.shape({
		type: PropTypes.string,
		path: PropTypes.string,
		src: PropTypes.string,
		icon: PropTypes.any,
		alt: PropTypes.string,
	}),
	links: PropTypes.arrayOf(PropTypes.object),
	id: PropTypes.string,
	content: PropTypes.func,
	isExpanded: PropTypes.bool,
	onExpand: PropTypes.func,
};

export default Navbar;
