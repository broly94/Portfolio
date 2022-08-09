import { Box, Typography } from '@mui/material'
import React from 'react'

export const BannerProjects = () => {
    return (
        <Box
            
            sx={{
                width: '100%',
                height: '20vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '100px',
                backgroundColor: "inherit",
                color: 'inherit'
            }}
            id="Proyectos"
        >

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginY: '40px',
                    paddingY: '40px',
                }}
            >
                <Typography
                    textTransform="uppercase"
                    data-aos="fade-up"
                    sx={{
                        textAlign: 'center',
                        fontSize: {
                            xs: '1.4rem',
                            sm: '2rem'
                        },
                        color: 'inherit',
                    }}
                >
                    Proyectos
                </Typography>
            </Box>

        </Box>
    )
}
