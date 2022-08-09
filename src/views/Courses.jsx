import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, Collapse, Typography, IconButton, Button, Link } from '@mui/material'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardMembershipSharpIcon from '@mui/icons-material/CardMembershipSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const Courses = ({
    id,
    name,
    technologies,
    plataform,
    url,
    link,
    certificate,
    level,
    status,
    hours
}) => {

    const ButtonCertificate = () => {
        return (
            <Button
                variant="contained"
                fullWidth
                startIcon={<CardMembershipSharpIcon />}
                href={`${certificate}`}
                target="_blank"
                sx={{
                    mt: 1,
                    transition: '0.1s ease-in-out',
                    backgroundColor: 'secondary.main',
                    '&:hover': {
                        backgroundColor: 'rgba(224, 36, 1, 0.75)',
                        transform: 'scale(1.03)'
                    }
                }}
            >
                Certificado
            </Button>
        )
    }

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            minWidth: 200,
            maxWidth: 300,
            border: '1px solid rgba(0,0,0,0.2)',
            position: 'relative',
            transition: '0.3s ease-in-out',
            '&:hover': {
                boxShadow: '11px 11px 0px -5px rgba(225,225,225,0.88)',
                transform: 'translate(-2%, -2%)'
            }
        }}
            key={id.toString()}
        >
            <CardMedia
                component="img"
                height="194"
                image={`${url}`}
                alt={`${name}`}
            />
            <CardContent>
                <Typography variant="b" display="flex" justifyContent="center" color="inherit" textTransform="uppercase">
                    <b>{`${name}`}</b>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent display="flex" sx={{ flexDirection: "column" }}>

                    <Typography
                        variant="p"
                        fontSize="0.9rem"
                        fontFamily="Segoe UI"
                        display="flex"
                        textTransform="uppercase"
                        color="inherit"
                    >
                        <b>Plataforma:</b> <Typography component="p" fontSize="0.9rem" textTransform="uppercase"> &nbsp; {plataform} </Typography>
                    </Typography>

                    <Typography
                        variant="p"
                        fontSize="0.9rem"
                        fontFamily="Segoe UI"
                        display="block"
                        textTransform="uppercase"
                        color="inherit"
                        sx={{ mt: 1 }}
                    >
                        <b>Tecnologias:</b> {technologies.map(tech =>
                            <Typography key={tech} variant="p" fontSize="0.9rem" textTransform="uppercase"> / {tech} </Typography>
                        )}
                    </Typography>

                    <Typography
                        variant="p"
                        fontSize="0.9rem"
                        fontFamily="Segoe UI"
                        display="flex"
                        textTransform="uppercase"
                        color="inherit"
                        sx={{ mt: 1 }}
                    >
                        <b>Nivel:</b> <Typography component="p" fontSize="0.9rem" textTransform="uppercase"> &nbsp; {level} </Typography>
                    </Typography>

                    <Typography
                        variant="p"
                        fontSize="0.9rem"
                        fontFamily="Segoe UI"
                        display="flex"
                        textTransform="uppercase"
                        color="inherit"
                        sx={{ mt: 1 }}
                    >
                        <b>Estado:</b> <Typography component="p" fontSize="0.9rem" textTransform="uppercase"> &nbsp; {status} </Typography>
                    </Typography>

                    <Typography
                        variant="p"
                        fontSize="0.9rem"
                        fontFamily="Segoe UI"
                        display="flex"
                        textTransform="uppercase"
                        color="inherit"
                        sx={{ mt: 1 }}
                    >
                        <b>Horas:</b> <Typography component="p" fontSize="0.9rem" textTransform="uppercase"> &nbsp; {hours} </Typography>
                    </Typography>


                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<SchoolSharpIcon />}
                        href={`${link}`}
                        target="_blank"
                        sx={{
                            mt: 1,
                            backgroundColor: 'secondary.main',
                            transition: '0.1s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'rgba(224, 36, 1, 0.75)',
                                transform: 'scale(1.03)'
                            }
                        }}
                    >
                        Ver Curso
                    </Button>

                    {certificate !== "" && <ButtonCertificate />}

                </CardContent>
            </Collapse>
        </Card>
    )
}
