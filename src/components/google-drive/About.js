import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import background from "../../media/library1.jpg"
import dp from "../../media/dp.jpeg"
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const About = () => {
  // window.scrollTo(0,100)
  return (
  <div className='about'>
    <div style={{ backgroundImage: `url(${background})` }} className='bgcont' >
      <div className='brand'>
        <FontAwesomeIcon icon={faGraduationCap} color='' size="7x" className='icon'/>
        <h3>Campus Drive</h3> 
      </div>
      <div className='overlay'/>
    </div>
       <Container style={{marginTop:"20px",maxWidth:"1000px"}}>
    < Row>
    <Col className=' col-lg-6 col-12 '>
      <h1 style={{marginTop:"5%"}}>Who we are and what we do.</h1>
        <center>
          <a href='https://www.instagram.com/campusdrive1/'><i style={{color:"#EF018B"}} class="fa fa-instagram fa-2x"></i></a>
          <a href='mailto:isaaco1411@gmail.com'><i style={{color:"#EA4335"}} class="fa fa-google fa-2x"></i></a>
          <a href='https://www.facebook.com/profile.php?id=100081627219551'><i class="fa fa-facebook fa-2x"></i></a>
        </center>
    </Col>
    <Col className='mt-3 desc'>
     <p>
      <span style={{fontSize:"22px",fontWeight:"bold"}}>Campus Drive</span> was developed with an aim to connect students around the world.
      <h4><u><b>Features include:</b></u></h4>
      <ul>
        <li><h5>Campus Notes </h5>All your class notes in one folder for easy access online or downloaded for offline use.</li>
        <li><h5>Campus Meet</h5>Get to connect with your fellow school mates and stay in touch with what's going on around your Campus.</li>
        <li><h5>Campus Market </h5>Buy/Sell commodities around the Campus with this amazing feature.</li>
      </ul>
      </p> 
    </Col>
  </Row>
  <div style={{textAlign:"center",margin:"10px"}}>
    <h4>Thank you so much for supporting <b>Campus Drive</b>.</h4>
    <h4>Feel free to talk to us through our Socials to get to know us more.</h4>
    <div className='down-load'>
      <h4>Click below to download the Android version...</h4>
      <a href='https://firebasestorage.googleapis.com/v0/b/campus-drive-b2ea0.appspot.com/o/apk%2Fcom.isaaco.campusdrive-v1.0.apk?alt=media&token=41aa8dc7-fd10-4465-a344-8c1a3e27245c'>
        <button class="btn"><i class="fa fa-download"></i> Download</button>        
      </a>
    </div>
  </div>
  </Container>
    <div style={{padding:"5px", background:"rgb(184, 184, 184)"}}>
      {/* <h4 style={{textAlign:"center",fontWeight:"bold"}}>Campus Drive Team</h4> */}
        <div style={{margin:"5vw"}}>
          <div>
            <center>
              <img src={dp} className='founderImg'/>
            </center>
             
          </div>
          <div style={{textAlign:"center",marginTop:"5px"}}>
            <h5>Fredrick Kyeki</h5>
            <p style={{color:"gray"}}>Founder & Developer</p>
            <Card.Text>
                "It has been an honor getting to work on this platform from conception to completion."
            </Card.Text>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
              <a href='fredrickisaac142@gmail.com'><i class="fa fa-google fa-lg"></i></a>
              <a href='https://www.facebook.com/fredrick.isaac.1/'><i class="fa fa-facebook fa-lg"></i></a>
              <a href='https://www.instagram.com/fred_i_am/'><i class="fa fa-instagram fa-lg"></i></a>
          </div>             
        </div>
    </div>
</div>
 
  )
}
