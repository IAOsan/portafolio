import React from 'react';
import PropTypes from 'prop-types';
import Modal from './common/Modal.component';
import Icon from './common/Icon.component';
import { getClassName } from '../utils';
import { EmailSuccessIcon, EmailErrorIcon } from '../icons';

function FormStatusModal({ isOpen, isSuccessful, onOpen }) {
	return (
		<Modal isOpen={isOpen} onClose={onOpen}>
			<div className='submit'>
				<div
					className={getClassName(
						'submit__icon-box',
						{
							success: isSuccessful,
						},
						{
							error: !isSuccessful,
						}
					)}
				>
					<Icon
						className={getClassName(
							'submit__icon',
							{
								success: isSuccessful,
							},
							{
								error: !isSuccessful,
							}
						)}
					>
						{isSuccessful ? (
							<EmailSuccessIcon />
						) : (
							<EmailErrorIcon />
						)}
					</Icon>
				</div>
				<h3 className='h2'>
					{isSuccessful
						? 'Gracias!, tu mensaje ha sido enviado'
						: 'Lo siento, no fue posible enviar tu mensaje'}
				</h3>
				<p className='h5 color-light-900'>
					{isSuccessful
						? 'Me pondre en contacto pronto.'
						: 'Por favor, intentalo mas tarde.'}
				</p>
			</div>
		</Modal>
	);
}

FormStatusModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	isSuccessful: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default FormStatusModal;
