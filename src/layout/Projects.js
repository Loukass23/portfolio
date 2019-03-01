import React from 'react'
import Bookstore from '../img/bookstore.jpg';
import TGIF from '../img/TGIF.jpg';

function Projects() {
    return (
        < div >
            <div className="container justify-content" >
                <div className="col sm10">
                    <div className="card" >
                        <div className="card-body">
                            <p className="card-text"></p>
                            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                                <div className="col-xl-8 col-lg-7">
                                    <img className="img-fluid mb-3 mb-lg-0" src={Bookstore} alt="">
                                    </img>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="featured-text text-center text-lg-left">
                                        <h4>Bookstore</h4>
                                        <p className="text-black-50 mb-0">Project displaying a collection of books with details retrieved from an online API</p>
                                        <p>Built with Javascript , Vue, HTML, CSS</p>
                                        <a href=" https://lucasd-bookstore-vuecli.netlify.com/">Link to site</a>
                                    </div>
                                </div>
                            </div>
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
                                        <a href=" https://loukass23-tgif.netlify.com">Link to site</a>
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
