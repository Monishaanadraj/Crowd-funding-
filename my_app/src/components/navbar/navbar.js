import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    return (
        <>

            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1 }} >
                            <PaidRoundedIcon />
                            CROWD FUNDING
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <nav className={style.navbar}>
                                <div className={style.nav_link}>
                                    <NavLink className={style.nav_link} to="/"> Home </NavLink>
                                    <Dropdown>
                                        <Dropdown.Toggle className={style.nav_link1} variant="success" id="dropdown-basic">
                                            LOGIN<ArrowDropDownIcon />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <NavLink className={style.nav_link2} to="/logincharity">Signup as fundraiser</NavLink>
                                            <NavLink className={style.nav_link2} to="/admin/login">Admin login</NavLink>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <NavLink className={style.nav_link} to="/about">About Us</NavLink>
                                    <NavLink className={style.nav_link} to="/contact">Contact Us</NavLink>
                                    <NavLink className={style.nav_link} to="/donate">Donate</NavLink>
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
export default Navbar