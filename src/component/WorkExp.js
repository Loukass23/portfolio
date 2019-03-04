import React from 'react'

function WorkExp() {
    return (
        <section id="timeline" className="timeline-outer w-100">
            <div className="container" id="content">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="h2">Work Experience</div>
                        <ul className="timeline">
                            <li className="event" >
                                <h3><strong>2019 Ubiqum Code Academy</strong></h3>
                                <div className="p">Full Stack Java Developer
                   Professional training: 5-months immersive program in Berlin Projects included building websites (HTML and CSS),
      development of mobile app (Javascript + Frameworks), design and build a video game</div>
                                <a href="https://ubiqum.com/">Ubiqum website</a>
                            </li>
                            <li className="event" >
                                <h3><strong>2015-2018 PLM Solutions Architect/Integrator - Sopra-Steria Group</strong></h3>

                                <p>Sopra Steria: European leading company in IT consultancy
      Main activity: Solution architect for Aras Innovator Product Lifecycle Management software Functional: Data modeling, architecture, CRD, migration plan
      Technical: Solution Configuration, Javascript developments
      Project management: Customer relationship, End user training, DevOps
      IT technical side activity: Software packaging, IT Support, CATIA modules, msi tools (InstallShield), scripts, registries, updates deployment on large network, server room and databases management.</p>
                            </li>
                            <li className="event">
                                <h3><strong>2013-2015 Engineer in apprenticeship - Airbus Cimpa</strong></h3>
                                <p>CIMPA was an PLM and IT entity of leading aircraft manufacturer Airbus Integrator and academic thesis on PLM benchmarking, Customer service, Windchill integration, Product data management, configuration and change management, COTS/Home grown approach, teamwork. </p>
                            </li>
                            <li className="event" >
                                <h3><strong>2010/2012: Airbus Operations: Industrial internships</strong></h3>
                                <p>Foreign Object Damages Tool Improver
      Development of 3D animations for A380 ops using DMU</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkExp
