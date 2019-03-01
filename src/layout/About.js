import React from 'react'
import Photo from '../img/photo.png';
import Avatar from '@material-ui/core/Avatar';
import '../css/about.css'
import WorkExp from '../component/WorkExp'
import Education from '../component/Education'
import Carousel from 'react-bootstrap/Carousel'

function About() {
  const styleAvatar = {
    width: '150px',
    height: '150px',
    margin: 'auto',
    border: '3px solid teal',
    boxShadow: 'rgb(30, 242, 241) 1px 0 1px, rgb(246, 5, 10) 1px 0 1px'
  };

  return (
    <div >
      <div className="container justify-content">
        <div className="col sm10">
          <div className="card" >
            <Avatar className="card-img-top" src={Photo} id="avatar" style={styleAvatar} width="80px" height="80px" />
            <div className="card-body">
              <h5 className="card-title">Lucas Dupias</h5>
              <p className="card-text">New career aspirations have led shift to full stack developer.
            from aircraft PLM engineer to become Full Stack developer. Having a professional experience as a technical solution in France since 2013.
             My background in the Aeronautic industry and more particularly in PLM (Product Lifecycle Management).
              Versatile. I enjoy living in foreign countries and am capable of easy integration as I have been an exchange student in USA and previously studied in UK.</p>
            </div>
            <div className="row" id="carousel">
              <div className="col sm10" >
                <Carousel pauseOnHover="true">
                  <Carousel.Item>
                    <WorkExp />

                  </Carousel.Item>
                  <Carousel.Item>
                    <Education />


                  </Carousel.Item>

                </Carousel>

              </div>
            </div>
            <a href="#" className="btn btn-primary">Download CV</a>

            <img src="https://www.codewars.com/users/Loukass23/badges/small" alt="" />




          </div>
        </div>





      </div>



    </div>
  )
}

export default About
