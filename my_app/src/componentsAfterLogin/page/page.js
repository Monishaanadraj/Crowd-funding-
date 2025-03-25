import React, { useState } from 'react';
import style from "./page.module.css";
import { NavLink , Navigate } from "react-router-dom";
import axios from "axios";

const Page = () => {
 
    const [fullname, setfullname] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [amount, setAmount] = useState("")
    const [isValidUser, setValidUser] = useState(false)

    const handleOrderAddress = () => {
        if (fullname === '') return alert('Enter Name')
        if (PhoneNumber === '') return alert('Enter Phone Number')
        if (amount === '') return alert("Enter Amount")

        console.log(fullname,PhoneNumber,amount);
        // const address_ = `${fullname},${amount},PH: ${PhoneNumber}`
        localStorage.setItem("amount", amount)
        localStorage.setItem("fullname",fullname)
        localStorage.setItem("PhoneNumber",PhoneNumber)
        setValidUser(true)
        // axios.post("http://localhost:3001/user/address", inputObj)
        //     .then(response => {
        //         console.log(response);
        //         setValidUser(true)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         alert("Failed To proceed")
        //     })

    }

    
    if (isValidUser) {
        return <Navigate to="/index" />
    }

    return (

        <>
            <div className={style.logincontainer}>
                <div className={style.container}>
                    <div className={style.form}>
                        <div className={style.headding}>
                            <h1>Make a secure donation</h1>
                        </div>
                        <div classname={style.content}>
                            <span className={style.content}><NavLink className={style.content} to="/donates">Go Back</NavLink></span>
                        </div>
                        <form className={style.login} action="" method="get">
                            <div className={style.formGroup}>
                                <label>Name</label><span>*</span>
                                <input type="text" id="Email" placeholder="Enter Name" value={fullname} onChange={(e)=>setfullname(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Phone Number</label><span>*</span>
                                <input type="number" placeholder="Phone number" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                                <label>Amount</label><span>*</span>
                                <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                            </div>
                            <div className={style.formGroup}>
                               <NavLink><button  className={style.btn} onClick={handleOrderAddress}>Proceed</button> </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page