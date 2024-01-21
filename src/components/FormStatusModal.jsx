import React from 'react';
import PropTypes from 'prop-types';
import Modal from './common/Modal.component';
import Icon from './common/Icon.component';
import { getClassName } from '../utils';
import { EmailSuccessIcon, EmailErrorIcon } from '../icons';

function FormStatusModal({ isOpen, isSuccessful, onOpen }) {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onOpen}
		>
			<div className='submit-status text-center'>
				<div
					className={getClassName(
						'submit-status__icon-box rounded-circle mx-auto mb-28',
						{
							'bg-color-green-100': isSuccessful,
						},
						{
							'bg-color-red-100': !isSuccessful,
						}
					)}
				>
					<Icon
						className={getClassName(
							'submit-status__icon',
							{
								'color-green-400': isSuccessful,
							},
							{
								'color-red-500': !isSuccessful,
							}
						)}
					>
						{isSuccessful ? <EmailSuccessIcon /> : <EmailErrorIcon />}
					</Icon>
				</div>
				<h3 className='h3'>
					{isSuccessful
						? 'Gracias!, tu mensaje ha sido enviado'
						: 'Lo siento, no fue posible enviar tu mensaje'}
				</h3>
				<p className='h5'>
					{isSuccessful
						? 'Me pondre en contacto pronto'
						: 'Por favor, intentalo mas tarde'}
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
