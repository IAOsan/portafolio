export function isString(value) {
	return Object.prototype.toString.call(value) === '[object String]';
}

export function isNumber(value) {
	return !isNaN(value);
}

export function isObject(value) {
	return Object.prototype.toString.call(value) === '[object Object]';
}

export function getClassName(...str) {
	return str
		.reduce((acc, s) => {
			if (!s) return acc;

			const isAnString = isString(s);
			const isANumber = isNumber(s);
			const isAnObject = isObject(s);

			if (isAnString || isANumber) {
				acc.push(s);
			}

			if (isAnObject) {
				const [key, value] = Object.entries(s)[0];
				acc = acc.concat(!!value ? key : []);
			}

			return acc;
		}, [])
		.join(' ');
}

export function getImageUrl(name) {
	return new URL(`./assets/${name}`, import.meta.url).href;
}

export function debounce(callback, tiempoDeEspera) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => callback(...args), tiempoDeEspera);
	};
}
