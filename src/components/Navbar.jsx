import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Application
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={NavLink} to="/" exact activeClassName="active">
                        Home
                    </Button>
                    <Button color="inherit" component={NavLink} to="/statistics" activeClassName="active">
                        Dashboard
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
