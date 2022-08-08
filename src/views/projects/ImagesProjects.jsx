import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'

export const ImagesProjects = ({ data, getProjectId }) => {
    
    const handleProject = (id) => {
        getProjectId(id)
    }

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

            {
                data.map(project => (
                    <Box
                        component="figure"
                        id="figure-project"
                        key={project.id}
                    >
                        <Box
                            component="img"
                            id="image-project"
                            src={`${project.imageLink}`}
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
                                onClick={() => handleProject(project.id)}
                                color="white"
                                size="large"
                            >
                                <VisibilityIcon />
                            </IconButton>
                            Ver
                        </Box>
                    </Box>
                ))
            }

        </Grid>
    )
}
