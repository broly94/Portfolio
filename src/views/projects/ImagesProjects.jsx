import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'

export const ImagesProjects = () => {
    return (

        <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '100%',
                height: '100%',
                paddingTop: {
                    sm: '80px',
                    md: '80px'
                },
                marginY: '100px'

            }}
        >

            <Box
                component="figure"
                id="figure-project"
            >
                <Box
                    component="img"
                    id="image-project"
                    src={`images/projects/citas-veterinaria.png`}
                >
                </Box>

                <Box
                    id="content-project"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                    fontSize="1.2rem"
                    sx={{
                        color: "white",
                    }}
                >
                    <IconButton 
                        color="white"
                        size="large"
                    >
                        <VisibilityIcon />
                    </IconButton>
                    Ver
                </Box>
            </Box>

            
            <Box
                component="figure"
                id="figure-project"
            >
                <Box
                    component="img"
                    id="image-project"
                    src={`images/projects/marketplace-nucba.jpg`}
                >
                </Box>

                <Box
                    id="content-project"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                    fontSize="1.2rem"
                    sx={{
                        color: "black",
                    }}
                >
                    <IconButton 
                        color="primary"
                        size="large"
                    >
                        <VisibilityIcon />
                    </IconButton>
                    Ver
                </Box>
            </Box>

        </Grid>
    )
}
