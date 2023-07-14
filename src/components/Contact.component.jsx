import React, { useState } from 'react';
import Button from './common/Button.component';
import Form, {
	FormControl,
	FormFeedback,
	FormGroup,
	FormLabel,
} from './common/Form.component';
import FormStatusModal from './FormStatusModal';
import { contactSchema } from '../validation/schemas';
import emailService, { apiUrl } from '../services/email.service';

function Contact() {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [formStatus, setFormStatus] = useState('idle');
	const [displaySubmitStatus, setDisplaySubmitStatus] = useState(false);

	function validate(data) {
		const { value, error } = contactSchema.validate(data);
		const errors = error?.details.reduce((acc, err) => {
			const {
				path: [name],
				message,
				context,
				type,
			} = err;
			const types = {
				'string.empty': 'Por favor, rellena este campo',
				'string.email': 'Por favor, ingresa un email válido',
				'string.min': `Este campo debe contener al menos ${context.limit} caracteres`,
			};
			acc[name] = types[type] || message;
			return acc;
		}, {});

		return { errors: errors, values: value };
	}

	function handleChange(e) {
		const { value, name } = e.target;
		setFormValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function reset() {
		setFormValues((prevState) =>
			Object.keys(prevState).reduce((acc, v) => {
				acc[v] = '';
				return acc;
			}, {})
		);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { values, errors } = validate(formValues);

		if (errors) {
			setErrors(errors);
		} else {
			setIsLoading(true);
			setErrors({});
			try {
				await emailService.send(values);
				setFormStatus('success');
				reset();
			} catch (error) {
				setFormStatus('error');
			} finally {
				setIsLoading(false);
				setDisplaySubmitStatus(true);
			}
		}
	}

	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<h2 className='display-4 mb-60'>Contacto</h2>
						<p data-testid='contact-desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ab quidem numquam excepturi corrupti
							praesentium reprehenderit officiis officia veritatis
							reiciendis nam.
						</p>
					</div>
					<div className='col-md-6 pos-rel'>
						<Form
							onSubmit={handleSubmit}
							action={apiUrl}
							method='POST'
						>
							<FormGroup>
								<small className='d-block float-right mb-4 color-light-900'>
									(Opcional)
								</small>
								<FormControl
									onChange={handleChange}
									id='inputName'
									name='name'
									type='text'
									placeholder='Nombre'
									value={formValues.name}
									error={errors.name}
								/>
								<FormLabel htmlFor='inputName'>
									Nombre
								</FormLabel>
								<FormFeedback
									variant='invalid'
									message={errors.name}
								/>
							</FormGroup>
							<FormGroup>
								<FormControl
									onChange={handleChange}
									id='inputEmail'
									name='email'
									type='email'
									placeholder='Correo'
									value={formValues.email}
									error={errors.email}
								/>
								<FormLabel htmlFor='inputEmail'>
									Correo
								</FormLabel>
								<FormFeedback
									variant='invalid'
									message={errors.email}
								/>
							</FormGroup>
							<FormGroup>
								<FormControl
									onChange={handleChange}
									id='inputMessage'
									name='message'
									type='textarea'
									placeholder='Mensaje'
									value={formValues.message}
									error={errors.message}
								/>
								<FormLabel htmlFor='inputMessage'>
									Mensaje
								</FormLabel>
								<FormFeedback
									variant='invalid'
									message={errors.message}
								/>
							</FormGroup>
							<Button
								variant='red'
								block
								type='submit'
								disabled={isLoading}
							>
								Enviar Mensaje
							</Button>
						</Form>
						<FormStatusModal
							isOpen={displaySubmitStatus}
							isSuccessful={formStatus === 'success'}
							onOpen={() => setDisplaySubmitStatus(false)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
