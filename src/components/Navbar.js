import React from 'react';
import "../styles/Navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {

    return (
        <AppBar position="static" className='container-navbar'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                className='title'
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                }}
            >
                FLEET
            </Typography>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                }}
            >
                FLEET
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Eylon Soussan" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};
export default Navbar;
