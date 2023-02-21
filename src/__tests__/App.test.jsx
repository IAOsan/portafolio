import { render, screen, setupUser } from './test-utils';
import App from '../App';

function renderApp() {
	render(<App />);
}

const user = setupUser();

describe('<App />', () => {
	const navbarLogo = () => screen.queryByTestId(/navbar-logo/i),
		navbarLinks = () =>
			Array.from(document.querySelectorAll('.navbar__nav-link')),
		themeSwitch = () => screen.queryByTestId('theme-switch'),
		navbarToggler = () => screen.queryByTestId('navbar-toggler'),
		navbarNav = () => screen.queryByTestId('navbar-nav');

	describe('LAYOUT', () => {
		beforeEach(() => renderApp());
		it('should display navbar logo', () => {
			expect(navbarLogo()).toBeInTheDocument();
		});
		it('should display navbar links', () => {
			const links = navbarLinks();
			expect(links[0].textContent).toMatch(/proyectos/i);
			expect(links[1].textContent).toMatch(/acerca de mi/i);
			expect(links[2].textContent).toMatch(/contacto/i);
		});
		it('should display theme mode switch in the navbar', () => {
			expect(themeSwitch()).toBeInTheDocument();
		});
		it('should navbar cointains toggler', () => {
			expect(navbarToggler()).toBeInTheDocument();
		});
		it('should display hero title', () => {
			expect(
				screen.queryByRole('heading', {
					name: /Hola, mi nombre es Yaotzin Sanabria/i,
				})
			).toBeInTheDocument();
		});
		it('should display hero subtitle', () => {
			expect(
				screen.queryByRole('heading', {
					name: /Frontend web developer/i,
				})
			).toBeInTheDocument();
		});
		it('should display hero contact button', () => {
			expect(
				screen.queryByRole('button', { name: /Contáctame/i })
			).toBeInTheDocument();
		});
		it('should display hero illustration', () => {
			expect(screen.queryByTestId('illustration')).toBeInTheDocument();
		});
		it('should display technologies list', () => {
			const list = screen.queryByTestId('technologies');
			expect(list).toBeInTheDocument();
			expect(list.childElementCount).toBe(6);
		});
		it('should display projects heading', () => {
			expect(screen.queryByRole('heading', { name: /proyectos/i }));
		});
		it('should display project cards', () => {
			const projects = document.querySelectorAll('.project-card');
			expect(projects).toHaveLength(2);
		});
		// it('should display thumbnail for project card', () => {
		// });
		// it('should display project card title', () => {
		// });
		// it('should display project card technologies', () => {
		// });
		// it('should display project card code link', () => {
		// });
		// it('should display project card demo link', () => {
		// });
		it('should display contact heading', () => {
			expect(
				screen.queryByRole('heading', { name: /contacto/i })
			).toBeInTheDocument();
		});
		it('should display contact description', () => {
			expect(screen.queryByTestId('contact-desc')).toBeInTheDocument();
		});
		it('should display contact form', () => {
			expect(screen.queryByTestId('form')).toBeInTheDocument();
		});
		it('should display input for name in contact form', () => {
			expect(
				screen.queryByPlaceholderText(/nombre/i)
			).toBeInTheDocument();
		});
		it('should input for name in contact form should be of type text', () => {
			expect(screen.queryByPlaceholderText(/nombre/i).type).toBe('text');
		});
		it('should display input for email in contact form', () => {
			expect(
				screen.queryByPlaceholderText(/correo/i)
			).toBeInTheDocument();
		});
		it('should input for email in contact form should be of type email', () => {
			expect(screen.queryByPlaceholderText(/correo/i).type).toBe('email');
		});
		it('should display input for message in contact form', () => {
			expect(
				screen.queryByPlaceholderText(/mensaje/i)
			).toBeInTheDocument();
		});
		it('should input for email in contact form should be of type textarea', () => {
			expect(screen.queryByPlaceholderText(/mensaje/i).type).toBe('textarea');
		});
		it('should display submit button for contact form', () => {
			expect(screen.queryByRole('button', {name: /enviar mensaje/i})).toBeInTheDocument();
		});
		it('should submit button for contact form be of type submit', () => {
			expect(screen.queryByRole('button', {name: /enviar mensaje/i}).type).toBe('submit');
		});
	});

	describe('INTERACTIVITY', () => {
		it('should not be expanded initially the navigation', () => {
			renderApp();

			expect(Array.from(navbarNav().classList)).toContain(
				'navbar__nav--hidden'
			);
			expect(navbarToggler()).toHaveAttribute('aria-expanded', 'false');
		});
		it('should expand the navigation when clicks on toggler', async () => {
			renderApp();

			await user.click(navbarToggler());

			expect(Array.from(navbarNav().classList)).not.toContain(
				'navbar__nav--hidden'
			);
			expect(navbarToggler()).toHaveAttribute('aria-expanded', 'true');
		});
		it('should collapse the navigation when clicks on toggler if its expanded', async () => {
			renderApp();

			await user.click(navbarToggler());
			expect(Array.from(navbarNav().classList)).not.toContain(
				'navbar__nav--hidden'
			);
			expect(navbarToggler()).toHaveAttribute('aria-expanded', 'true');

			await user.click(navbarToggler());
			expect(Array.from(navbarNav().classList)).toContain(
				'navbar__nav--hidden'
			);
			expect(navbarToggler()).toHaveAttribute('aria-expanded', 'false');
		});
	});
});
