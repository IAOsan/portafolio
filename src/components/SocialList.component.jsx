import React from 'react';
import Icon from './common/Icon.component';
import { GithubIcon } from '../icons';

function SocialList() {
	return (
		<div>
			<a
				href='https://github.com/IAOsan'
				target='_blank'
				rel='noreferrer'
			>
				<Icon size='2xl' inline>
					<GithubIcon />
				</Icon>
			</a>
		</div>
	);
}

export default SocialList;
