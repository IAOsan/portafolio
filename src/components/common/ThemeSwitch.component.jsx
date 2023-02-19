import React from 'react';
import { DayIcon, NightIcon } from '../../icons';

function ThemeSwitch() {
	return (
		<label
			className='ml-auto d-block theme-switch'
			data-testid='theme-switch'
		>
			<input type='checkbox' />
			<span className='theme-switch__icons'>
				<DayIcon className='mr-12 color-light icon icon--md' />
				<NightIcon className='color-light icon icon--md' />
			</span>
			<span className='d-block theme-switch__ball'></span>
		</label>
	);
}

export default ThemeSwitch;
