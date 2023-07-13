import React from 'react';
import Icon from './Icon.component';
import { DayIcon, NightIcon } from '../../icons';

function ThemeSwitch() {
	return (
		<label
			className='ml-auto d-block theme-switch'
			data-testid='theme-switch'
		>
			<input type='checkbox' />
			<span className='theme-switch__icons flex color-light'>
				<Icon size='md' className='mr-12' inline>
					<DayIcon />
				</Icon>
				<Icon size='md' inline>
					<NightIcon />
				</Icon>
			</span>
			<span className='d-block theme-switch__ball'></span>
		</label>
	);
}

export default ThemeSwitch;
