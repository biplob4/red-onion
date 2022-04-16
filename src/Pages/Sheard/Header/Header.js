import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ width: "200px" }} as={Link} to="/home">
                        <img className='w-100' src={logo} alt="imaige" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/cart">
                                <FontAwesomeIcon className='cartIcon' style={{ fontSize: "20px", color: "black" }} icon={faCartPlus} />
                            </Nav.Link>
                            {!user ?
                                <><Nav.Link as={Link} to='/login' eventKey={2}>
                                    <Link to='/login'><button className='loginBtn'>Login</button></Link>
                                </Nav.Link>
                                    <Nav.Link eventKey={2} as={Link} to="/signup">
                                        <button className="signupBtn">Signup</button>
                                    </Nav.Link>
                                </> :
                                <Nav.Link onClick={()=>signOut(auth)} eventKey={2}>
                                    <button className="signupBtn">Sign-Out</button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;