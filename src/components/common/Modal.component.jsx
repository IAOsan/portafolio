import React, { useEffect } from 'react';
import Button from './Button.component';
import Icon from './Icon.component';
import { CloseIcon } from '../../icons';

function Modal({ isOpen, onClose, children }) {
	useEffect(() => {
		const handleCloseOnEscapeKey = (e) =>
			e.key === 'Escape' ? onClose() : null;

		document.body.addEventListener('keydown', handleCloseOnEscapeKey);
		return () => {
			document.body.removeEventListener(
				'keydown',
				handleCloseOnEscapeKey
			);
		};
	}, [onClose]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className='modal flex-ai-c flex-jc-c'>
				<Button
					onClick={onClose}
					className='modal__close'
					type='button'
				>
					<Icon size='2xl'>
						<CloseIcon />
					</Icon>
				</Button>
				{children}
			</div>
			<div className='overlay'></div>
		</>
	);
}

export default Modal;
