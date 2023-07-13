import React from 'react';
import Icon from './common/Icon.component';
import {
	HtmlIcon,
	CssIcon,
	SassIcon,
	BootstrapIcon,
	JsIcon,
	ReactIcon,
} from '../icons';

function TechnologiesRibbon() {
	return (
		<ul className='no-list-style technologies' data-testid='technologies'>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<HtmlIcon />
				</Icon>
			</li>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<CssIcon />
				</Icon>
			</li>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<SassIcon />
				</Icon>
			</li>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<BootstrapIcon />
				</Icon>
			</li>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<JsIcon />
				</Icon>
			</li>
			<li className='d-inline-block'>
				<Icon className='technologies__icon'>
					<ReactIcon />
				</Icon>
			</li>
		</ul>
	);
}

export default TechnologiesRibbon;