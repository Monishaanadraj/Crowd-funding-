import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Drawer} from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

const AdminNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
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
                                    <NavLink className={style.nav_link} to="/admin/view"> View Campaign </NavLink>
                                    <NavLink className={style.nav_link} to="/admin/history"> List of Donation </NavLink>
                                    <NavLink className={style.nav_link} to="/"> Log Out  </NavLink>
                                </div>
                            </nav>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{
                        display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                        },
                    }}>
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}
export default AdminNavbar