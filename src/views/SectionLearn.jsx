import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import { courses } from '../data/learn.json';
import { Courses } from './Courses';

export const SectionLearn = () => {

    return (

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={3}
            id="Cursos"
            sx={{
                height: 'auto',
                width: '100%',
                padding: { xs: '10px', sm: '20px' },
                marginY: '30px'
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
                Cursos Realizados
            </Typography>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap='wrap'
                gap={2}
                data-aos="fade-up"
                sx={{
                    padding: '10px',
                    flexDirection: 'row',
                    overflow: 'hidden'
                }}
            >

                {
                    courses.map(course => (
                        <Courses key={course.id.toString()}  {...course} />
                    ))
                }

            </Box>



        </Box>

    )
}
