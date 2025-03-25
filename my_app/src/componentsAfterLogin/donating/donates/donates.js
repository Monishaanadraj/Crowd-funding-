import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./donates.module.css";
import axios from 'axios';
import Nav from '../../navAfterLogin/nav';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import PetsIcon from '@mui/icons-material/Pets';
import CakeIcon from '@mui/icons-material/Cake';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Donates = () => {
  const [donate, setDonate] = useState([]);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")
  const [isValid, setIsvalid] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/user/getAlldetails")
      .then(response => {
        setDonate(response.data)
        setName(localStorage.setItem("name"))
        setDescription(localStorage.setItem("description"))
        setFile(localStorage.setItem("file"))
        console.log(response)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])


  return (
    <>
      <Nav />
      <div className={style.heading} >
        <h1>Thousands are crowdfunding for various causes. Support a fundraiser today.</h1>
      </div>
      <div className={style.nav_button}>
        <NavLink className={style.nav_btn} to="/medicals"><LocalHospitalIcon />Medical</NavLink>
        <NavLink className={style.nav_btn} to="/educations"><SchoolIcon />Education</NavLink>
        <NavLink className={style.nav_btn} to="/animals"><PetsIcon />Animal</NavLink>
        {/* <NavLink className={style.nav_btn} to="/memorials"><CakeIcon />Memorial</NavLink> */}
        <NavLink className={style.nav_btn} to="/weddings"><Diversity1Icon />Wedding</NavLink>
      </div>
      <div className={style.container}>
        {
          donate.map(donate => {
            const { detailsid,name, description, price, file } = donate
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

export default Donates
