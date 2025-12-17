import React from "react";
import './style.css'
import image from '../image/3.jpg'


const Profile = () => {
    return (
        <>
            <section className="profile-section">
                <div className="profile-bg">
                    <img src="../image/3.jpg" alt="Background" />
                </div>
                
                <div className="profile-content">
                    <h1>Hi am <br />Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor, quis aorti bactus excepteur qui ven lacere appuntur duamus volupta quibusiam consequentur art iam, quod lussitatiam cumque mudi ad ener tort.</p>
                </div>
            </section>
        </>
    )
}


export default Profile;