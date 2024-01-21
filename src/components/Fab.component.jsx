import React, { useRef, useState } from 'react';
import Button from './common/Button.component';
import Icon from './common/Icon.component';
import useEventListener from '../hooks/useEventListener';
import { throttle } from '../utils';
import { ArrowUpIcon } from '../icons';

const THROTTLE_TIME = 350;
const RENDER_FAB_BREAKPOINT = 992;

function Fab() {
	useEventListener('scroll', throttle(handleScroll, THROTTLE_TIME));
	useEventListener('resize', throttle(handleResize, THROTTLE_TIME));
	const [shouldRenderBtn, setShouldRenderBtn] = useState(
		window.innerWidth < RENDER_FAB_BREAKPOINT
	);
	const fabRef = useRef(null);

	function handleScroll() {
		const shouldDisplayFab =
			document.body.scrollHeight - window.innerHeight * 2 > window.scrollY;

		if (fabRef.current) {
			fabRef.current.classList.toggle('hidden', shouldDisplayFab);
		}
	}

	function handleResize() {
		setShouldRenderBtn(() => {
			if (window.innerWidth > RENDER_FAB_BREAKPOINT) return false;
			return true;
		});
	}

	function handleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	if (!shouldRenderBtn) return null;

	return (
		<Button
			ref={fabRef}
			onClick={handleClick}
			type='button'
			aria-label='Ir a la parte superior'
			className='fab rounded-circle bg-color-yellow-500 color-yellow-900 d-lg-none hidden'
		>
			<Icon
				size='3xl'
				inline
			>
				<ArrowUpIcon aria-hidden='true' />
			</Icon>
			<span className='sr-only'>Ir a la parte superior</span>
		</Button>
	);
}

export default Fab;
