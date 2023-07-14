import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from './common/LazyImage.component';

function Project({ thumbnail, title, stack, codeLink, demoLink }) {
	return (
		<article className='project-card'>
			<div className='project-card__thumbnail bg-color-light-900'>
				<LazyImage
					src={thumbnail.fullSize}
					fallback={thumbnail.fallback}
				/>
			</div>
			<div className='project-card__body bg-color-light-500'>
				<h3 className='h5'>{title.toUpperCase()}</h3>
				<p className='mb-32 color-light-800'>
					{stack.join(' ').toUpperCase()}
				</p>
				<a
					href={codeLink}
					className='btn btn--dark mr-32 project-card__btn'
					target='_blank'
					rel='noreferrer'
				>
					Código
				</a>
				<a
					href={demoLink}
					className='btn btn--blue project-card__btn'
					target='_blank'
					rel='noreferrer'
				>
					Demo
				</a>
			</div>
		</article>
	);
}

Project.propTypes = {
	thumbnail: PropTypes.shape({
		fullSize: PropTypes.string.isRequired,
		fallback: PropTypes.string.isRequired,
	}).isRequired,
	title: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	codeLink: PropTypes.string.isRequired,
	demoLink: PropTypes.string.isRequired,
};

export default Project;
