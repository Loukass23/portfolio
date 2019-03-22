import React from 'react'
import '../css/grayscale.min.css'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Word3D from '../wordCloud/Word3D';
import Skills from './Skills'
import ReactLogo from '../img/react_logo.png'





function Layout() {

    return (
        <div  >

            <header style={{ minHeight: "100vh" }} className="masthead mt-1" width='1000px' id="page-top">
                <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                    <Header />
                </div>
            </header>
            <section id="about" className="container-fluid about-section text-center ">
                <Word3D><h1 className="layoutTitle">About Me</h1></Word3D>
                <Skills />
            </section>
            <section id="projects" className=" py-2 mb-0 mt-2 container-fluid projects-section text-center">

                <Word3D><h1 className="layoutTitle" id="project-title">Projects</h1></Word3D>
                <Projects />
            </section>
            {/* <section id="about" className="container-fluid about-section text-center ">
                <Word3D><h1 className="layoutTitle">Resume</h1></Word3D>
                <About />
            </section> */}
            <section className="container-fluid contact-section text-center mb-3">
                <Word3D><h1 className="layoutTitle" id="contact" >Contact</h1></Word3D>
                <Contact />
                <p>Built with <img src={ReactLogo} alt="" /></p>

            </section>
        </div>
    )
}

export default Layout