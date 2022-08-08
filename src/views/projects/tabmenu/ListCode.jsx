import { Box } from '@mui/material'
import React from 'react'

export const ListCode = ({ data }) => {

    return (
        <>

            {
                data.map(element => (
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDirection="column"
                        sx={{
                            height: '100%',
                        }}
                        key={element.id}
                    >
                        {
                            element.technologies.map(tech => (
                                <Box
                                    component="img"
                                    sx={{
                                        maxWidth: '200px',
                                        maxHeight: '150px',
                                    }}
                                    src={`${tech}`}
                                >
                                </Box>
                            ))
                        }
                    </Box>
                ))

            }

        </>


    )
}
