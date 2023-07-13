export const apiUrl = `https://formspree.io/f/${import.meta.env.VITE_FORM_ID}`;

async function send(values) {
	try {
		const req = await fetch(apiUrl, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const res = await req.json();

		if (!req.ok) {
			const err = new Error();
			err.message = req.statusText;
			err.errors = Object.hasOwn(res, 'errors')
				? res['errors']
				: undefined;
			throw err;
		}
	} catch (error) {
		if (error.errors) {
			throw error.errors;
		}
		console.error('oops!: ', error);
	}
}

export default (() => ({
	send,
}))();
