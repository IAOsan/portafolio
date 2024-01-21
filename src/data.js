import { getImageUrl } from './utils';

export const heading = 'Hola, mi nombre es Yaotzin';

export const subHeading = 'Frontend web developer';

export const mainDescription =
	'Bienvenido a mi portafolio. Soy un aspirante a desarrollador Frontend con afinidad por crear experiencias agradables para los usuarios. A través de proyectos prácticos, he desarrollado habilidades en HTML, CSS y JS, así algunos frameworks de CSS como Bootstrap, Materialize, y en frameworks de JavaScript como React. Este portafolio es una muestra que comparte mi viaje y aspiraciones en el desarrollo Frontend';
// 'Bienvenido a mi portafolio, aspirante a desarrollador Frontend con (gusto|afinidad) de crear experiencias (acogedoras|amigables) para los usuarios,  Este portafolio es una muestra que comparte mi viaje y aspiraciones en el desarrollo Frontend';

// A través de proyectos prácticos, he cultivado habilidades en HTML, CSS, JS, asi como en frameworks de css como Bulma, Bootstrap y javascript como React
// Con habilidades en HTML, CSS,
// Como desarrollador Frontend novato, he trabajado en proyectos utilizando tecnologías como Bootstrap y JavaScript.
// ya he trabajado con HTML, CSS y estoy explorando frameworks como Angular
// Mis habilidades incluyen HTML, CSS y estoy explorando bibliotecas como Vue.js.
// Mi habilidad para transformar ideas en código se evidencia en proyectos donde he utilizado tecnologías como HTML5, CSS3, y jQuery.
// poseo habilidades sólidas en HTML, CSS y JavaScript.

export const technologies = [
	'HTML',
	'CSS',
	'JavaScript (JS)',
	'TypeScript (TS)',
	'React',
	'Node.js',
	'Express',
	'Pug',
	'Bootstrap',
	'Materialize',
	'Styled-components',
	'Sass',
	'MongoDB',
	'Firebase',
	'MySQL',
	'Sequelize',
	'Mongoose',
];

export const utilities = [
	'Parcel',
	'Webpack',
	'Gulp',
	'Figma',
	'Photoshop',
	'Git',
	'GitHub',
	'Vitest',
	'Docker',
];

export const skills = [].concat(technologies, utilities);

// export const contactDescription =
// 	'¡Conversemos! Si estás interesado en discutir oportunidades de colaboración o compartir experiencias de aprendizaje, no dudes en ponerte en contacto. Puedes enviarme un correo electrónico llenando el formulario o encontrarme en GitHub. Gracias por visitar mi portafolio';
export const contactDescription =
	'Gracias por visitar mi portafolio, si estás interesado en discutir oportunidades de colaboración o compartir experiencias de aprendizaje, no dudes en ponerte en contacto. Puedes enviarme un correo electrónico llenando el formulario o encontrarme en GitHub o Linkedin';

export const sections = [
	{
		id: 1,
		path: '#home',
		label: 'Inicio',
	},
	{
		id: 2,
		path: '#projects',
		label: 'Proyectos',
	},
	{
		id: 3,
		path: '#contact',
		label: 'Contacto',
	},
];

export const projects = [
	{
		id: 1,
		thumbnail: {
			fullSize: getImageUrl('bienes-raices-layout.png'),
			fallback: getImageUrl('bienes-raices-layout-lazy.png'),
		},
		title: 'bienes raíces layout',
		stack: ['pug', 'materialize', 'sass'],
		codeLink: 'https://github.com/IAOsan/bienes-raices-layout/',
		demoLink: 'https://iaosan.github.io/bienes-raices-layout/',
	},
	{
		id: 2,
		thumbnail: {
			fullSize: getImageUrl('fiverr.png'),
			fallback: getImageUrl('fiverr-lazy.png'),
		},
		title: 'fiverr layout',
		stack: ['pug', 'bootstrap', 'sass', 'javascript'],
		codeLink: 'https://github.com/IAOsan/frv-layout/',
		demoLink: 'https://iaosan.github.io/frv-layout/',
	},
	{
		id: 3,
		thumbnail: {
			fullSize: getImageUrl('spa.png'),
			fallback: getImageUrl('spa-lazy.png'),
		},
		title: 'spa multipágina',
		stack: ['pug', 'bootstrap', 'sass'],
		codeLink: 'https://github.com/IAOsan/carolina-spa-layout/',
		demoLink: 'https://iaosan.github.io/carolina-spa-layout/',
	},
	{
		id: 4,
		thumbnail: {
			fullSize: getImageUrl('color-generator.png'),
			fallback: getImageUrl('color-generator-lazy.png'),
		},
		title: 'color generator',
		stack: ['vite ', 'react', 'sass'],
		codeLink: 'https://github.com/IAOsan/colors-generator/',
		demoLink: 'https://iaosan.github.io/colors-generator/',
	},
	{
		id: 5,
		thumbnail: {
			fullSize: getImageUrl('weather-app.png'),
			fallback: getImageUrl('weather-app-lazy.png'),
		},
		title: 'weather app',
		stack: ['vite', 'react', 'sass'],
		codeLink: 'https://github.com/IAOsan/weather-app/',
		demoLink: 'https://iaosan.github.io/weather-app/',
	},
	{
		id: 6,
		thumbnail: {
			fullSize: getImageUrl('todo-app.png'),
			fallback: getImageUrl('todo-app-lazy.png'),
		},
		title: 'todo app',
		stack: ['vite', 'react', 'sass'],
		codeLink: 'https://github.com/IAOsan/todo-app/',
		demoLink: 'https://iaosan.github.io/todo-app/',
	},
	{
		id: 7,
		thumbnail: {
			fullSize: getImageUrl('markdown-editor.png'),
			fallback: getImageUrl('markdown-editor-lazy.png'),
		},
		title: 'markdown editor',
		stack: ['html', 'typescript', 'css'],
		codeLink: 'https://github.com/IAOsan/markdown-editor/',
		demoLink: 'https://iaosan.github.io/markdown-editor/',
	},
	{
		id: 8,
		thumbnail: {
			fullSize: getImageUrl('drawing-app.png'),
			fallback: getImageUrl('drawing-app-lazy.png'),
		},
		title: 'drawing app',
		stack: ['html', 'typescript', 'css'],
		codeLink: 'https://github.com/IAOsan/drawing-app/',
		demoLink: 'https://iaosan.github.io/drawing-app/',
	},
];
