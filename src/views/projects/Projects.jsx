import { Box } from '@mui/system'
import React, { useState } from 'react'
import { ImagesProjects } from './ImagesProjects'
import { TabMenu } from './TabMenu'

export const Projects = ({data}) => {

    const [ id, setId] =  useState(0);

    const getProjectId = (id) => {
        setId(id)
    }

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
                    padding: '0px',
                   
                }}
            >
                <ImagesProjects data={data} getProjectId={getProjectId} />
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
                <TabMenu data={data} idProject={id} />

            </Box>

        </Box>
    )
}
