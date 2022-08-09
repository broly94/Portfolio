import React from 'react'
import { Avatar, Box } from '@mui/material'

export const Header = () => {

    return (
        <Box
            sx={{
                width: '100%',
                height: '70vh',
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <Avatar
                alt="development"
                src="images/header/mi_foto.png"
                sx={{
                    position: 'relative',
                    width: '150px',
                    height: '150px',
                    border: '5px solid rgba(255, 255, 255, 1)',
                    left: '50%',
                    transform: 'translate(-50%)',
                    bottom: '-85%',
                    
                }}
            />
        </Box>
    )
}
