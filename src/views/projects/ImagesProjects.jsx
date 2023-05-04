import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';

export const ImagesProjects = ({ data, getProjectId }) => {
	const handleProject = (id) => {
		getProjectId(id);
	};

	return (
		<Box
			display='flex'
			justifyContent='center'
			flexWrap='wrap'
			alignItems='center'
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			{data.map((project) => (
				<Box component='figure' id='figure-project' key={project.id}>
					<Box
						component='img'
						id='image-project'
						src={`${project.imageLink}`}
						sx={{
							width: '100%',
						}}
					></Box>

					<Box
						id='content-project'
						display='flex'
						justifyContent='center'
						alignItems='center'
						flexDirection='column'
						fontSize='1.2rem'
						color='secondary'
					>
						<Typography sx={{ paddingBottom: '20px', textTransform: 'uppercase', fontWeight: 700, fontSize: '1.5rem' }}>
							{' '}
							{project.name}{' '}
						</Typography>
						<IconButton
							onClick={() => handleProject(project.id)}
							size='large'
							color='white'
							sx={{ transition: '0.3s all', '&:hover': { color: 'secondary.main' } }}
						>
							<VisibilityIcon fontSize='medium' />
						</IconButton>
					</Box>
				</Box>
			))}
		</Box>
	);
};
