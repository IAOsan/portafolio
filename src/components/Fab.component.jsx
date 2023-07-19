import React, { useEffect, useRef } from 'react';
import { ArrowUpIcon } from '../icons';
import Button from './common/Button.component';
import Icon from './common/Icon.component';
import { debounce } from '../utils';

function Fab() {
	const buttonRef = useRef();
	const DEBOUNCE_TIME = 100;

	useEffect(() => {
		if (!buttonRef.current) return;

		const handleScroll = debounce(() => {
			const condition =
				document.body.scrollHeight - window.innerHeight * 2 >
				window.scrollY;

			buttonRef.current.classList.toggle('hidden', condition);
		}, DEBOUNCE_TIME);
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
			className='fab bg-color-yellow-500 color-yellow-900 hidden'
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
