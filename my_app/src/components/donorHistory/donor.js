import React, { useState, useEffect } from 'react';
import style from "./donor.module.css";
import axios from 'axios';
import Nav from '../../componentsAfterLogin/navAfterLogin/nav';

const DonorHistory = () => {
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId")

    axios.get(`http://localhost:3001/user/getPaymentDetails/${userId}`)
      .then(response => {
        setDonate(response.data)
        console.log(response)
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      })
  }, [])


  return (
    <>
    <Nav/>
      <div className={style.heading} >
        <h1>Donated Details </h1>
      </div>
      <div className={style.container}>
        {
          donate.map(donate => {
            const { amount, mode, PhoneNumber, fullname, status } = donate
            return (
              <div className={style.single_product}>
                <div className={style.product_content}>
                  <div className={style.title}>Name: {fullname}</div>
                  <div className={style.price}>Amount: {amount}</div>
                  <div className={style.desc}>Mode: {mode}</div>
                  <div className={style.desc}>PhoneNumber: {PhoneNumber}</div>
                  <div className={style.desc}>Status:<span className={style.desc1}>{status}</span></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DonorHistory
