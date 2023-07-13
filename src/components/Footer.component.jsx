import React from 'react';
import SocialList from './SocialList.component';

function Footer() {
	return (
		<footer className='footer'>
			<div className='container flex flex-ai-c'>
				<p className='font-heading mr-32'>YaoSan</p>
				<SocialList />
				<p className='ml-auto'>
					{new Date().getFullYear()} | Made with ❤
				</p>
			</div>
		</footer>
	);
}

export default Footer;
