
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Css/Navbar.css'


function Navbars() {
   
  return (
    
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbars ">
      <Container>
        <Navbar.Brand href="#"className='m-auto'><h3 id='name' className='m-auto fw-bold' >RAGUPATHY V</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center p-auto'>
          <Nav id='navitem'>
            <Nav.Link className=' fw-bold '  href="#home" id='link'>Home</Nav.Link>
            <Nav.Link href="#about"   className='fw-bold px-3' id='link'>About</Nav.Link>
             
            <Nav.Link href="#project" className=' fw-bold  px-3' id='link'>Project</Nav.Link> 
            <Nav.Link href="#skill"  className=' fw-bold  px-3' id='link'>Skills</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Navbars;