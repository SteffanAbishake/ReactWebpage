import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Col,Row} from 'react-bootstrap'
//import image from './dell.png';


function Header(){
 return (
 <div className="title-box">
     <h1>
         Welcome to amazing world Steffan

     </h1>

 </div>
 );
}

function Sidebar(){
    return(
    <div className="side-bar">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" active>Home</Navbar.Brand>
    <Nav className="mr-4">
      <Nav.Link href="#home">Products</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Jobs</Nav.Link>
    </Nav>
    </Navbar>
    </div>
    );
}

function Foot(){
    return(
    <div className="mr-auto">
       <Col>
       asd
       </Col>
       
       <Col>
     ASDFF

       </Col>
       <Col>
        SDFFG V V    
       

       </Col>
    </div>
    );
}


function Web(){
    return(
    <div className="web-Page">
      Hello
     <Header/>
     <Nav/>
     <Sidebar/> 
     <Foot/>
    </div>
    );
}
export default Web