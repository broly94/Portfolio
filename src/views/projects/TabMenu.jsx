import React, { useEffect, useState } from 'react'
import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CodeIcon from '@mui/icons-material/Code';
import ListIcon from '@mui/icons-material/List';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ListMenu } from './tabmenu/ListMenu'
import { ListCode } from './tabmenu/ListCode'

export const TabMenu = ({ data, idProject }) => {

    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(0)
    }, [idProject])

    const projectSelected = data.filter(project => project.id === idProject);

    return (

        <Box
            display='flex'
            justifyContent="center"
            alignItems="center"
            sx={{
                height: '100%',
            }}
        >

            {
                projectSelected.length <= 0
                    ?
                    <Typography
                        sx={{
                            fontSize: '4rem',
                            textAlign: 'center',
                            writingMode: 'vertical-rl',
                            textOrientation: 'upleft',
                            fontFamily: 'Roboto'
                        }}
                    >
                        Seleccione
                        <ArrowBackIcon color="white" fontSize="1rem" sx={{ marginTop: '20px' }} />
                    </Typography>
                    :
                    (
                        <Grid
                            container
                            direction="column"
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    height: '100%',
                                }}
                            >

                                {
                                    value === 0 ? <ListMenu data={projectSelected} /> : <ListCode data={projectSelected} />
                                }

                            </Grid>

                            <Grid
                                item
                                xs={2}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            >

                                <Tabs
                                    value={value}
                                    onChange={handleChangeTab}
                                    aria-label="icon label tabs example"
                                    textColor="secondary.main"
                                    indicatorColor="secondary"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <Tab
                                        icon={<ListIcon sx={{ color: '#FFFFFF' }} />}
                                        alignSelft='end'
                                        sx={{ color: '#FFFFFF', width: '50%', fontWeight: 600, fontSize: 'small', alignSelft: 'end' }}
                                        label="Menu"
                                        id="icon-list-menu"
                                    />

                                    <Tab
                                        icon={<CodeIcon sx={{ color: '#FFFFFF' }} />}
                                        sx={{ width: '50%', fontWeight: 600, fontSize: 'small' }}
                                        label="Tecnologias"
                                        id="icon-list-code" />
                                </Tabs>

                            </Grid>

                        </Grid>
                    )
            }



        </Box>
    )
}
