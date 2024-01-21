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

export function throttle(callback, wait) {
	let timeout = null;

	return (...args) => {
		if (timeout) return;

		timeout = setTimeout(() => {
			timeout = null;
		}, wait);

		return callback(...args);
	};
}

export function filterKeyEnter(handler) {
	return (e) => {
		// escape key
		if (e.keyCode === 27) {
			handler(e);
		}
	};
}

export function accessibleOnClick(handler, tabIndex = 0) {
	return {
		role: 'button',
		tabIndex,
		onKeyDown: filterKeyEnter(handler),
		onClick: handler,
	};
}

export function navigateToElement(id, offset = 50) {
	const element = document.querySelector(id);

	window.scrollTo({
		top: element.offsetTop - offset,
		behavior: 'smooth',
	});
}
