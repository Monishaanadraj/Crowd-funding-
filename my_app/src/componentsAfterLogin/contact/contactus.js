import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./contactus.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import contact1 from "../../components/images/contact.jpg";
import axios from "axios";
import Nav from "../navAfterLogin/nav";

const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => {
        if (name === '') return alert('Enter Name')
        if (email === '') return alert('Enter email Id')
        if (!validateEmail(email)) return alert("Invalid Email")
        if (message === '') return alert('Enter Your Message')


        console.log(name, email, message);
        let inputObj = {
            name, email, message

        }

        axios.post("http://localhost:3001/user/message", inputObj)
            .then(response => {
                console.log(response);
                alert("Successfully Sent")
            })
            .catch(err => {
                console.log(err);
                alert("Failed To Send")
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
            <Nav/>
            <section>
                <div>
                    <div className={style.bannerImage}>
                        <img className={style.bgimage1} src={contact1} alt="" />
                    </div>
                    <div className={style.head}>
                        <h1>Contact Us</h1>
                        <h2>We are here to help you and answer any questions you may have. Here is how to reach us!</h2>
                    </div>
                    <div className={style.container}>
                        <div className={style.contact_icons}>
                            <div className={style.icon}>
                                <LocationOnIcon style={{ fontSize: "60px" }} />
                                <span className={style.icons}> crowdfunding India Pvt. Ltd. Nextcoworks JP Nagar -
                                    Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout, 8th Phase, J. P. Nagar,
                                    Bangalore, Karnataka, India 560078</span>
                            </div>
                        </div>
                        <div className={style.contact_icons2}>
                            <div className={style.icon2}>
                                <EmailIcon style={{ fontSize: "60px" }} />
                                <span className={style.icons}>crowdfunding0928@gmail.com</span>
                            </div>
                            <div className={style.icon2}>
                                <CallIcon style={{ fontSize: "60px" }} />
                                <span className={style.icons}>080-7384298097</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.contactform}>
                        <h1>Let us know what you think</h1>
                        <div className={style.contact}>
                            <label>Name</label><span>*</span>
                            <input type="text" placeholder="Name" onChange={handleName} value={name} ></input>
                        </div>
                        <div className={style.contact}>
                            <label>Email Id</label><span>*</span>
                            <input type="email" placeholder="Email Id" onChange={handleEmail} value={email} ></input>
                        </div>
                        <div className={style.contact}>
                            <label>Message</label><span>*</span>
                            <textarea type="text" placeholder="Your Message" onChange={handleMessage} value={message}></textarea>
                        </div>
                        <div className={style.contact}>
                            <button className={style.btn} type="submit" onClick={handleSubmit} >Send</button>
                        </div>
                        <div className={style.bannerImage}>
                            <img className={style.bgimage} src={Image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactUs