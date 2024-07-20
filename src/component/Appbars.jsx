import React, { useState, useEffect } from "react";
import { Typography, AppBar, Grid, Toolbar, Box, Link, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

const Appbars = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isScrolled = scrollPosition > 450;
    const appBarBackground = isScrolled ? '#FFFF' : 'transparent';
    const textColor = isScrolled ? 'black' : 'white';

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: appBarBackground,
                    boxShadow: isScrolled ? '0px 2px 5px rgba(0, 0, 0, 0.3)' : 'none',
                    transition: 'background 0.3s',
                    height: '60px',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Link component={RouterLink} to="/profile" sx={{ pr: 2, pl: 2, color: textColor, textDecoration: 'none' }}>
                                    <Typography variant="h6">
                                        Kridcharid Srikam
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                                <MenuIcon sx={{ color: textColor }} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem component={RouterLink} to="/profile" onClick={handleMenuClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem component={RouterLink} to="/activities" onClick={handleMenuClose}>
                                    Activities
                                </MenuItem>
                                <MenuItem component={RouterLink} to="/certificate" onClick={handleMenuClose}>
                                    Certificate
                                </MenuItem>
                                <MenuItem component={RouterLink} to="/contact" onClick={handleMenuClose}>
                                    Contact
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Grid container justifyContent="left" alignItems="left">
                            <Grid item>
                                <Box display="flex" justifyContent="center" alignItems="center" >
                                    <Link component={RouterLink} to="/profile" sx={{ pr: 2, pl: 2, color: textColor, textDecoration: 'none' }}>
                                        <Typography variant="h6">
                                            Profile
                                        </Typography>
                                    </Link>
                                    <Link component={RouterLink} to="/activities" sx={{ pr: 2, pl: 2, color: textColor, textDecoration: 'none' }}>
                                        <Typography variant="h6">
                                            Activities
                                        </Typography>
                                    </Link>
                                    <Link component={RouterLink} to="/certificate" sx={{ pr: 2, pl: 2, color: textColor, textDecoration: 'none' }}>
                                        <Typography variant="h6">
                                            Certificate
                                        </Typography>
                                    </Link>
                                    <Link component={RouterLink} to="/contact" sx={{ pr: 2, pl: 2, color: textColor, textDecoration: 'none' }}>
                                        <Typography variant="h6">
                                            Contact
                                        </Typography>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Appbars;
