import React from "react";
import style from "./homepage.module.css";
import bg from "../../components/images/b8.jpg";
import { NavLink } from "react-router-dom";
import Nav from "../navAfterLogin/nav";

const Homepage = () => {

    return (
        <>
            <div className={style.banner}>
                <div className={style.bannerImages} >
                    <div className={style.bannerImage1}>
                        <img className={style.image1} src={bg} alt="" />
                    </div>
                    <div className={style.container}>
                        <Nav/>
                        <div className={style.banner_text}>
                            <h2>TOGETHER WE CAN</h2>
                            <h1>Save lives</h1>
                            <h3>Giving is not just about making a donation. It is about making a difference.</h3>
                            <div>
                                <button type="button" className={style.nav_btn}>
                                    <NavLink className={style.nav_btn} to="/donates">Start with a little</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage