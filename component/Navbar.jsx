import React from "react";
import './style.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          MyPortFolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "Skill", "Projects", "Experience", "About"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link nav-anim" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
/*now  we have profile add here div section  */






  )
}

export default Navbar