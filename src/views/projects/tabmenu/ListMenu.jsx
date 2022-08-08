import { Divider, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const ListMenu = React.memo(({ data }) => {

    return (

        <>
            {
                data.map(project => (
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDirection='column'
                        sx={{
                            height: '100%',
                        }}
                        key={project.id}
                    >

                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='start'
                            alignItems='center'
                            sx={{
                                height: '80%',
                                paddingTop: '80px'
                            }}
                        >
                            <Typography
                                sx={{
                                    componet: 'h2',
                                    fontSize: '3rem',
                                    textTransform: 'uppercase',
                                    fontWeight: 600
                                }}
                                data-aos="fade-down"
                            >
                                {project.name}
                            </Typography>

                            <Typography
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    marginTop: '2.5rem',
                                    fontFamily: 'Roboto',
                                    fontSize: '2rem',
                                    paddingX: '2rem'
                                }}
                                data-aos="fade-down"
                            >
                                {project.description}
                            </Typography>
                            

                        </Box>

                        <Box
                            display='flex'
                            justifyContent='start'
                            alignItems='center'
                            flexDirection='column'
                            sx={{
                                height: '120%',
                                marginLeft: '40%'
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontFamily="Roboto"
                                fontSize="4rem"
                                sx={{
                                    transition: '0.2s ease',
                                    '&:hover': {
                                        transform: 'translate(-10px)',
                                    }

                                }}
                            >
                                <Link
                                    href={`${project.githubLink}`}
                                    target="_blank"
                                    sx={{
                                        color: "#000000",
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        fontSize: '5rem',
                                        transition: '0.2s ease',
                                        '&:hover': {
                                            color: 'secondary.main'
                                        },

                                    }}
                                >
                                    Github
                                </Link>

                            </Typography>

                            <Divider />

                            <Typography
                                variant="h2"
                                fontFamily="Roboto"
                                fontSize="4rem"
                                sx={{
                                    transition: '0.2s ease',
                                    '&:hover': {
                                        transform: 'translate(-10px)',
                                    }

                                }}
                            >
                                <Link
                                    href={`${project.pageLink}`}
                                    target="_blank"
                                    sx={{
                                        color: "#000000",
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        transition: '0.2s ease',
                                        fontSize: '5rem',
                                        '&:hover': {
                                            color: 'secondary.main'
                                        }
                                    }}
                                >
                                    Web
                                </Link>

                            </Typography>

                        </Box>
                    </Box>
                ))
            }
        </>
    )
})
