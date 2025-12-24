import React from "react";
import { SiReplit,SiGithub,SiLinkedin } from "react-icons/si";

const Contact = () => {
const joke =()=>{
  window.open("https://www.linkedin.com/in/dharminder-pal-18b947253/");
}

const replit =()=>{
  window.open("https://replit.com/@DharminderPaL/DSAJAVASCRIPT2024september");
}
const github =()=>{
  window.open("https://github.com/DharminderPal");
}

  return (
    <section   id="contact"   className="Contact">
      <div className="glass-bg">
        <div className="form-container">
          <h1 className="form-title">Contact Us</h1>
          <p   style={{color:'white'}} className="form-subtitle">Get in touch with us</p>
          
          <form   method="Post"    className="glass-form">

            <div className="form-group">
              <label   style={{color:'white'}}   htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control glass-input"
                id="name"
                placeholder="Enter your name"
              />
          </div>

          <div className="form-group">
              <label   style={{color:'white'}}   htmlFor="name">Phone Number</label>
              <input
                type="text"
                className="form-control glass-input"
                id="name"
                placeholder="Phone Number"
              />
          </div>

            <div className="form-group">
              <label  style={{color:'white'}}     htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control glass-input"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label   style={{color:'white'}}  htmlFor="message">Message</label>
              <textarea
                className="form-control glass-textarea"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          
          </form>


        </div>


 <div className="stack">
  
      <div style={{color:"#0a66c2"}}   onClick={joke}  className="icon Linkedin">
        <SiLinkedin />
        <span className="tooltip">Linkedin</span>
      </div>


      <div  style={{color:"#e7a33e"}}    onClick={replit}  className="icon Replit">
        <SiReplit />
       
        <span className="tooltip">Replit</span>
      </div>


      <div  style={{color:"white"}}     onClick={github}      className="icon Github">
        <SiGithub />
        <span className=  "tooltip">Github</span>
      </div>
      </div>

      </div>
    </section>
  );
};

export default Contact;


