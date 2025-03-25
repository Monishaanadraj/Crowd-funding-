import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./view.module.css";
import { useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../navbar/navbar';

const Viewdetails = () => {
  const [details, setdetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/user/getAlldetails")
      .then(response => {
        setdetails(response.data)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleDelete = (detailsid) => {
    axios.delete(`http://localhost:3001/user/deletedetails/${detailsid}`)
        .then(response => {
            setdetails(response.data)
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
      <AdminNavbar/>
      <div className={style.heading} >
        <h1>View Campaign</h1>
      </div>
      {/* <NavLink className={style.add} to="/admin/add">Add New details</NavLink> */}
      <div className={style.container}>
        {
          details.map(details => {
            const { detailsid, name, description, price, file } = details
            return (

              <div className={style.single_product}>
                <div className={style.product_content}>
                  <img className={style.product_img} src={file} alt='' />
                  <div className={style.title}>Name: {name}</div>
                  <div className={style.desc}>{description}</div>
                  <div className={style.price}>Rs.{price}</div>
                  <div className={style.content}>
                    <div>
                      <div className={style.cart}>
                        <NavLink className={style.addtocart} to={`/admin/update/${detailsid}`}>Update</NavLink>
                        <div className={style.cart}> <button className={style.addtocart} onClick={() => handleDelete(detailsid)}>Delete</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Viewdetails


