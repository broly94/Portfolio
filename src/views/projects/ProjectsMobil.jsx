import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import { projects } from '../../data/projects.json'

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export const ProjectsMobil = () => {

  return (

    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '50px'

      }}
    >

      {
        projects.map(project => (
          <Box
            component="figure"
            id="figure-project-mobile"
            key={project.id}
            
          >
            <Box
              component="img"
              id="image-project-mobile"
              src={`${project.imageLink}`}
            >
            </Box>

            <Box
              id="content-project-mobile"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              fontSize="1.2rem"
              color="secondary"
            >
              <Typography
                sx={{
                  paddingBottom: '10px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'secondary.main'
                }}>
                {project.name}
              </Typography>

              <Typography
                sx={{
                  paddingBottom: '20px',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  padding: '5px'
                }}>
                {project.description}
              </Typography>

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  padding: '5px'
                }}
              >
                <IconButton
                  href={`${project.pageLink}`}
                  size="large"
                  color="white"
                  target="_blank"
                >
                  <LanguageIcon sx={{ fontSize: '2rem' }} />
                </IconButton>

                <IconButton
                  href={`${project.githubLink}`}
                  target="_blank"
                  size="large"
                  color="white"
                >
                  <GitHubIcon sx={{ fontSize: '2rem' }} />
                </IconButton>

              </Box>

            </Box>
          </Box>
        ))
      }

    </Box>

  )
}

/*
 <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>

*/
