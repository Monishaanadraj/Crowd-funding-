import React, { useEffect } from "react";
import style from "./signup.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isValidUser, setValidUser] = useState(false)

    useEffect(() => {
        localStorage.setItem("userId",userId)
    })

    const handleRegister = () => {
        if (username === '') return alert('Enter username')
        if (email === '') return alert('Enter email Id')
        if (!validateEmail(email)) return alert("Invalid Email")
        if (password === '') return alert('Enter password')
        if (password !== confirmPassword) return alert("Incorrect Password")

        console.log(username, password, email, confirmPassword);
        let inputObj = {
            username, email, password, confirmPassword

        }

        axios.post("http://localhost:3001/user/addNewUser", inputObj)
            .then(response => {
                console.log(response);
                // localStorage.setItem("userId",response.data[0].userId)
                alert("Successfully Registered")
                setValidUser(true)
            })
            .catch(err => {
                console.log(err);
                alert("Failed To Register")
            })

    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    if (isValidUser) {
        return <Navigate to="/login" />
    }

    return (

        <>
            <div className={style.container}>
                <div className={style.form}>
                    <div className={style.headding}>
                        <h1>Sign Up</h1>
                    </div>
                    <div className={style.content}>
                        <h5 className={style.content}>Already have an account?&nbsp;
                            <span className={style.content}><NavLink className={style.content1} to="/login">Log In</NavLink></span>
                        </h5>
                    </div>
                    <form className={style.signUp} action="" method="get">
                        <div className={style.formGroup}>
                            <input type="text" id="userName" placeholder="User Name" onChange={handleUsername} value={username} />

                        </div>
                        <div className={style.formGroup}>
                            <input type="email" placeholder="Email ID" onChange={handleEmail} value={email} />

                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="Password" onChange={handlePassword} value={password} />

                        </div>
                        <div className={style.formGroup}>
                            <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={confirmPassword} />

                        </div>
                        <div className={style.formGroup}>
                            <button type="button" className={style.btn} onClick={handleRegister} >REGISTER</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup