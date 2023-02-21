import React from 'react';
import Header from './components/Header.component';
import Illustration from './assets/illustration.png';
import {
	HtmlIcon,
	CssIcon,
	SassIcon,
	BootstrapIcon,
	JsIcon,
	ReactIcon,
} from './icons';

function App() {
	return (
		<>
			<Header />
			<main>
				<section className='hero'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-7'>
								<h1 className='display-4 m-0 mb-16'>
									Hola, mi nombre es Yaotzin Sanabria
								</h1>
								<h3 className='h3 mb-32'>
									Frontend web developer
								</h3>
								<p className='mb-32 word-break-all'>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Deleniti laborum id
									delectus nam nobis eum odit, vero ut
									temporibus? Ad.
								</p>
								<button
									className='btn btn--default btn--green'
									type='button'
								>
									Contáctame
								</button>
							</div>
							<div className='col-lg-5'>
								<img
									src={Illustration}
									alt=''
									data-testid='illustration'
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='projects'>
					<div className='container'>
						<ul
							className='no-list-style technologies'
							data-testid='technologies'
						>
							<li className='d-inline-block'>
								<HtmlIcon className='icon icon--display-3' />
							</li>
							<li className='d-inline-block'>
								<CssIcon className='icon icon--display-3' />
							</li>
							<li className='d-inline-block'>
								<SassIcon className='icon icon--display-3' />
							</li>
							<li className='d-inline-block'>
								<BootstrapIcon className='icon icon--display-3' />
							</li>
							<li className='d-inline-block'>
								<JsIcon className='icon icon--display-3' />
							</li>
							<li className='d-inline-block'>
								<ReactIcon className='icon icon--display-3' />
							</li>
						</ul>
						<h2 className='display-4 mb-60'>Proyectos</h2>
						<div className='row'>
							<div className='col-md-6'>
								<article className='project-card'>
									<div className='project-card__thumbnail'>
										<img
											src='https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F98%2F62%2Fg93vTpfT_o.png&w=1920&q=75'
											alt=''
										/>
									</div>
									<div className='project-card__body'>
										<h3 className='h5'>
											DISEÑO DE PORTAFOLIO
										</h3>
										<p className='mb-32'>HTML CSS</p>
										<button
											className='btn btn--default btn--dark mr-32 project-card__btn'
											type='button'
										>
											Código
										</button>
										<button
											className='btn btn--default btn--blue project-card__btn'
											type='button'
										>
											Demo
										</button>
									</div>
								</article>
							</div>
							<div className='col-md-6'>
								<article className='project-card'>
									<div className='project-card__thumbnail'>
										<img
											src='https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F98%2F62%2Fg93vTpfT_o.png&w=1920&q=75'
											alt=''
										/>
									</div>
									<div className='project-card__body'>
										<h3 className='h5'>
											DISEÑO DE PORTAFOLIO
										</h3>
										<p className='mb-32'>HTML CSS</p>
										<button
											className='btn btn--default btn--dark mr-32 project-card__btn'
											type='button'
										>
											Código
										</button>
										<button
											className='btn btn--default btn--blue project-card__btn'
											type='button'
										>
											Demo
										</button>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
				<section className='contact'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6'>
								<h2 className='display-4 mb-60'>Contacto</h2>
								<p data-testid='contact-desc'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Ab quidem numquam
									excepturi corrupti praesentium reprehenderit
									officiis officia veritatis reiciendis nam.
								</p>
							</div>
							<div className='col-lg-6'>
								<form className='form' data-testid='form'>
									<div className='form__group'>
										<input
											className='form__control'
											id='inputName'
											name='name'
											type='text'
											placeholder='Nombre'
											required
										/>
										<label
											className='form__label'
											htmlFor='inputName'
										>
											Nombre
										</label>
										<small className='form__feedback'>
											Helper text
										</small>
									</div>
									<div className='form__group'>
										<input
											className='form__control'
											id='inputEmail'
											name='email'
											type='email'
											placeholder='Correo'
											required
										/>
										<label
											className='form__label'
											htmlFor='inputEmail'
										>
											Correo
										</label>
										<small className='form__feedback'>
											Helper text
										</small>
									</div>
									<div className='form__group'>
										<textarea
											className='form__control form__control--textarea'
											name='message'
											id='inputMessage'
											placeholder='Mensaje'
											required
										></textarea>
										<label
											className='form__label'
											htmlFor='inputMessage'
										>
											Mensaje
										</label>
										<small className='form__feedback'>
											Helper text
										</small>
									</div>
									<button
										className='btn btn--default btn--block btn--red'
										type='submit'
									>
										Enviar Mensaje
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
