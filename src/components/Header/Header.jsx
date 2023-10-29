import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Header.css'


const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-light shadow-lg">
                <Container>
                    <Navbar.Brand className='fs-2' href="#">NITEX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='link' href="#action1">Home</Nav.Link>
                            <Nav.Link className='link' href="#action2">About</Nav.Link>
                            <Nav.Link className='link' href="#action2">Service</Nav.Link>
                            <Nav.Link className='link' href="#action2">Testimonial</Nav.Link>
                            <Nav.Link className='link' href="#action2">Contact Us</Nav.Link>
                            <Nav.Link className='link' href="#action2">Consultency</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header