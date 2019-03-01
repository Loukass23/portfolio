import React from 'react'

function Contact() {
    return (
        <div>

            <div className="container">

                <div className="row">

                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100" href="mailto:l.dupias@net.estia.fr">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">
                                    <a href="#">hello@yourdomain.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="#"><i className="fa fa-chevron-up" id="chevron"></i></a>
                </div>
            </div>

        </div>
    )
}

export default Contact
