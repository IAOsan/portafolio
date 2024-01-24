import React from 'react';
import PropTypes from 'prop-types';
import Icon from './common/Icon.component';
import { GithubIcon, LinkedinIcon, TwitterIcon, XIcon } from '../icons';
import { getClassName } from '../utils';

import { useAppContext } from '../context/App.context';

function SocialList({ size }) {
	const { social } = useAppContext();
	const sizes = {
		sm: 'social-list--sm',
	};
	const listClassName = getClassName('social-list', {
		[sizes[size]]: size,
	});
	const icons = {
		Github: GithubIcon,
		Linkedin: LinkedinIcon,
		Twitter: TwitterIcon,
		X: XIcon,
	};

	return (
		<ul className={listClassName}>
			{social.map((s) => {
				const Ico = icons[s.title];
				return (
					<li
						key={s.path}
						className='social-list__item d-inline-block mr-24 mr-lg-16'
					>
						<a
							href={s.path}
							className='social-list__link d-block'
							aria-label={s.label}
							title={s.title}
							target='_blank'
							rel='noreferrer'
						>
							<Icon responsive>
								<Ico aria-hidden='true' />
							</Icon>
							<span className='sr-only'>{s.label}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

SocialList.propTypes = {
	size: PropTypes.oneOf(['sm']),
};

export default SocialList;
