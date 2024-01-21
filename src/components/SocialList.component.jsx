import React from 'react';
import PropTypes from 'prop-types';
import Icon from './common/Icon.component';
import { GithubIcon, LinkedinIcon } from '../icons';
import { getClassName } from '../utils';

function SocialList({ size }) {
	const sizes = {
		sm: 'social-list--sm',
	};
	const listClassName = getClassName('social-list', {
		[sizes[size]]: size,
	});

	return (
		<ul className={listClassName}>
			<li className='social-list__item d-inline-block'>
				<a
					href='https://github.com/IAOsan'
					className='social-list__link d-block mr-24 mr-lg-16'
					aria-label='Enlace a mi github'
					title='Github'
					target='_blank'
					rel='noreferrer'
				>
					<Icon responsive>
						<GithubIcon aria-hidden='true' />
					</Icon>
					<span className='sr-only'>Enlace a mi github</span>
				</a>
			</li>
			<li className='social-list__item d-inline-block'>
				<a
					href='https://www.linkedin.com/in/yaotzin-sanabria-7a43332a9'
					className='social-list__link d-block'
					aria-label='Enlace a mi linkedin'
					title='Linkedin'
					target='_blank'
					rel='noreferrer'
				>
					<Icon responsive>
						<LinkedinIcon aria-hidden='true' />
					</Icon>
					<span className='sr-only'>Enlace a mi linkedin</span>
				</a>
			</li>
		</ul>
	);
}

SocialList.propTypes = {
	size: PropTypes.oneOf(['sm']),
};

export default SocialList;
