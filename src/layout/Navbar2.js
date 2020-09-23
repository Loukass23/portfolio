import React from 'react'
import CV from '../img/Lucas Dupias CV.pdf'


function Navbar2() {
    return (

        <nav height="4vh" className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
            <a className="navbar-brand" href="#">Lucas Dupias</a>

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
                <ul className="navbar-nav ml-0 text-center" >
                    <li>
                        <a className="px-2" href="https://www.codeacademyberlin.com/" target="_blank">
                            <i class="fas fa-2x fa-building"></i>
                        </a>
                        <a href={CV} className="px-2" target="_blank"> <i className="fas fa-2x fa-portrait" ></i></a>
                        <a className="px-2" href="https://www.linkedin.com/in/lucasdupias" target="_blank">
                            <i className="fab fa-2x fa-linkedin"></i>
                        </a>
                        <a className="px-2" href="https://github.com/Loukass23" target="_blank">
                            <i className="fab fa-2x fa-github"></i>
                        </a>
                    </li>
                </ul>
                < ul className="navbar-nav ml-auto text-center" >
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#resume">Resume</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar2
