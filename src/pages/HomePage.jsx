import React from 'react'
import { DrawerAppBar } from '../components'
import { Header, SectionProjects } from '../views'
import { SectionAbout } from '../views'
import { SectionLearn } from '../views'
import { SectionTechnologies } from '../views'
import { BannerProjects } from '../views/BannerProjects'


export const HomePage = () => {

    return (
        <DrawerAppBar>

            <Header />
            
            <SectionAbout />

            <SectionTechnologies />

            <SectionLearn />

            <BannerProjects />

            <SectionProjects />

        </DrawerAppBar>
    )
}
