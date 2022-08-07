import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonToggleTheme } from '../theme/ButtonToggleTheme';
import { Grid, Link } from '@mui/material';


const drawerWidth = 240;

const navItems = ['Inicio', 'Tecnologias', 'Cursos', 'Proyectos', 'Contacto'];

export const DrawerAppBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Developer Fullstack
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} href={`#${item}`}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} id="Inicio">
            <AppBar component="nav" color="white" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Grid container display="flex" justifyContent="space-between" alignItems="center" direction="row">
                        <Typography
                            variant="h6"
                            component="h6"
                            color="secondary"
                            textTransform="capitalize"
                            id="typography-logo"
                            sx={{
                                fontFamily: 'Segoe UI',
                                fontWeight: 'bold',
                                fontSize: {
                                    xs: '1.2rem',
                                    sm: '1.6rem'
                                },
                                textAlign: {
                                    xs: 'center',
                                    sm: 'start',
                                },
                                margin: '20px'
                            }}
                        >
                            <Link href="/" color="secondary" id="logo-nav" sx={{
                                textDecoration: 'none',
                            }}>
                                {'<LeonelDev />'}
                            </Link>
                        </Typography>

                        <Grid item display="flex">
                            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                {navItems.map((item) => (
                                    <Button href={`#${item}`} color="inherit" sx={{ fontFamily: 'Segoe UI', fontSize: '1rem', fontWeight: '600' }} key={item} >
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                            <ButtonToggleTheme />
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ width: '100%', height: '100%' }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}
