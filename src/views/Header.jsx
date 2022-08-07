import React from 'react'
import { Avatar, Box } from '@mui/material'

export const Header = () => {

    return (
        <Box
            sx={{
                width: '100%',
                height: '40vh',
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <Avatar
                alt="development"
                src="images/header/mi_foto.png"
                data-aos="flip-right"
                sx={{
                    position: 'relative',
                    width: '150px',
                    height: '150px',
                    border: '5px solid rgba(255, 255, 255, 1)',
                    top: {
                        xs: '75%',
                        sm: '75%',
                    },
                    left: {
                        xs: '35%',
                        sm: '44%',
                    }
                }}
            />
        </Box>
    )
}
