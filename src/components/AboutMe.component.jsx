import React from 'react';
import Button from './common/Button.component';
import SocialList from './SocialList.component';
import LazyImage from './common/LazyImage.component';
import { navigateToElement } from '../utils';
import { useAppContext } from '../context/App.context';

function AboutMe() {
	const { about, skills } = useAppContext();
	const { heading, subHeading, mainDescription, image, lazyImage } = about;

	return (
		<section
			id='home'
			className='about'
		>
			<div className='container'>
				<div className='row mb-64'>
					<div className='col-md-7 about__body'>
						<h1 className='display-4 text-center text-md-left m-0 mb-16'>
							{heading}
						</h1>
						<h2 className='h3 text-center text-md-left mb-28'>{subHeading}</h2>
						<p className='mb-32 text-justify'>{mainDescription}</p>
						<div className='flex flex-ai-c'>
							<Button
								onClick={() => navigateToElement('#contact')}
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
					<div className='col-md-5 about__image flex-md flex-column flex-jc-c'>
						<LazyImage
							src={image}
							fallback={lazyImage}
							className='fluid-img'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div className='skills'>
							<h3 className='h3 mb-32'>{skills.title}</h3>
							{skills.data.map((s) => (
								<small
									key={s}
									className='d-inline-block bg-color-light-600 color-light-900 rounded px-20 py-8 mr-16 mb-16'
								>
									{s}
								</small>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
