import React from 'react';
import Icon from './common/Icon.component';
import {
	HtmlIcon,
	CssIcon,
	SassIcon,
	BootstrapIcon,
	StyledComponentsIcon,
	JsIcon,
	TsIcon,
	ReactIcon,
	FigmaIcon,
} from '../icons';

function TechnologiesRibbon() {
	return (
		<ul
			className='technologies bg-color-light-600 color-light-800 no-list-style '
			data-testid='technologies'
		>
			<li>
				<Icon className='technologies__icon'>
					<HtmlIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<CssIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<SassIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<BootstrapIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<StyledComponentsIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<JsIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<TsIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<ReactIcon />
				</Icon>
			</li>
			<li>
				<Icon className='technologies__icon'>
					<FigmaIcon />
				</Icon>
			</li>
		</ul>
	);
}

export default TechnologiesRibbon;
