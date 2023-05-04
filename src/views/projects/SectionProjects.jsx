import { Box } from '@mui/material';
import React from 'react';
import { Projects } from './Projects';
import { ProjectsMobil } from './ProjectsMobil';
import { projects } from '../../data/projects.json';

export const SectionProjects = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'inherit',
			}}
		>
			{screen.width >= 1000 ? <Projects data={projects} /> : <ProjectsMobil data={projects} />}
		</Box>
	);
};
