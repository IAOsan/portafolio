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
			fullSize: getImageUrl('color-generator.png'),
			fallback: getImageUrl('color-generator-lazy.png'),
		},
		title: 'color generator',
		stack: ['react', 'sass'],
		codeLink: 'https://github.com/IAOsan/colors-generator/',
		demoLink: 'https://iaosan.github.io/colors-generator/',
	},
	{
		id: 2,
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
		id: 3,
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
		id: 4,
		thumbnail: {
			fullSize: getImageUrl('markdown-editor.png'),
			fallback: getImageUrl('markdown-editor-lazy.png'),
		},
		title: 'markdown editor',
		stack: ['typescript', 'css'],
		codeLink: 'https://github.com/IAOsan/markdown-editor/',
		demoLink: 'https://iaosan.github.io/markdown-editor/',
	},
];
