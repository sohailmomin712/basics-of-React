import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const Pages = ['Home', 'Login', 'Features', 'About'];

const Navbar = () => {
    const [anchorNav, setAnchorNav] = useState(null);
    const isMenuOpen = Boolean(anchorNav); // Helper variable for menu state

    const handleMenuOpen = (event) => setAnchorNav(event.currentTarget);
    const handleMenuClose = () => setAnchorNav(null);

    // Function to render the menu items
    const renderMenuItems = () =>
        Pages.map((page, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
                {page}
            </MenuItem>
        ));

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Common Logo and Title */}
                <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LocalLibraryIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    Welcome
                </Typography>

                {/* Desktop View */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {Pages.map((page, index) => (
                        <Button key={index} color="inherit">
                            {page}
                        </Button>
                    ))}
                </Box>

                {/* Mobile View */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu open={isMenuOpen} onClose={handleMenuClose}>
                        {renderMenuItems()}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
