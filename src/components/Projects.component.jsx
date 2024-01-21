import React from 'react';
import Project from './Project.component';
import { projects } from '../data';

function Projects() {
	return (
		<section
			id='projects'
			className='projects bg-color-light-600'
		>
			<div className='container'>
				<h2 className='display-4 mb-60'>Proyectos</h2>
				<div className='row'>
					{projects.map((o) => (
						<div
							key={o.id}
							className='col-md-6'
						>
							<Project {...o} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
