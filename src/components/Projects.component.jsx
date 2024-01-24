import React from 'react';
import Project from './Project.component';
import { useAppContext } from '../context/App.context';

function Projects() {
	const { projects } = useAppContext();

	return (
		<section
			id='projects'
			className='projects bg-color-light-600'
		>
			<div className='container'>
				<h2 className='display-4 mb-60'>Proyectos</h2>
				<div className='row'>
					{projects.map((p) => (
						<div
							key={p.title}
							className='col-md-6'
						>
							<Project {...p} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
