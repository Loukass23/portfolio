import React from 'react'

function Education() {
    return (
        <section id="timeline" className="timeline-outer w-100">
            <div className="container" id="content">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="h2">Education</div>

                        <ul className="timeline">
                            <li className="event" >
                                <h3><strong>2013-2015 MSc Computer Aided Engineering</strong></h3>
                                <p>Cranfield University, UK
                                    Aeronautical applications advanced CAD modeling</p>

                            </li>
                            <li className="event">
                                <h3><strong>2012-2015 ESTIA Engineering school</strong> </h3>
                                <p>School Of Advanced Industrial Technologies, FR. Innovation and prototyping. Electronic mechanical and software design</p>
                            </li>
                            <li className="event">
                                <h3><strong>2008-2010 DUT in Industrial Maintenance specialized in aeronautics</strong></h3>
                                <p>France French equivalent of associate degree </p>
                            </li>
                            <li className="event">
                                <h3><strong>2008 Baccalauréat S</strong></h3>
                                <p>French equivalent of A level in science</p>
                            </li>
                            <li className="event" >
                                <h3><strong>2007 Certificate of graduation</strong></h3>
                                <p>exchange student, senior year, Illinois, USA</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education
