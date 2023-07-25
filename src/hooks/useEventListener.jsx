import React, { useLayoutEffect } from 'react';

function useEventListener(eventName, handler, element = window) {
	useLayoutEffect(() => {
		function evtHandler(e) {
			handler(e);
		}

		element.addEventListener(eventName, evtHandler);

		return () => {
			element.removeEventListener(eventName, evtHandler);
		};
	}, [eventName, handler, element]);
}

export default useEventListener;
