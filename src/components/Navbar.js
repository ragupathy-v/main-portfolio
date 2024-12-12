
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Css/Navbar.css'

import { useState } from 'react';


function Navbars() {
  const [color,setColor]=useState(false)
  const changecolor=()=>{
    if(window.scrollY >=440){
        setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changecolor)

   
  return (
    
    <Navbar collapseOnSelect expand="lg" fixed="top" className={color?'nav-color':"navbars"}>
      <Container>
        <Navbar.Brand href="#"className='m-auto'><h3 id={color?'color-name':'name'} className='m-auto fw-bold' >RAGUPTHY V</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center p-auto'>
          <Nav id='navitem'>
            <Nav.Link href='#home' className=' fw-bold ' id={color?'color-link':'link'}>Home</Nav.Link>
            <Nav.Link  href='#about' className='fw-bold px-3' id={color?'color-link':'link'}>About</Nav.Link>         
            <Nav.Link  href='#skills' className=' fw-bold  px-3' id={color?'color-link':'link'}>Skills</Nav.Link> 
            <Nav.Link href='#project' className=' fw-bold  px-3' id={color?'color-link':'link'}>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navbars;