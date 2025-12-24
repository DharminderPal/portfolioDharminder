import React from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { DiMongodb, DiReact, DiNodejsSmall  } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import './styles.css'

function Question() {
  return (
    <div>
  <div className="stack">

      <div className="icon mongo">
        <DiMongodb />
        <span className="tooltip">MongoDB</span>
      </div>

      <div className="icon express">
        <SiExpress />
        <span className="tooltip">Express.js</span>
      </div>

      <div className="icon react">
        <DiReact />
        <span className="tooltip">React</span>
      </div>

      <div className="icon node">
        <DiNodejsSmall />
        <span className="tooltip">Node.js</span>
      </div>

    </div>
</div>

  );
}


export   default Question;
