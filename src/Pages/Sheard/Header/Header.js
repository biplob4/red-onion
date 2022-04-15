import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Header.css'
import { Button } from 'bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{width:"200px"}} as={Link} to="/home">
                        <img className='w-100' src={logo} alt="imaige"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#">
                               <FontAwesomeIcon className='cartIcon' style={{fontSize:"20px",color:"black"}} icon={faCartPlus} />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                               <button className='loginBtn'>Login</button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                               <button className="signupBtn">Signup</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;