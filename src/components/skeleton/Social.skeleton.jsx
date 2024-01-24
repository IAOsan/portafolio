import React from 'react';

function SocialSkeleton() {
	return (
		<ul className='social-list skeleton'>
			<li
				className='social-list__item d-inline-block mr-24 mr-lg-16 skeleton__item'
				aria-hidden
			>
				<span className='social-list__link d-block'></span>
			</li>
			<li
				className='social-list__item d-inline-block skeleton__item'
				aria-hidden
			>
				<span className='social-list__link d-block'></span>
			</li>
		</ul>
	);
}

export default SocialSkeleton;
