import React from 'react'
import Photo from '../img/photo.png';
import Avatar from '@material-ui/core/Avatar';

function About() {
  const styleAvatar = {
    width: '150px',
    height: '150px',
    margin: 'auto',
    border: '3px solid teal'
  };

  return (
    <div >
      <div className="container justify-content">
        <div className="col sm10">

          <p className="white-text">New career aspirations have led shift to full stack developer.
            from aircraft PLM engineer to become Full Stack developer. Having a professional experience as a technical solution in France since 2013.
             My background in the Aeronautic industry and more particularly in PLM (Product Lifecycle Management).
              Versatile. I enjoy living in foreign countries and am capable of easy integration as I have been an exchange student in USA and previously studied in UK.
              </p>
        </div>
        <Avatar src={Photo} id="avatar" style={styleAvatar} width="100px" height="100px" />
        <button className="btn-pink">Download CV</button>
        Ubiqum Code Academy: Full Stack Java Developer
Professional training: 5-months immersive program in Berlin Projects included building websites (HTML and CSS), development of mobile app (Javascript + Frameworks), design and build a video game
      </div>



    </div>
  )
}

export default About
