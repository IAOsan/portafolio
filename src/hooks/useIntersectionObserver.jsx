function useIntersectionObserver(callback, opts = {}) {
	const defaultOpts = {
		root: null,
		threshold: 0.18,
		...opts,
	};

	const observer = new IntersectionObserver(callback, defaultOpts);

	return observer;
}

export default useIntersectionObserver;
