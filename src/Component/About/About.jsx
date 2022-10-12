
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./About.css";
import Award from "./Award";
import Education from "./Education";
import Skill from "./Skill";


const About = () => {
  const[aboutFilter,setAboutFilter]=useState('ABOUT')
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5"> 
            <h2>About Me</h2>{" "}
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn-active' : ''}`} onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
              <button className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
              <button className={`about_btn ${aboutFilter === 'SKILLS' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
              <button className={`about_btn ${aboutFilter === 'AWARD' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter('AWARD')}>Award</button>
            </div>
          </Col>
          <Col lg="8" md="9">
{
  aboutFilter==="ABOUT" && <div className="about_content_wrapper d-flex gap-5">
              <div className="about_img w-25">
                {/* <img src={aboutImg} alt="" className="w-100" /> */}
              </div>
               <div className="about_content w-75">
                <h2>I'm boobalan</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  a optio debitis iusto blanditiis excepturi iste illo,
                  temporibus ea? Blanditiis vel repellat placeat, minus error
                  quo ipsum vitae id obcaecati?
                </p>
                <div className="social_links">
<h6 className="mb-3">Connect with me:</h6>
<span><a href="#"><i class="ri-facebook-line"></i></a></span>
<span><a href="#"><i class="ri-instagram-line"></i></a></span>
<span><a href="#"><i class="ri-github-line"></i></a></span>
<span><a href="#"><i class="ri-linkedin-line"></i></a></span>


                </div>
              </div>
            </div>
}
{
  aboutFilter==='EDUCATION' && <Education></Education>
}
{
  aboutFilter==='SKILLS' && <Skill></Skill>
}
{
  aboutFilter==='AWARD' && <Award></Award>
}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
