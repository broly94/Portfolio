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
                        flexWrap={true}
                        sx={{
                            height: '100%',
                            width: '100%',
                            paddingTop: '30px',
                            overflow: 'hidden'
                        }}
                        key={element.id}
                    >
                        {
                            element.technologies.map(tech => (
                                <Box
                                    component="img"
                                    sx={{
                                        maxWidth: '200px',
                                        maxHeight: '200px',
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
