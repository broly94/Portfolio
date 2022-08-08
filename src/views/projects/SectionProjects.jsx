import { Box, Grid } from '@mui/material'
import React from 'react'
import { Projects } from './Projects'
import { ProjectsMobil } from './ProjectsMobil'

export const SectionProjects = () => {
  return (

      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ededed',
        }}
      >

      { screen.width >= 1000 ? <Projects /> : <ProjectsMobil />}

      </Box>
  )
}
