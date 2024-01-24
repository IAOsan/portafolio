import React from 'react';
import Button from '../common/Button.component';
import SocialSkeleton from './Social.skeleton';

function AboutMeSkeleton() {
	return (
		<section
			id='home'
			className='about skeleton'
		>
			<div className='container'>
				<div className='row mb-64'>
					<div className='col-md-7 about__body'>
						<p
							className='display-4 m-0 mb-16 skeleton__item'
							aria-hidden
						></p>
						<p
							className='h3 mb-28 skeleton__item'
							aria-hidden
						></p>
						<p
							style={{ '--itemHeight': '20rem' }}
							className='mb-32 skeleton__item'
							aria-hidden
						></p>
						<div className='flex flex-ai-c'>
							<Button
								variant='green'
								type='button'
								rounded
								className='mr-44 skeleton__item'
								aria-hidden
							>
								Contáctame
							</Button>
							<SocialSkeleton />
						</div>
					</div>
					<div className='col-md-5 about__image'>
						<img
							className='my-40 skeleton__item'
							src=''
							alt=''
							style={{ '--itemHeight': '32rem' }}
							aria-hidden
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='skills'>
							<p
								className='h3 mb-32 skeleton__item'
								aria-hidden
							></p>
							<small
								style={{ '--itemWidth': '8rem' }}
								aria-hidden
								className='d-inline-block bg-color-light-600 color-light-900 rounded px-20 py-8 mr-16 mb-16 skeleton__item'
							></small>
							<small
								style={{ '--itemWidth': '8rem' }}
								aria-hidden
								className='d-inline-block bg-color-light-600 color-light-900 rounded px-20 py-8 mr-16 mb-16 skeleton__item'
							></small>
							<small
								style={{ '--itemWidth': '8rem' }}
								aria-hidden
								className='d-inline-block bg-color-light-600 color-light-900 rounded px-20 py-8 mr-16 mb-16 skeleton__item'
							></small>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMeSkeleton;
