import { Box, Typography } from '@mui/material'
import React from 'react'

export const BannerProjects = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '30vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1e1e1e',
                marginTop: '100px'
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
                    color="white.main"
                    textTransform="uppercase"
                    sx={{
                        textAlign: 'center',
                        fontSize: {
                            xs: '1.8rem',
                            sm: '2.5rem'
                        }
                    }}
                >
                    Proyectos
                </Typography>
            </Box>

        </Box>
    )
}
