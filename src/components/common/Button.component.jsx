import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils';

const Button = React.forwardRef(
	({ variant, className, block, rounded, children, ...restProps }, ref) => {
		const variants = {
			green: 'btn--green',
			dark: 'btn--dark',
			blue: 'btn--blue',
			red: 'btn--red',
		};
		const containerClassname = getClassName(
			'btn',
			{ [variants[variant]]: variant },
			{ 'btn--block': block },
			{ [className]: className },
			{
				'rounded-pill': rounded,
			}
		);

		return (
			<button
				className={containerClassname}
				{...restProps}
				ref={ref}
			>
				{children}
			</button>
		);
	}
);

Button.propTypes = {
	block: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['green', 'dark', 'blue', 'red']),
	rounded: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Button;
