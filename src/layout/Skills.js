import React from 'react'
import Photo from '../img/photo.png';
import CV from '../img/Lucas Dupias CV.pdf'
import '../css/about.css'

function Skills() {
    return (
        <div className=" justify-content">
            <div className="col sm12">
                <div className="card flex-row flex-wrap justify-content-around align-content-center" style={{ backgroundColor: "white" }} >
                    <div className="col-md-6">
                        <img className="card-img-bottom" style={{ width: "80%" }} src={Photo} alt="" title="" />
                    </div>
                    <div className="col-md-6">
                        <div className="card" style={{ border: 'none' }}>
                            <div className="card-block">
                                <h4 className="card-title">Lucas Dupias</h4>
                                <p className="card-text">Junior Full Stack Developer</p>
                                <p className="card-text">An innovative and motivated junior full stack developer
                           with strong professional experience as an aircraft engineer.
                           Aiming to achieve a position that will showcase my current knowledge and skills,
                            while also acquiring new competencies.</p>



                            </div>
                            <div className="mt-2">

                                < ul className="navbar-nav ml-0" >
                                    <li>
                                        <a href={CV} className="btn btn-primary mx-2 px-2" target="_blank"> CV <i className="fas fa-2x fa-portrait"></i></a>

                                        <a className="btn btn-primary mx-2 px-2" href="https://www.linkedin.com/in/lucasdupias" target="_blank">
                                            <i className="fab fa-2x fa-linkedin"></i>
                                        </a>
                                        <a className="btn btn-primary mx-2 px-2" href="https://github.com/Loukass23" target="_blank">
                                            <i className="fab fa-2x fa-github"></i>
                                        </a>
                                    </li>
                                </ ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div id="skillsTable" className="card-footer w-100 text-muted">
                        <table className="table striped centered responsive-table">
                            <thead className="">
                                <tr>
                                    <th>Front-End</th>
                                    <th >Frameworks</th>
                                    <th >Back-End</th>
                                    <th >Dev Ops</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Javascript ES6</td>
                                    <td>React/Rdux</td>
                                    <td>Node.js</td>
                                    <td>Git</td>


                                </tr>
                                <tr>
                                    <td>HTML5 / CSS3</td>
                                    <td>Vue/VueX</td>
                                    <td>Java</td>
                                    <td>SCRUM/Agile</td>


                                </tr>
                                <tr>
                                    <td>Materialize</td>
                                    <td>Spring Boot</td>
                                    <td>Firebase</td>
                                    <td>UML/REST</td>
                                </tr>
                                <tr>
                                    <td>Bootstrap</td>
                                    <td>Express</td>
                                    <td>MongoDB</td>
                                    <td>OOM</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/*                    
                    <div style={{ backgroundColor: "white" }} className="card-header border-0 col sm6">
                        <img src={Photo} style={styleAvatar} alt="" />
                    </div>
                    <div class="card-block col sm6" style={{ backgroundColor: "teal" }}>
                        <h4 class="card-title">Lucas Dupias</h4>
                        <p class="card-text">Junior Full Stack Developer</p>
                        <p className="card-text">An innovative and motivated junior full stack developer
                           with strong professional experience as an aircraft engineer.
                           Aiming to achieve a position that will showcase my current knowledge and skills,
                            while also acquiring new competencies.</p> 
                    </div>
                    <div class="w-100"></div>
                    <div class="card-footer w-100 text-muted">
                        Footer stating cats are CUTE little animals
                </div>
 */}



                </div>





            </div>


        </div >
    )
}

export default Skills
