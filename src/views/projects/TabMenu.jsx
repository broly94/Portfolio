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
                width: '100%',
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
                        <Box
                            container
                            direction="column"
                            sx={{
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Box
                                item
                                sx={{
                                    height: '80%',
                                    width: '100%',
                                }}
                            >

                                {
                                    value === 0 ? <ListMenu data={projectSelected} /> : <ListCode data={projectSelected} />
                                }

                            </Box>

                            <Box
                                sx={{
                                    width: '100%',
                                    height: '20%',
                                }}
                                display="flex"
                                alignItem="flex-end"
                            
                            >

                                <Tabs
                                    value={value}
                                    onChange={handleChangeTab}
                                    aria-label="icon label tabs example"
                                    textColor="secondary.main"
                                    indicatorColor="secondary"
                                    display="flex"
                                    sx={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'flex-end'
                                    }}
                                >
                                    <Tab
                                        icon={<ListIcon sx={{ color: '#FFFFFF' }} />}
                                        alignSelft='end'
                                        sx={{ color: '#FFFFFF', width: '50%', fontWeight: 600, fontSize: 'small' }}
                                        label="Menu"
                                        id="icon-list-menu"
                                    />

                                    <Tab
                                        icon={<CodeIcon sx={{ color: '#FFFFFF' }} />}
                                        sx={{ width: '50%', fontWeight: 600, fontSize: 'small' }}
                                        label="Tecnologias"
                                        id="icon-list-code" />
                                </Tabs>

                            </Box>

                        </Box>
                    )
            }



        </Box>
    )
}
