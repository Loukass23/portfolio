import React from 'react'

function Navbar2() {
    return (

        <nav height="4vh" className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
            <a className="navbar-brand" href="#">Portfolio</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
                < ul className="navbar-nav ml-auto" >

                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar2
