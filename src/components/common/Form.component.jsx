import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils';

function Form({ className, children, ...restProps }) {
	return (
		<form
			className={getClassName('form', { [className]: className })}
			{...restProps}
		>
			{children}
		</form>
	);
}

export function FormGroup({ className, children }) {
	const groupClassname = getClassName('form__group', {
		[className]: className,
	});

	return <div className={groupClassname}>{children}</div>;
}

export function FormLabel({ className, children, ...restProps }) {
	return (
		<label
			className={getClassName('form__label', { [className]: className })}
			{...restProps}
		>
			{children}
		</label>
	);
}

export function FormControl({
	type,
	error,
	className,
	textarea,
	...restProps
}) {
	const isTextArea = type === 'textarea';

	const inputClassname = getClassName(
		{
			form__control: !isTextArea,
		},
		{
			'form__control form__control--textarea': isTextArea,
		},
		{
			[className]: className,
		},
		{ invalid: error }
	);

	if (isTextArea) {
		return <textarea className={inputClassname} {...restProps}></textarea>;
	}
	return <input className={inputClassname} type={type} {...restProps} />;
}

export function FormFeedback({ variant, className, message }) {
	const variants = {
		valid: 'form__feedback valid d-block',
		invalid: 'form__feedback invalid d-block',
	};

	return message ? (
		<small
			className={getClassName(
				'form__feedback',
				{ [variants[variant]]: variant },
				{ [className]: className }
			)}
		>
			{message}
		</small>
	) : null;
}

Form.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

FormGroup.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

FormControl.propTypes = {
	type: PropTypes.oneOf(['text', 'textarea', 'email', 'password']).isRequired,
	error: PropTypes.string,
	className: PropTypes.string,
};

FormLabel.propTypes = {
	children: PropTypes.node.isRequired,
};

FormFeedback.propTypes = {
	variant: PropTypes.oneOf(['valid', 'invalid']).isRequired,
	className: PropTypes.string,
	message: PropTypes.string,
};

export default Form;
