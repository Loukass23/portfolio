import React from 'react'
import Bookstore from '../img/bookstore.jpg';
import TGIF from '../img/TGIF.jpg';
import JavaVideo from '../img/battleship.mp4'
import FootVideo from '../img/football app.mp4'
import CityVideo from '../img/cityapp.mp4'
import { Divider } from '@material-ui/core';


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
                                    <video className="video-fluid pr-2" width="30%" height="20%" controls autoPlay={true} loop muted>
                                        <source src={CityVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>City-Itinerary Web App</h4>
                                        <p className="text-black-50 mb-0">Work in Progress: Mobile web app for community itineraries sharing</p>
                                        <p>Built with Firebase(server functions, database, storage), Javascript, React.js/Redux , HTML, CSS</p>


                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-3x fa-reactjs"></i>
                                            <i className="fab fa-3x fa-css3"></i>
                                            <i className="fab fa-3x fa-js"></i>
                                            <i className="fab fa-3x fa-html5"></i>
                                        </div>
                                        <a href="https://city-itinerary.firebaseapp.com/">Link to site</a>

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
                                        <p className="text-black-50 mb-0">Project displaying a collection of books with details retrieved from an online API</p>
                                        <p>Built with Javascript , Vue.js, HTML, CSS</p>

                                        <div className="row d-flex justify-content-center text-center">

                                            <i className="fab fa-3x fa-vuejs"></i>
                                            <i className="fab fa-3x fa-js"></i>
                                            <i className="fab fa-3x fa-html5"></i>
                                            <i className="fab fa-3x fa-css3"></i>

                                        </div>
                                        <a href=" https://lucasd-bookstore-vuecli.netlify.com/">Link to site</a>
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
                                        <p className="text-black-50 mb-0">Mobile app for displaying main football championships data with user account and favorites management  </p>
                                        <p>Built with Firebase, Javascript, Vue.js , HTML, CSS</p>


                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-3x fa-vuejs"></i>
                                            <i className="fab fa-3x fa-css3"></i>
                                            <i className="fab fa-3x fa-js"></i>
                                            <i className="fab fa-3x fa-html5"></i>
                                        </div>
                                        <a href="https://footballapp.netlify.com">Link to site</a>

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
                                        <p className="text-black-50 mb-0">Display of governements data and statistics pulled from official API </p>
                                        <p>Built with Javascript , HTML, CSS</p>


                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-3x fa-css3"></i>
                                            <i className="fab fa-3x fa-js"></i>
                                            <i className="fab fa-3x fa-html5"></i>
                                        </div>
                                        <a href=" https://loukass23-tgif.netlify.com">Link to site</a>

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
                                        <p className="text-black-50 mb-0">Full stack battleship video game </p>
                                        <p>Back end: Java 8, Spring Boot, RESTfull </p>
                                        <p>Front end: Javascript , HTML, CSS, Bootstrap</p>

                                        <div className="row d-flex justify-content-center">
                                            <i className="fab fa-3x fa-java"></i>
                                            <i className="fab fa-3x fa-vuejs"></i>
                                            <i className="fab fa-3x fa-js"></i>
                                            <i className="fab fa-3x fa-html5"></i>
                                            <i className="fab fa-3x fa-css3"></i>

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
