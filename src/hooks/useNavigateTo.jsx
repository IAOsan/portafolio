import { useState } from 'react';

function useNavigateTo() {
	function handleNavigate(e) {
		e.preventDefault();

		const element = document.querySelector(e.target.hash);

		window.scrollTo({
			top: element.offsetTop - 50,
			behavior: 'smooth',
		});
	}

	return {
		handleNavigate,
	};
}

export default useNavigateTo;
