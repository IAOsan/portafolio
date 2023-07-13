import React, { useEffect, useRef } from 'react';
import { ArrowUpIcon } from '../icons';
import Button from './common/Button.component';
import Icon from './common/Icon.component';

function Fab() {
	const buttonRef = useRef();
	const timer = useRef();

	useEffect(() => {
		if (!buttonRef.current) return;

		function handleScroll() {
			if (timer.current) {
				clearTimeout(timer.current);
				timer.current = null;
			}
			timer.current = setTimeout(() => {
				buttonRef.current.classList.toggle(
					'hidden',
					document.body.scrollHeight - window.innerWidth >
						window.scrollY
				);
			}, 200);
		}
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<Button
			onClick={handleClick}
			className='fab hidden'
			type='button'
			ref={buttonRef}
		>
			<Icon size='3xl' inline>
				<ArrowUpIcon />
			</Icon>
		</Button>
	);
}

export default Fab;
