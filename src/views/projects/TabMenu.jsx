import React, { useEffect, useState } from 'react'
import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CodeIcon from '@mui/icons-material/Code';
import ListIcon from '@mui/icons-material/List';

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
                            fontSize: '5rem',
                            textAlign: 'center',
                            writingMode: 'vertical-rl',
                            textOrientation: 'upleft',
                            color: 'black',
                            fontFamily: 'Roboto'
                        }}
                    >
                        Seleccione Proyecto
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
                                xs={11}
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
                                xs={1}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            >

                                <Tabs
                                    value={value}
                                    onChange={handleChangeTab}
                                    aria-label="icon label tabs example"
                                    sx={{
                                    }}
                                >
                                    <Tab icon={<ListIcon />} sx={{ width: '50%', color: '#1e1e1e', fontWeight: 800 }} label="Menu" id="icon-list-menu" />
                                    <Tab icon={<CodeIcon />} sx={{ width: '50%', color: '#1e1e1e', fontWeight: 800 }} label="Tecnologias" id="icon-list-code" />
                                </Tabs>

                            </Grid>

                        </Grid>
                    )
            }



        </Box>
    )
}
