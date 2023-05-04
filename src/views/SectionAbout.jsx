import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const SectionAbout = () => {
	return (
		<Box
			flexDirection={{ xs: 'column' }}
			justifyContent={{ xs: 'start', sm: 'space-around' }}
			alignItems='center'
			sx={{
				display: 'flex',
				marginY: '60px',
				paddingTop: '30px',
				fontWeight: 800,
			}}
		>
			<Typography
				variant='h1'
				fontFamily='Roboto'
				sx={{
					fontSize: {
						xs: '2rem',
						sm: '4rem',
					},
					textAlign: 'center',
				}}
			>
				Leonel Gabriel Carro
			</Typography>

			<Box
				flexDirection={{ xs: 'column', sm: 'row' }}
				justifyContent={{ xs: 'start', sm: 'space-around' }}
				alignItems='center'
				data-aos='fade-up'
				sx={{
					display: 'flex',
					marginY: '50px',
				}}
			>
				<Box
					component='img'
					sx={{
						maxWidth: '400px',
						maxHeight: '400px',
						width: {
							xs: '100%',
							sm: '50%',
						},
						padding: '10px',
					}}
					src='images/section-about-me/working.svg'
				></Box>

				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					sx={{
						width: { xs: '100%', sm: '50%' },
						padding: { xs: '5px', sm: '20px' },
						borderRadius: '5px',
						border: '1px solid rgba(0, 0, 0, 0.1)',
						position: 'relative',
						transition: '0.2s ease-in',
						boxShadow: '5px 5px 25px -8px rgba(0,0,0,0.40)',
					}}
				>
					<Typography
						variant='h3'
						textAlign='center'
						fontFamily='Arial'
						color='secondary'
						fontSize='2.2rem'
						fontWeight={600}
						sx={{
							paddingBottom: '20px',
						}}
					>
						Desarrollador Fullstack Jr
					</Typography>

					<Typography variant='p' textAlign='center' fontFamily='sans-serif' fontSize='1.2rem' fontWeight='500'>
						Mi nombre es Leonel, diseño y construyo sitios web de forma autodidacta ademas soy técnico en computación. <br />
						Me apasiona el avance de la tecnología y me esfuerzo para estar siempre a la vanguardia.{' '}
						<b>Estoy en busqueda de mi primer empleo en el sector IT</b> para poder desempeñar todos mis conocimientos, crecer
						profesionalmente y brindar soluciones a dicha empresa.
					</Typography>

					<Grid container display='flex' justifyContent='center' alignItems='center' sx={{ padding: '30px' }}>
						<Button
							variant='contained'
							endIcon={<ArticleOutlinedIcon />}
							fullWidth={false}
							size={'medium'}
							sx={{
								marginX: '15px',
								paddingX: '10px',
								backgroundColor: 'secondary.main',
								transition: '0.1s ease-in-out',
								'&:hover': {
									backgroundColor: 'rgba(224, 36, 1, 0.75)',
									transform: 'scale(1.03)',
								},
							}}
							download
							href='files/cv.pdf'
						>
							Descargar CV
						</Button>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};
