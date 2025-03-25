import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./education.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../navbar/navbar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import CakeIcon from '@mui/icons-material/Cake';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Education = () => {
    const [Education, setEducation] = useState([])

    useEffect((category) => {
        const inpobj = {
            category
        }
        axios.get(`http://localhost:3001/user/getEducation/'${category}'`, inpobj)
            .then(response => {
                setEducation(response.data)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Navbar />
            <div className={style.heading} >
                <h1>Thousands are crowdfunding for various causes. Support a fundraiser today.</h1>
            </div>
            <div className={style.nav_button}>
                <NavLink className={style.nav_btn} to="/medical">< LocalHospitalIcon />Medical</NavLink>
                <NavLink className={style.nav_btn} to="/animal"><PetsIcon />Animal</NavLink>
                <NavLink className={style.nav_btn} to="/memorial"><CakeIcon />Memorial</NavLink>
                <NavLink className={style.nav_btn} to="/wedding"><Diversity1Icon />Wedding</NavLink>
            </div>
            <div className={style.container}>
                {
                    Education.map(Education => {
                        const { Educationid, name, description, price, file } = Education
                        return (


                            <div className={style.single_product}>
                                <div className={style.product_content}>
                                    <img className={style.product_img} src={file} alt='' />
                                    <div className={style.title}>Name: {name}</div>
                                    <div className={style.desc}>{description}</div>
                                    <div className={style.cart}>
                                        <div className={style.price}>Rs.{price}</div>
                                        <div><NavLink className={style.addtocart} to="/login" >Donate</NavLink></div>
                                    </div>
                                    {/* <div className={style.rating}>
                                        <progress className={style.rating} value="42" max="100"> 42% </progress>
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

export default Education


