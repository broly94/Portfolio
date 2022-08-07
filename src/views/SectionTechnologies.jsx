import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Technology } from './Technology'

export const SectionTechnologies = () => {
    
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            id="Tecnologias"
            sx={{
                height: '100vh',
                width: '100%',
                padding: { xs: '5px', sm: '5px' },
                backgroundColor: '#E14630'
            }}
            
        >

            <Grid container sx={{ marginY: '100px', width: '90%'}} justifyContent="center">
                <Box
                    sx={{
                        marginBottom: '30px'
                    }}
                >
                    <Typography
                        variant="p"
                        color="white.main"
                        gutterBottom
                        fontSize="1.5rem"
                        fontFamily="Segoe UI"
                        sx={{
                            marginBottom: '40px',
                            textAlign: "center"
                        }}
                    >
                        Tecnologias que utilizo para llevar a cabo los proyectos
                    </Typography>
                </Box>
                <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    sx={{
                        width: "100%",
                        paddingY: '20px'
                    }}
                >

                    <Technology />


                </Grid>
            </Grid>

        </Box>
    )
}
