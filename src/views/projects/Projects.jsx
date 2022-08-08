import { Box } from '@mui/system'
import React from 'react'
import { ImagesProjects } from './ImagesProjects'
import { TabMenu } from './TabMenu'

export const Projects = () => {
    return (
        <Box
            display="flex"
            justifyContent='start'
            alignItems='start'
            sx={{
                width: '100%',
                height: '100%',
            }}
        >

            <Box
                sx={{
                    backgroundColor: '#1e1e1e',
                    minHeight: '100vh',
                    height: 'auto',
                    color: '#FFFFFF',
                    width: '70%',
                    padding: '50px',
                   
                }}
            >
                <ImagesProjects />
            </Box>

            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#1e1e1e',
                    width: '30%',
                    minWidth: '400px',
                    height: '95vh',
                    position: 'sticky',
                    top: '80px'
                }}
            >
                <TabMenu />

            </Box>

        </Box>
    )
}
