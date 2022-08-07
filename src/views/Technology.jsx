import React from 'react'
import { tech } from '../data/technologies'
import { Box } from '@mui/material';
import Marquee from "react-fast-marquee";

export const Technology = () => {

    return (

        <>
            <Marquee
                pauseOnHover={true}
                speed={20}
                gradientColor={[225, 70, 48]}
                gradient={false}
            >
                {
                    tech.map((tech) =>
                        <Box
                            key={tech.id}
                            component="img"
                            sx={{
                                maxWidth: '100px',
                                padding: '5px',
                            }}
                            src={`../../public/images/technologies/${tech.url}`}
                        >
                        </Box>
                    )
                }
            </Marquee>
        </>

    )
}
