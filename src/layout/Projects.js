import React from 'react'
import Bookstore from '../img/bookstore.jpg';
import TGIF from '../img/TGIF.jpg';
import JavaVideo from '../img/battleship.mp4'
import FootVideo from '../img/football app.mp4'
import CityVideo from '../img/cityapp.mp4'
import BreweryImg from '../img/brewery.jpg'


function Projects() {
    return (
        < div >
            <div className="container justify-content" >
                <div className="col sm10">
                    <div className="card" >
                        <div className="card-body">
                            <p className="card-text"></p>
                            <div className="row align-items-center no-gutters mt-2 mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <img width="80%" className="img-fluid mb-3 mb-lg-0" src={BreweryImg} alt="">
                                    </img>

                                </div>
                                <div className="col-xl-4 col-lg-5 ">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>Brewery Web App</h4>
                                        <p className=" mb-0">Collaborative project for Beer reviews</p>
                                        <div className="row d-flex justify-content-center my-2">
                                            <i className="fab fa-2x fa-react"></i>
                                            <i className="fab fa-2x fa-css3"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                        </div>
                                        <ul className='mx-auto text-black-50'>
                                            <li>Work in Progress</li>
                                            <li>M.E.R.N stack</li>
                                            <li>Collaborative work on Github</li>
                                            <li>MongoDB/ Express</li>
                                            <li>Javascript, Express, Node.js MongoDB React.js/Redux , HTML, CSS, Materialize</li>
                                        </ul>




                                        <div className="row justify-content-center ">
                                            {/* <a href="" target="_blank" className="btn btn-primary mx-2">Demo</a> */}
                                            <a href="https://github.com/Loukass23/brewery-mern" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center no-gutters mt-2 mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <video className="video-fluid pr-2" width="30%" height="20%" controls autoPlay={true} loop muted>
                                        <source src={CityVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-xl-4 col-lg-5 ">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>FlightoClock Web App</h4>
                                        <p className=" mb-0">Mobile web app for blogger influencer</p>
                                        <div className="row d-flex justify-content-center my-2">
                                            <i className="fab fa-2x fa-react"></i>
                                            <i className="fab fa-2x fa-css3"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                        </div>
                                        <ul className='mx-auto text-black-50'>
                                            <li>Work in Progress</li>
                                            <li>Instagram API</li>
                                            <li>User signIn</li>
                                            <li>Image upload and conpressing</li>
                                            <li>Firebase(server functions, database, storage)</li>
                                            <li>Javascript, React.js/Redux , HTML, CSS, Materialize</li>
                                        </ul>




                                        <div className="row justify-content-center ">
                                            <a href="https://city-itinerary.firebaseapp.com/" target="_blank" className="btn btn-primary mx-2">Demo</a>
                                            <a href="https://github.com/Loukass23/city-itinerary" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>


                                    </div>
                                </div>


                            </div>
                            <hr />
                            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <img className="img-fluid mb-3 mb-lg-0" src={Bookstore} alt="">
                                    </img>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>Bookstore</h4>
                                        <div className="row text-teal-50 d-flex justify-content-center text-center">

                                            <i className="fab fa-2x fa-vuejs"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                            <i className="fab fa-2x fa-css3"></i>

                                        </div>
                                        <p className="">Project displaying a collection of books with details retrieved from an online API</p>

                                        <ul className='mx-auto text-black-50'>
                                            <li>Flip Card Display</li>
                                            <li>Search</li>
                                            <li>API Call</li>
                                            <li>Javascript , Vue.js, HTML, CSS</li>
                                        </ul>
                                        <div className="row justify-content-center ">
                                            <a href="https://lucasd-bookstore-vuecli.netlify.com/" target="_blank" className="btn btn-primary mx-2">Demo</a>
                                            <a href="https://github.com/Loukass23/BookStore_Vue-CLI" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-center no-gutters mt-2 mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <video className="video-fluid pr-2" width="30%" height="20%" controls autoPlay={true} loop muted>
                                        <source src={FootVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>Football Web App</h4>
                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-2x fa-vuejs"></i>
                                            <i className="fab fa-2x fa-css3"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                        </div>
                                        <p className="">Mobile app for displaying main football championships data with user account and favorites management  </p>
                                        <ul className='mx-auto text-black-50'>
                                            <li>User DB /Sign in / profile</li>
                                            <li>Favorite management</li>
                                            <li>Chat</li>
                                            <li>Firebase, Javascript, Vue.js , HTML, CSS</li>
                                        </ul>

                                        <div className="row justify-content-center ">
                                            <a href="https://footballapp.netlify.com" target="_blank" className="btn btn-primary mx-2">Demo</a>
                                            <a href="https://github.com/Loukass23/footballApp" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>


                                    </div>
                                </div>


                            </div>
                            <hr />
                            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <img className="img-fluid mb-3 mb-lg-0 pr-2" src={TGIF} alt="">
                                    </img>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>TGIF</h4>
                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-2x fa-css3"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                        </div>
                                        <p className="">Display of governements data and statistics pulled from official API </p>
                                        <ul className='mx-auto text-black-50'>
                                            <li>Vanilla Javascript only</li>
                                            <li>API Calls</li>
                                            <li>Statistics</li>
                                            <li>Javascript , HTML, CSS</li>
                                        </ul>
                                        <div className="row justify-content-center ">
                                            <a href="https://loukass23-tgif.netlify.com" target="_blank" className="btn btn-primary mx-2">Demo</a>
                                            <a href="https://github.com/Loukass23/TGIF" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <video className="video-fluid pr-2" width="100%" height="100%" controls autoPlay={true} loop muted>
                                        <source src={JavaVideo} type="video/mp4" />
                                    </video>

                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>Battleship</h4>
                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-2x fa-java"></i>
                                            <i className="fab fa-2x fa-vuejs"></i>
                                            <i className="fab fa-2x fa-js"></i>
                                            <i className="fab fa-2x fa-html5"></i>
                                            <i className="fab fa-2x fa-css3"></i>

                                        </div>
                                        <p className="">Full stack battleship video game </p>
                                        <ul className='mx-auto text-black-50'>
                                            <li>Full Stack</li>
                                            <li>Object Oriented</li>
                                            <li>Back end: Java 8, Gradle, Spring Boot, JPA, RESTfull</li>
                                            <li>Front end: Javascript, Vue , HTML, CSS, Bootstrap</li>
                                        </ul>
                                        <div className="row justify-content-center ">
                                            <a href="https://github.com/Loukass23/battleship" target="_blank" className="btn btn-primary mx-2">Source</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Projects
