import React from 'react'
import '../css/grayscale.min.css'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Word3D from '../wordCloud/Word3D';



function Layout() {

    return (
        <div>
            <header className="masthead mt-1" id="page-top">
                <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                    <Header />
                </div>

            </header>
            <section id="about" className="container-fluid about-section text-center">
                <Word3D><h1>About Me</h1></Word3D>
                <About />
            </section>
            <section id="projects" className="container-fluid projects-section text-center">

                <Word3D><h1>Projects</h1></Word3D>
                <Projects />
            </section>
        </div>
    )
}

export default Layout