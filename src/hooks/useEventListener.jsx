import { useLayoutEffect, useRef } from 'react';

function useEventListener(eventName, handler, element = window) {
	const initialProps = useRef({
		eventName,
		handler,
		element,
	});

	useLayoutEffect(() => {
		const { eventName, handler, element } = initialProps.current;

		element.addEventListener(eventName, handler);

		return () => {
			element.removeEventListener(eventName, handler);
		};
	}, [eventName, handler, element]);
}

export default useEventListener;
