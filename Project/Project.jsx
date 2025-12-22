import React from "react";

import './style.css'
import { Card, Flex } from 'antd';
import Image from '../image/4.png';
import { Meta } from "antd/es/list/Item";
const Project =()=>{


const joke =()=>{
  window.open("https://github.com/DharminderPal");
}


    return(



//         <div  id="projects" className="Project">

//             <section >
//             <h1>Personal  Projects  </h1>
//             </section>
// <div   style={{ display: "flex", gap: "20px",justifyContent:"space-around" }}>
  
//   <Card
//   className="project-card"
//     hoverable
//     style={{    width: 300}}
//    onClick={joke}   cover={<img alt="img" src={Image} />}
//   >
//     <Meta title="Project 1" description="Description here" />
//   </Card>

//   <Card   className="project-card"
//     hoverable
//     style={{ width: 300 }}
//     cover={<img alt="img" src={Image} />}
//   >
//     <Meta title="Project 2" description="Description here" />
//   </Card>

//   <Card   className="project-card"
//     hoverable
//     style={{ width: 300 }}
//     cover={<img alt="img" src={Image} />}
//   >
//     <Meta title="Project 3" description="Description here" />
//   </Card>

// </div>
// </div>

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

      <Card className="project-card"          hoverable style={{ width: 300 }} cover={<img alt="img" src='../image/8.jpg' />}>
        <Meta title="Finance-Tracker"  description="dfaafasfdfdsafjgsdfjgdf dsfjfads
        dfdfgdsgfjhsdafghdgs fdsjfg fghdsgfkdsgkfskfkwhfkuwefbk" />
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