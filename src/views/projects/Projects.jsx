import { Box } from '@mui/system';
import React, { useState } from 'react';
import { ImagesProjects } from './ImagesProjects';
import { TabMenu } from './TabMenu';

export const Projects = ({ data }) => {
	const [id, setId] = useState(0);

	const getProjectId = (id) => {
		setId(id);
	};

	return (
		<Box
			display='flex'
			justifyContent='start'
			alignItems='start'
			backgroundColor='inherit'
			sx={{
				width: '100%',
				height: '100%',
				margin: '10px',
			}}
		>
			<Box
				backgroundColor='primary'
				sx={{
					backgroundColor: '#1e1e1e',
					minHeight: '100vh',
					height: '100%',
					color: '#FFFFFF',
					width: '70%',
					padding: '0px',
					margin: '20px',
					borderRadius: '5px',
					border: '1px solid #1e1e1e',
				}}
			>
				<ImagesProjects data={data} getProjectId={getProjectId} />
			</Box>

			<Box
				sx={{
					backgroundColor: '#1e1e1e',
					color: 'white',
					width: '30%',
					minWidth: '400px',
					height: '90vh',
					position: 'sticky',
					top: '70px',
					margin: '20px',
					borderRadius: '5px',
					border: '1px solid #1e1e1e',
				}}
			>
				<TabMenu data={data} idProject={id} />
			</Box>
		</Box>
	);
};
