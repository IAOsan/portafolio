import { getImageUrl } from './utils';

export const sections = [
	{
		id: 1,
		path: '/#projects',
		label: 'Proyectos',
	},
	{
		id: 2,
		path: '/#contact',
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
		stack: ['bootstrap', 'sass'],
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
		stack: ['bootstrap', 'sass', 'js'],
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
		stack: ['bootstrap', 'sass'],
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
		stack: ['react', 'sass'],
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
		stack: ['react', 'sass'],
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
		stack: ['react', 'sass'],
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
		stack: ['typescript', 'css'],
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
		stack: ['typescript', 'css'],
		codeLink: 'https://github.com/IAOsan/drawing-app/',
		demoLink: 'https://iaosan.github.io/drawing-app/',
	},
];
