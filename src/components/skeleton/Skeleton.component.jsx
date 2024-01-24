import React from 'react';
import HeaderSkeleton from './Header.skeleton';
import AboutMeSkeleton from './AboutMe.skeleton';

function Skeleton() {
	return (
		<>
			<HeaderSkeleton />
			<main>
				<AboutMeSkeleton />
				<span className='sr-only'>Cargando, por favor espera</span>
			</main>
		</>
	);
}

export default Skeleton;
