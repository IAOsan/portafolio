import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from './common/LazyImage.component';

function Project({ thumbnail, title, stack, codeLink, demoLink }) {
	return (
		<article className='project-card rounded'>
			<div className='project-card__thumbnail bg-color-light-700'>
				<LazyImage
					src={thumbnail.lg}
					fallback={thumbnail.lazy}
				/>
			</div>
			<div className='project-card__body bg-color-light-500'>
				<h3 className='h5 mb-4'>{title.toUpperCase()}</h3>
				<p className='mb-32 color-light-800'>{stack.join(' ').toUpperCase()}</p>
				<div className='flex flex-ai-c'>
					<a
						href={codeLink}
						className='btn btn--dark btn--block text-center mr-32 project-card__btn'
						target='_blank'
						rel='noreferrer'
						aria-label={`Enlace al código del proyecto "${title}"`}
					>
						Código
					</a>
					<a
						href={demoLink}
						className='btn btn--blue btn--block text-center project-card__btn'
						target='_blank'
						rel='noreferrer'
						aria-label={`Enlace a la demostración en vivo del proyecto "${title}"`}
					>
						Demo
					</a>
				</div>
			</div>
		</article>
	);
}

Project.propTypes = {
	thumbnail: PropTypes.shape({
		lg: PropTypes.string.isRequired,
		lazy: PropTypes.string.isRequired,
	}).isRequired,
	title: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	codeLink: PropTypes.string.isRequired,
	demoLink: PropTypes.string.isRequired,
};

export default Project;
