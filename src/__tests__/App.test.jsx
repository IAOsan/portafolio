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
