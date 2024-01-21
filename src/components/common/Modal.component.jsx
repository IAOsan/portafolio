import React, { useEffect } from 'react';
import Button from './Button.component';
import Icon from './Icon.component';
import useEventListener from '../../hooks/useEventListener';
import { accessibleOnClick } from '../../utils';
import { CloseIcon } from '../../icons';

function Modal({ isOpen, onClose, children }) {
	useEventListener('keydown', handleModalClose);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	function handleModalClose(e) {
		if (e.key === 'Escape') {
			onClose();
		}
	}

	if (!isOpen) {
		return null;
	}

	return (
		<div>
			<div className='modal rounded bg-color-light-500'>
				<Button
					onClick={onClose}
					className='btn modal__close'
					type='button'
				>
					<Icon inline>
						<CloseIcon />
					</Icon>
				</Button>
				{children}
			</div>
			<div
				{...accessibleOnClick(onClose)}
				className='overlay'
			></div>
		</div>
	);
}

export default Modal;
