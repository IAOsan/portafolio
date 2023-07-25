import React from 'react';
import Button from './common/Button.component';
import Icon from './common/Icon.component';
import { ArrowUpIcon } from '../icons';

function Fab(props, ref) {
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
			ref={ref}
		>
			<Icon size='3xl' inline>
				<ArrowUpIcon />
			</Icon>
		</Button>
	);
}

export default React.forwardRef(Fab);
