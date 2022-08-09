import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const SectionContact = () => {
  return (

    <Box
      display="flex"
      justifyContent="end"
      alignItems="end"
      flexDirection="column"
      id="Contacto"
      sx={{
        width: '100%',
        height: '30vh',
        backgroundColor: 'primary.main',
        marginTop: '100px'

      }}
    >

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1e1e1e" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,117.3C384,96,480,64,576,85.3C672,107,768,181,864,176C960,171,1056,85,1152,74.7C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}

      <Box
        display="flex"
        justifyContent="center"
        alignItem="center"
        flexDirection="row"
        sx={{
          width: '100%',
          position: "relative",
          bottom: '-150%'
        }}
      >

        <IconButton href="https://github.com/broly94" target="_blank" >
          <GitHubIcon fontSize="large" color="white" sx={{ transition: '0.3s all',  '&:hover': { color:'secondary.main' }}}  />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/leonel-carro/" target="_blank" >
          <LinkedInIcon fontSize="large" color="white" sx={{ transition: '0.3s all',  '&:hover': { color:'secondary.main' }}}  />
        </IconButton>

        <IconButton href="https://wa.me/1136713336" >
          <WhatsAppIcon fontSize="large" color="white" sx={{ transition: '0.3s all',  '&:hover': { color:'secondary.main' }}} />
        </IconButton>


      </Box>

      <Box
        display="flex"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        sx={{
          width: "100%",
          maxHeight: "500px",
        }}

      >

        <Box
          component="img"
          src="images/wave.png"
          sx={{
            width: "100%",
            height: "500px"
          }}
        >
        </Box>

      </Box>


    </Box >

  )
}
