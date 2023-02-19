import React from 'react';
import Header from './components/Header.component';
import Illustration from './assets/illustration.png';

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
			</main>
		</>
	);
}

export default App;
