import React from "react";
import { NavLink } from "react-router-dom";
import style from './nav.module.css'
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

const Nav = () => {
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        {/* <IconButton color="inherit" arial-label='open drawer' edge="start"
                            sx={{ mr: 2, display: { sm: "none" }, }} onClick={handleDrawerToggle} >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1 }} >
                            <PaidRoundedIcon />
                            CROWD FUNDING
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <nav className={style.navbar}>
                                <div className={style.nav_link}>
                                    <NavLink className={style.nav_link} to="/homepage"> Home </NavLink>
                                    <NavLink className={style.nav_link} to="/aboutus">About Us</NavLink>
                                    <NavLink className={style.nav_link} to="/contactus">Contact Us</NavLink>
                                    <NavLink className={style.nav_link} to="/donates">Donate</NavLink>
                                    <NavLink className={style.nav_link} to="/donor">Donated Details</NavLink>
                                    <NavLink className={style.nav_link} to="/">Log out</NavLink>
                                </div>
                            </nav>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
            
        </>
    )
}
export default Nav