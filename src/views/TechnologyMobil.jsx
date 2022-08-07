import React from 'react'
import { tech } from '../data/technologies'
import { Box } from '@mui/system'

export const TechnologyMobil = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            flexWrap="wrap"
            sx={{
                width: '100%',
                padding: '0px',
                overflow: 'hidden'
            }}
        >

            {
                tech.map(tec => (
                    <Box
                        component='img'
                        src={`images/technologies/${tec.url}`}
                        key={`${tec.id}`}
                        sx={{
                            padding: '20px',
                            margin: '20px',
                            maxWidth: '200',
                            maxHeight: '140px',
                            borderRadius: '5px',
                        }}
                    >

                    </Box>
                ))
            }


        </Box>
    )
}
