import React from "react";
import './style.css'
import { Card, Flex } from 'antd';
import Image from '../image/4.png';
import { Meta } from "antd/es/list/Item";
const Project =()=>{


const joke =()=>{
  window.open("https://github.com/DharminderPal");
}
const joke1 =()=>{
  window.open("https://courageous-medovik-b821ce.netlify.app/");
}

return(

<div id="projects" className="Project">

  <section>
    <h1>Personal Projects</h1>
  </section>
  {/* GLASS BACKGROUND DIV */}
  <div className="glass-bg">
    <div className="card-row">
      <Card
        className="project-card"
        hoverable
        style={{ width: 300 }}
        onClick={joke}
        cover={<img alt="img" src={Image} />}
      >
        <Meta title="Gemini Chat BOT "  description=""/>
      </Card>

      <Card className="project-card"      onClick={joke1}     hoverable style={{ width: 300 }} cover={<img alt="img" src='../image/8.jpg' />}>
        <Meta title="Finance-Tracker"  description="" />
      </Card>

      <Card className="project-card" hoverable style={{ width: 300 }} cover={<img alt="img" src={Image} />}>
        <Meta title="Project 3" description="Description here" />
      </Card>
    </div>
  </div>
</div>
)
}


export default Project;


