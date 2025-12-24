import React from "react";
import './style.css'
import image from '../image/11.jpeg'
import Icons from '../Icons/Icons'
import Kill from "../kills/Kill";
import About from '../About/Contact'
import Project from '../Project/Project'
const Profile = () => {
    return (
        <>
            <section className="profile-section">   
                <div className="profile-bg">
                    <img src={image} alt="Background" />
                    {/* <video src={image}></video>  */}
                </div>

                <div className="profile-content">
                    <h1>Hi am  Mern Stack<br />Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor, quis aorti bactus excepteur qui ven lacere appuntur duamus volupta quibusiam consequentur art iam, quod lussitatiam cumque mudi ad ener tort.</p>
                    <Icons />
                </div>

            </section>


            <section>

                <div>

                    <Kill />
                    <Project />
                    <About/>

                </div>

            </section>
        </>
    )
}


export default Profile;