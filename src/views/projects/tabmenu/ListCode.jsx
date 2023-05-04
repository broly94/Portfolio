import { Box } from '@mui/material';
import React from 'react';

export const ListCode = ({ data }) => {
	return (
		<>
			{data.map((element) => (
				<Box
					key={element.id}
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					flexWrap={true}
					sx={{
						height: '100%',
						width: '100%',
						overflowY: 'auto',
						overflowX: 'hidden',
					}}
				>
					{element.technologies.map((tech) => (
						<Box
							component='img'
							sx={{
								maxWidth: '100px',
								maxHeight: '100px',
							}}
							src={`${tech}`}
						></Box>
					))}
				</Box>
			))}
		</>
	);
};
