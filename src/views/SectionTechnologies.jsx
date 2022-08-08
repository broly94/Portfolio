import React, { useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Technology } from './Technology'
import { TechnologyMobil } from './TechnologyMobil'

export const SectionTechnologies = () => {


    useEffect(() => {

    }, [screen.width])

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            id="Tecnologias"
            sx={{
                height: 'auto',
                width: '100%',
                padding: { xs: '5px', sm: '5px' },
                backgroundColor: '#ededed'
            }}
            
        >

            <Grid container sx={{ marginY: '100px', width: '90%'}} justifyContent="center">
                <Box
                    sx={{
                        marginBottom: '30px'
                    }}
                >
                    <Typography
                        variant="p"
                        color="primary"
                        gutterBottom
                        fontSize="1.5rem"
                        fontFamily="Segoe UI"
                        textTransform="uppercase"
                        sx={{
                            marginBottom: '40px',
                            textAlign: "center"
                        }}
                    >
                        Tecnologias utilizadas
                    </Typography>
                </Box>
                <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection='row'
                    flexWrap={true}
                    gap={1}
                    sx={{
                        width: "100%",
                        paddingY: '20px'
                    }}
                >

                    { screen.width >= 592 ? <Technology /> : <TechnologyMobil />}


                </Grid>
            </Grid>

        </Box>
    )
}
