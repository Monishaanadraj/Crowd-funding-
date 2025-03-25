import React from "react";
import { NavLink } from "react-router-dom";
import style from "./aboutus.module.css";
import About1 from "../../components/images/about_1.jpg";
import Nav from '../navAfterLogin/nav';


const Aboutus = () => {
    return (
        <>
            <Nav/>
            <div className={style.about}>
            </div>
            <div className={style.bannerImage}>
                <img className={style.bgimage1} src={About1} alt="" />
            </div>
            <div className={style.container}>
                <div className={style.content_about}>
                    <h1>About Us</h1>
                    <div>
                        <p>
                            Crowd Funding is the trusted place to fundraise for what you care about.
                            There is no pressure to hit your fundraising goal and we have created tools to make it
                            easy for donors to contribute to your fundraiser. Learn step-by-step what you need to get
                            started—from writing your story and sharing your fundraiser to setting up bank transfers.
                        </p>
                        <NavLink className={style.button} to="/logincharity">Start a fundraiser</NavLink>
                    </div>
                </div>
            </div>
            <div className={style.list}>
                    <h1>Why choose Us?</h1>
                    <li>Crowd Funding is the leading crowdfunding platform</li>
                    <li>Easy tools to make a great fundraiser</li>
                    <li>No fee to start fundraising</li>
                </div>
                <div className={style.work}>
                    <h1>How does Crowd Funding work? Here is what to expect when fundraising:</h1>
                    <h1>1. Follow the prompts to set up your fundraiser</h1>
                    <ul>
                        <li>Click the ‘Start a fundraiser’ button and answer a few questions to get started</li>
                        <li>In your fundraiser description, share the reason you are fundraising in 1-3 paragraphs</li>
                        <li>Add details such as</li>
                        <ul className={style.add}>
                            <li>Who or what you’re fundraising for</li>
                            <li>A main image that represents your fundraiser</li>
                        </ul>
                        <li>Set your fundraising goal, and remember you can always change it later</li>
                    </ul>
                </div>
                <div className={style.work}>
                    <h1>2. Share your fundraiser</h1>
                    <ul>
                        <li>Share your fundraiser link with your community through text messages and emails to start gaining momentum</li>
                        <li>Continue to share your fundraiser to help reach your goals—consider posting on social media, 
                            sharing in-person with a printable poster, or writing a letter to people you know</li>
                        <li>Add team members you know and trust to your fundraiser to help spread the word</li>
                    </ul>
                </div>
                <div className={style.work}>
                    <h1>3. Post updates and thank donors</h1>
                    <ul>
                        <li>Throughout your fundraising journey, you can post fundraiser 
                            updates to help increase donations and keep donors informed</li>
                        <li>Easily thank donors within your fundraising dashboard</li>
                    </ul>
                </div>
                <div className={style.work}>
                    <h1>4. Set up bank transfers</h1>
                    <ul>
                        <li>Add bank information to start receiving funds (you don’t need to hit 
                            your fundraising goal to receive your money)</li>
                        <li>Add a beneficiary if you’re raising donations for someone else</li>
                    </ul>
                </div>
                <h1 className={style.work1}>*No transaction fee fully free.  
                    For more details contact us</h1>
        </>

    )
}
export default Aboutus