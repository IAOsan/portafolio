import React, { useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import { getClassName } from '../../utils';

function LazyImage({ fallback, src, alt, className, ...restProps }) {
	const imgRef = useRef();

	useEffect(() => {
		function loadImage([entry], observer) {
			if (!entry.isIntersecting) return;
			// change src
			const largeImg = new Image();
			const img = entry.target;
			largeImg.src = src;
			largeImg.onload = () => {
				img.src = src;
				img.classList.remove('lazy-img');
				observer.unobserve(img);
			};
		}
		const imgObserver = new IntersectionObserver(loadImage, {
			root: null,
			threshold: 0,
			rootMargin: '100px',
		});
		imgObserver.observe(imgRef.current);
		return () => {
			imgObserver.disconnect();
		};
	}, [src]);

	return (
		<img
			className={getClassName('lazy-img', { [className]: className })}
			{...restProps}
			src={fallback}
			alt={alt}
			ref={imgRef}
			loading='lazy'
		/>
	);
}

LazyImage.defaultProps = {
	alt: '',
};

LazyImage.propTypes = {
	fallback: Proptypes.string.isRequired,
	src: Proptypes.string.isRequired,
	alt: Proptypes.string,
	className: Proptypes.string,
};

export default LazyImage;
