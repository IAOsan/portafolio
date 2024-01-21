import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils';

function Icon({ size, inline, responsive, className, children }) {
	const sizes = {
		md: 'icon--md',
		xl: 'icon--xl',
		'2xl': 'icon--2xl',
		'3xl': 'icon--3xl',
	};
	const iconClassname = getClassName(
		'icon',
		{ [sizes[size]]: size },
		{ 'icon--inline': inline },
		{ 'icon--responsive': responsive },
		{ [className]: className }
	);

	return <div className={iconClassname}>{children}</div>;
}

Icon.propTypes = {
	size: PropTypes.oneOf(['md', '2xl', '3xl']),
	inline: PropTypes.bool,
	responsive: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Icon;
