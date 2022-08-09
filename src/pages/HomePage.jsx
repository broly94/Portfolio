import { Typography } from '@mui/material'
import React from 'react'
import { DrawerAppBar } from '../components'
import { Header, SectionProjects, SectionAbout, SectionLearn, SectionTechnologies, SectionContact } from '../views'
import { BannerProjects } from '../views/projects/BannerProjects'


export const HomePage = () => {

    return (
        <DrawerAppBar>

            <Header />

            <SectionAbout />

            <SectionTechnologies />

            <SectionLearn />

            <BannerProjects />

            <SectionProjects />

            <SectionContact />

        </DrawerAppBar>
    )
}
