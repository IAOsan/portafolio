import React from 'react';
import Button from './common/Button.component';
import SocialList from './SocialList.component';
import { getImageUrl } from '../utils';

function Hero() {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-lg-7'>
						<h1 className='display-4 m-0 mb-16'>
							Hola, mi nombre es Yaotzin Sanabria
						</h1>
						<h3 className='h3 mb-32'>Frontend web developer</h3>
						<p className='mb-32 word-break-all'>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Deleniti laborum id delectus nam nobis eum
							odit, vero ut temporibus? Ad.
						</p>
						<div className='flex flex-ai-c'>
							<Button
								variant='green'
								type='button'
								rounded
								className='mr-44'
							>
								Contáctame
							</Button>
							<SocialList />
						</div>
					</div>
					<div className='col-md-4 col-lg-5'>
						<img
							src={getImageUrl('illustration.png')}
							alt=''
							data-testid='illustration'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
