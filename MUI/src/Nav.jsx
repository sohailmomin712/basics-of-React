import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Pages = ['Home', 'Login', 'Features', 'About']

const Nav = () => {
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event) => {
        setAnchorNav(event.currentTarget); // Set the anchor element
    };

    const closeMenu = () => {
        setAnchorNav(null); // Clear the anchor element
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }} >
                        <LocalLibraryIcon />
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} > Welcome </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}  >
                        {/* <Button color='inherit'>Home</Button>
                        <Button color='inherit' >Login</Button>
                        <Button color='inherit' >Features</Button>
                        <Button color='inherit' >About</Button> */}
                        {
                            Pages.map((page, index) => (
                                <Button key={index} color="inherit">{page}</Button>
                            ))
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}  >
                        <IconButton size='large' edge='start' color="inherit" onClick={openMenu} >
                            <MenuIcon />
                        </IconButton>
                        <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }} >
                            {/* <MenuList>
                                <MenuItem>Home</MenuItem>
                                <MenuItem>Login</MenuItem>
                                <MenuItem>Features</MenuItem>
                                <MenuItem>About</MenuItem>
                            </MenuList> */}
                            {
                                Pages.map((page, index) => (
                                    <MenuItem key={index}>{page}</MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <IconButton size="large" edge="start" color="inherit" aria-label='logo' sx={{ display: { xs: '', md: 'none' } }} >
                        <LocalLibraryIcon />
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} > Welcome </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
