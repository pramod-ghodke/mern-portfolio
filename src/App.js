
import './App.css';


import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import * as Icon from 'react-bootstrap-icons';


import html from './Assets/html.png';
import css from './Assets/css.png';
import bootstrap from './Assets/bootstrap.png';
import js from './Assets/javascript.png';
import react from './Assets/react.png';
import node from './Assets/node.png';
import mongo from './Assets/mongo.png';
import github from './Assets/github.png';


function App() {

  function setnav(){
    const primaryNav = document.querySelector(".mobile-nav");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === "false"){
      primaryNav.setAttribute("data-visible" , true);
      navToggle.setAttribute("aria-expanded", true);
      document.querySelector("body").style.overflow='hidden';
     
      
    }
    else if(visibility === "true"){
      primaryNav.setAttribute("data-visible" , false);
      navToggle.setAttribute("aria-expanded", false);
      document.querySelector("body").style.overflow='auto';
      
  }
  }

  return (
    <div className="App">
      <div className="hero" id="home">
      <div className='hero-text'>
          <h1>Hi, i am full stack developer</h1>
        </div>
       <header className='nav primary-header flex'>
        
        <div className='logo'>
          <h4>Pramod Ghodke.</h4>
        </div>

  <button  className="mobile-nav-toggle" aria-controls='primary-navigation'  
      aria-expanded="false"  onClick={setnav}><span></span>
  </button>
    <nav>
      <ul className='lg-nav flex'>
        <li><a href='#home'>HOME</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href='#projects' >PROJECTS</a></li>
        <li><a href='#contact'>CONTACT</a></li>
       
      </ul>

      <ul id='primary-navigation'  data-visible="false" className='mobile-nav flex'>
        <li><a href='#home' ><Icon.House className='me-2'/>HOME</a></li>
        <li><a  href="#skills" onClick={setnav}><Icon.Person className='me-2' />SKILLS</a></li>
        <li><a  href='#projects' onClick={setnav}><Icon.BagHeart className='me-2'/>PROJECTS</a></li>
        <li><a href='#contact'  onClick={setnav}><Icon.Briefcase className='me-2'/>CONTACT</a></li>
     
        
        <div className='mobile-nav-footer align-items-center'>
          <a href="https://www.linkedin.com/" className='mb-3' target="blank" onClick={setnav}><Icon.Linkedin className='me-2' width={20} height={20}/>Linkedin</a>
          
        </div>
      </ul>
      

    </nav>
    </header>
    </div>

    

    


<section id='skills' className='mt-5'>
<Container>
  <Row className='g-2'>
    <h1 className="text-center">MERN STACK</h1>
    <Col xs={4} md={2}>
    <img src={html} alt="html" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={css} alt="css" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={js} alt="html" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={bootstrap} alt="bootstrap" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={react} alt="html" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={node} alt="html" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={mongo} alt="html" className='img-fluid'/>
    </Col>
    <Col xs={4} md={2}>
    <img src={github} alt="html" className='img-fluid'/>
    </Col>
  </Row>
</Container>
</section>


<section id='projects' className='mt-5'>
<Container>
   <Row>
    <h1 className='text-center'>MY RESUME</h1>
    <Col className="text-center">
     <Button href="www.pramodghodke.netlify.app" target="_blank">Download Resume</Button>
    </Col>
   </Row>
</Container>
</section>


<section id='contact' className='mt-5 mb-5'>
<Container>
   <Row className="justify-content-center">
    <h1 className='text-center mb-5'>CONTACT ME</h1>
    <Col md={6}>
     <h4><Icon.Telephone className="me-2"/>7249456632</h4>
     <h4><Icon.Envelope className="me-2"/>pramodghodke110@gmail.com</h4>

    </Col>
   </Row>
</Container>
</section>

    </div>
  );
}

export default App;
