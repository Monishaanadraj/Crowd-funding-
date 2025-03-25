import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./medicals.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import Nav from '../../navAfterLogin/nav';
import SchoolIcon from '@mui/icons-material/School';
import PetsIcon from '@mui/icons-material/Pets';
import CakeIcon from '@mui/icons-material/Cake';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Medicals = () => {
    const [medical, setmedical] = useState([])

    useEffect((category) => {
        const inpobj = {
            category
        }
        axios.get(`http://localhost:3001/user/getmedical/'${category}'`, inpobj)
            .then(response => {
                setmedical(response.data)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Nav />
            <div className={style.heading} >
                <h1>Thousands are crowdfunding for various causes. Support a fundraiser today.</h1>
            </div>
            <div className={style.nav_button}>
                <NavLink className={style.nav_btn} to="/educations"><SchoolIcon />Education</NavLink>
                <NavLink className={style.nav_btn} to="/animals"><PetsIcon />Animal</NavLink>
                <NavLink className={style.nav_btn} to="/memorials"><CakeIcon />Memorial</NavLink>
                <NavLink className={style.nav_btn} to="/weddings"><Diversity1Icon />Wedding</NavLink>
            </div>
            <div className={style.container}>
                {
                    medical.map(medical => {
                        const {detailsid, name, description, price, file } = medical
                        return (


                            <div className={style.single_product}>
                                <div className={style.product_content}>
                                    <img className={style.product_img} src={file} alt='' />
                                    <div className={style.title}>Name: {name}</div>
                                    <div className={style.desc}>{description}</div>
                                    <div className={style.cart}>
                                        <div className={style.price}>Rs.{price}</div>
                                        <div><NavLink className={style.addtocart} to="/page">Donate</NavLink></div>
                                    </div>
                                    {/* <div className={style.rating}>
                                        <progress className={style.rating} value="42" max="100"></progress>
                                    </div> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Medicals