import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import style from "./mydetails.module.css";
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';


const MyDetails = (props) => {
    const [details, setDetails] = useState([])
    const [data_, setData] = useState()
    const [totalAmount, setTotalAmount] = useState(0)
    const [payment, setPayment] = useState(false)


    useEffect(() => {
        const userId = localStorage.getItem("userId")

        localStorage.setItem("detailsids", "")
        localStorage.setItem("title", [])
        localStorage.setItem("totalAmount", 0)
        localStorage.setItem("description", "")

        axios.get(`http://localhost:3001/user/getMyDetails/${userId}`)
            .then(response => {
                setDetails(response.data)
                console.log(response)
            })

            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleDelete = (detailsid) => {
        axios.delete(`http://localhost:3001/user/deletedetails/${detailsid}`)
            .then(response => {
                setDetails(response.data)
                console.log(response)
                alert("Deleted Successfully")
            })
            .catch(err => {
                console.log(err)
                alert("Unable to delete")
            })
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
                                    <NavLink className={style.nav_link} to="/mydetails">My Campaign for fundraising</NavLink>
                                    <NavLink className={style.nav_link} to="#">List of Donation</NavLink>
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
            <div className={style.heading}>
                <h1>My Campaign for fundraising</h1>
                <NavLink className={style.add} to="/addNew">Create a New Campaign</NavLink>
            </div>
            <div className={style.container}>
                {
                    details.map(item => {
                        const { detailsid, name, price, file, description } = item
                        return (
                            <>
                                <div className={style.single_product}>
                                    <div className={style.product_content}>
                                        <img className={style.product_img} src={file} />
                                        <div className={style.title}>Name: {name}</div>
                                        <div className={style.desc}>{description}</div>
                                        <div className={style.price}>Rs.{price}</div>
                                        <div className={style.content}>
                                            <div>
                                                <div className={style.cart}>
                                                    <NavLink className={style.addtocart} to={`/updateDetails/${detailsid}`}>Update</NavLink>
                                                    <div className={style.cart}> <button className={style.addtocart} onClick={() => handleDelete(detailsid)}>Delete</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MyDetails