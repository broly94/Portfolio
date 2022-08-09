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
        marginTop: '500px'

      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Typography
                variant='h4'
                gutterBottom
                component='h4'
                textTransform="uppercase"
                fontFamily='Segoe UI'
                color="inherit"
                sx={{
                    paddingY: '20px',
                    marginY: '20px',
                    textAlign: 'center',
                    fontSize: {
                        xs: '1.4rem',
                        sm: '2rem'
                    }
                }}
            >
                Contacto
            </Typography>
      </Box>

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
