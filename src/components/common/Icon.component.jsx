import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils';

function Icon({ size, inline, className, children }) {
	const sizes = {
		'md': 'icon--md',
		'2xl': 'icon--2xl',
		'3xl': 'icon--3xl',
	};
	const iconClassname = getClassName(
		'icon',
		{ [sizes[size]]: size },
		{ 'icon--inline': inline },
		{ [className]: className }
	);

	return <span className={iconClassname}>{children}</span>;
}

Icon.propTypes = {
	size: PropTypes.oneOf(['md', '2xl', '3xl']),
	inline: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Icon;
