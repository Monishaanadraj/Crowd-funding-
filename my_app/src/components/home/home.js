import React from "react";
import style from "./home.module.css";
import bg from "../images/b8.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Home = () => {

    return (
        <>
            <div className={style.banner}>
                <div className={style.bannerImages} >
                    <div className={style.bannerImage1}>
                        <img className={style.image1} src={bg} alt="" />
                    </div>
                    <div className={style.container}>
                        <Navbar />
                        <div className={style.banner_text}>
                            <h2>TOGETHER WE CAN</h2>
                            <h1>Save lives</h1>
                            <h3>Giving is not just about making a donation. It is about making a difference.</h3>
                            <div>
                                <button type="button" className={style.nav_btn}>
                                    <NavLink className={style.nav_btn} to="/login">Start with a little</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home