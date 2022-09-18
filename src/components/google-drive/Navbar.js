import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

 export default function NavbarComponent() {
  return (
    
    <Navbar sticky="top"  collapseOnSelect expand="sm" bg="dark" variant="dark">
      
      <Navbar.Brand as={Link} to="/" >
      <a style={{ marginLeft: '.5rem' }} />
      <FontAwesomeIcon icon={faGraduationCap} />
      <a style={{ marginLeft: '.5rem' }} />
      Campus Drive
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="container-fluid">
      <Nav.Item>
         <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link>Getting Started</Nav.Link>
      </Nav.Item>
      
      <Nav.Item className="ms-auto">
        <Nav.Link as={Link} to="/user">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
      </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    
    </Navbar>
    
  )
    
    
}
