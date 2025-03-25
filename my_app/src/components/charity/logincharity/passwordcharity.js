import React from 'react';
import style from "./password.module.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Passwordcharity = () => {
    const [email, setEmail] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    const handleUpdate = () => {
        console.log(email, newpassword, confirmpassword);
        if (email === '') return alert("please enter Email Id")
        if (!validateEmail(email)) return alert("Invalid Email")
        if (newpassword !== confirmpassword) return alert("Incorrect Password")
        let inputObj = {
            email, newpassword
        }
        axios.put(`http://localhost:3001/user/updatePassword/${email}`, inputObj)
            .then(response => {
                console.log(response);
                alert("Password Reset Successfull")
            })
            .catch(err => {
                console.log(err);
                alert("Failed To Reset Password")
            })
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.headding}>
                        <h1>Reset your Password</h1>
                    </div>
                    <form className={style.login} action="" method="get">
                        <div className={style.formGroup}>
                            <input type="email" placeholder="Email ID" onChange={handleEmail} value={email}/>
                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="New Password" onChange={handleNewPassword} value={newpassword} />
                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={confirmpassword}/>
                        </div>
                        <div className={style.formGroup}>
                            <button type="button" className={style.btn} onClick={handleUpdate}>Reset Password</button>                            
                        </div>
                        <div className={style.password}>
                            <NavLink className={style.password} to="/logincharity">Return to login</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Passwordcharity